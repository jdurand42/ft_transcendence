# frozen_string_literal: true

module Users
  class OmniauthCallbacksController < DeviseTokenAuth::OmniauthCallbacksController
    def default_devise_mapping
      raise NotImplementedError('Marvin not found')
    end

    def assign_provider_attrs(user, auth_hash)
      user.assign_attributes({
                               email: auth_hash['info']['email'],
                               nickname: auth_hash['info']['nickname'],
                               password: Devise.friendly_token[0, 20]
                             })
    end
  end
end