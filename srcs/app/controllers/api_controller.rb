# frozen_string_literal: true

class ApiController < ApplicationController
  include DeviseTokenAuth::Concerns::SetUserByToken
  include Pundit
  before_action :authenticate_user!

  rescue_from ActionController::ParameterMissing, with: :unprocessable_entity

  class WrongPasswordError < StandardError
    def message
      I18n.t('passwordIncorrect')
    end
  end
  rescue_from WrongPasswordError, with: :unauthorized

  class MessageTooLongError < StandardError
    def message
      I18n.t('messageTooLong')
    end
  end
  rescue_from MessageTooLongError, with: :unprocessable_entity

  class JoinPrivateChatError < StandardError
    def message
      I18n.t('joinPrivateChat')
    end
  end
  rescue_from JoinPrivateChatError, with: :forbidden

  class NotAllowedError < StandardError
    def message
      I18n.t('notAllowed')
    end
  end
  rescue_from NotAllowedError, with: :forbidden

  class RunningWarTimeError < StandardError
    def message
      I18n.t('noRunningWarTime')
    end
  end
  rescue_from RunningWarTimeError, with: :forbidden

  class WarTimeMatchLimitError < StandardError
    def message
      I18n.t('warTimeMatchLimit')
    end
  end
  rescue_from WarTimeMatchLimitError, with: :forbidden

  class TournamentRunningError < StandardError
    def message
      I18n.t('trnmtRunning')
    end
  end
  rescue_from TournamentRunningError, with: :forbidden

  class TournamentNotStartedError < StandardError
    def message
      I18n.t('trnmtNotStarted')
    end
  end
  rescue_from TournamentNotStartedError, with: :forbidden

  class AlreadyPlayedError < StandardError
    def message
      I18n.t('alreadyPlayed')
    end
  end
  rescue_from AlreadyPlayedError, with: :forbidden

  class OpponentNotParticipantError < StandardError
    def message
      I18n.t('opponentNotParticipant')
    end
  end
  rescue_from OpponentNotParticipantError, with: :forbidden

  class PlayerInGameError < StandardError
    def message
      I18n.t('gamePlayersAlreadyInGame')
    end
  end
  rescue_from PlayerInGameError, with: :forbidden

  class OpponentNotAvailableError < StandardError
    def message
      I18n.t('opponentNotAvailable')
    end
  end
  rescue_from OpponentNotAvailableError, with: :forbidden

  class GuildOwnerDeletionError < StandardError
    def message
      I18n.t('guildOwnerDeletion')
    end
  end
  rescue_from GuildOwnerDeletionError, with: :forbidden

  class WarOngoingError < StandardError
    def message
      I18n.t('warOngoing')
    end
  end
  rescue_from WarOngoingError, with: :forbidden

  def unprocessable_entity(error)
    json_response({ error: error.message }, 422)
  end

  def unauthorized(error)
    json_response({ error: error.message }, 401)
  end

  def forbidden(error)
    json_response({ error: error.message }, 403)
  end

  def pundit_user
    current_user
  end
end
