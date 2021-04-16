FROM ruby:2.7.3
WORKDIR /app
RUN mkdir -p /app/.profile.d && apt-get update && apt-get install -y \
                                  nodejs \
                                  yarn \
                                  curl \
                                  cron \
                                  bash \
                                  imagemagick \
                                  build-essential \
                                  libpq-dev &&\
                                  curl -sL https://deb.nodesource.com/setup_10.x | bash - && \
                                  curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
                                  echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
                                  apt-get update && apt install -y \
                                  nodejs \
                                  yarn \
                                  iproute2 \
                                  openssh-client \
                                  python3
RUN npm install -g bower
RUN git clone  https://github.com/kh42z/omniauth-marvin.git && cd omniauth-marvin && gem build omniauth-marvin.gemspec && gem install omniauth-marvin && gem uninstall -i /usr/local/lib/ruby/gems/2.7.0 minitest
COPY srcs/ /app
RUN bundle install && yarn install
ADD build/heroku/heroku-entrypoint.sh /heroku-entrypoint.sh
ADD build/heroku/heroku-exec.sh /app/.profile.d
RUN chmod 0755 /heroku-entrypoint.sh && rm /bin/sh && ln -s /bin/bash /bin/sh
RUN groupadd -r p42ng && useradd -r -s /bin/false -g p42ng p42ng
RUN chown -R p42ng:p42ng /app
USER p42ng
# Crontab for whenever gem
RUN crontab -l | { cat; echo ""; } | crontab - && bundle exec whenever --update-crontab
EXPOSE 3000
ENTRYPOINT ["/bin/bash","-c", "/heroku-entrypoint.sh"]
