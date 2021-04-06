require 'rails_helper'

RSpec.describe TournamentParticipant, type: :model do
  it { should belong_to :user }
  it { should belong_to :tournament }
end
