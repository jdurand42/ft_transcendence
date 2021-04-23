
namespace :reset do
  desc "Set status to offline for each user"
  task status: :environment do
    ActiveRecord::Base.transaction do
      User.all.update(status: 'offline')
    end
  end
end
