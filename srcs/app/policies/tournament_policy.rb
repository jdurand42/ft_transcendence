# frozen_string_literal: true

class TournamentPolicy < ApplicationPolicy
  def update?
    user.admin?
  end

  def destroy?
    user.admin?
  end
end
