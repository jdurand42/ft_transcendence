# frozen_string_literal: true

class TournamentPolicy < ApplicationPolicy
  def update?
    TournamentParticipant.where(user: user, tournament: record, role: 'owner').first.present?
  end

  def destroy?
    user.admin?
  end
end
