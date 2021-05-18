# frozen_string_literal: true

class GamePolicy < ApplicationPolicy
  attr_reader :user, :record

  def destroy?
    return true if (user.id == record.player_left.id || user.id == record.player_right.id) && record.status == 'pending'

    false
  end
end
