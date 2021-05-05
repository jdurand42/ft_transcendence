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
  rescue_from WrongPasswordError, with: :forbidden

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
  rescue_from JoinPrivateChatError, with: :unauthorized

  class NotAllowedError < StandardError
    def message
      I18n.t('notAllowed')
    end
  end
  rescue_from NotAllowedError, with: :unauthorized

  class RunningWarTimeError < StandardError
    def message
      I18n.t('noRunningWarTime')
    end
  end
  rescue_from RunningWarTimeError, with: :unauthorized

  class WarTimeMatchLimitError < StandardError
    def message
      I18n.t('warTimeMatchLimit')
    end
  end
  rescue_from WarTimeMatchLimitError, with: :unauthorized

  class TournamentRunningError < StandardError
    def message
      I18n.t('trnmtRunning')
    end
  end
  rescue_from TournamentRunningError, with: :unauthorized

  class TournamentNotStartedError < StandardError
    def message
      I18n.t('trnmtNotStarted')
    end
  end
  rescue_from TournamentNotStartedError, with: :unauthorized

  class AlreadyPlayedError < StandardError
    def message
      I18n.t('alreadyPlayed')
    end
  end
  rescue_from AlreadyPlayedError, with: :unauthorized

  class OpponentNotParticipantError < StandardError
    def message
      I18n.t('opponentNotParticipant')
    end
  end
  rescue_from OpponentNotParticipantError, with: :unauthorized

  class PlayerInGameError < StandardError
    def message
      I18n.t('gamePlayersAlreadyInGame')
    end
  end
  rescue_from PlayerInGameError, with: :unauthorized

  class OpponentNotAvailableError < StandardError
    def message
      I18n.t('opponentNotAvailable')
    end
  end
  rescue_from OpponentNotAvailableError, with: :unauthorized

  class GuildOwnerDeletionError < StandardError
    def message
      I18n.t('guildOwnerDeletion')
    end
  end
  rescue_from GuildOwnerDeletionError, with: :unauthorized

  class WarOngoingError < StandardError
    def message
      I18n.t('warOngoing')
    end
  end
  rescue_from WarOngoingError, with: :unauthorized

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
