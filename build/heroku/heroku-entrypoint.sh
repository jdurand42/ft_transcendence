#!/bin/sh
set -x
rm -f /tmp/rails.pid
bower install --allow-root
redis-server --bind 127.0.0.1
rails db:migrate
rails server -b 0.0.0.0 --pid /tmp/rails.pid -p ${PORT}
