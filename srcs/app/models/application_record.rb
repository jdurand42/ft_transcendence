# frozen_string_literal: true

class ApplicationRecord < ActiveRecord::Base
  include(AchievementHelper)

  self.abstract_class = true
end
