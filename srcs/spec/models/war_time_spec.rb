# frozen_string_literal: true

require 'rails_helper'

RSpec.describe WarTime, type: :model do
  it 'should validate presence of attributes' do
    should validate_presence_of(:day)
    should validate_presence_of(:start_hour)
    should validate_presence_of(:end_hour)
    should validate_presence_of(:time_to_answer)
    should validate_presence_of(:max_unanswered)
  end

  it 'should have correct association' do
    should belong_to(:war)
  end
end
