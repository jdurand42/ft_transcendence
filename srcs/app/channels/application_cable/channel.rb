# frozen_string_literal: true

module ApplicationCable
  class Channel < ActionCable::Channel::Base
    include(CacheHelper)
  end
end
