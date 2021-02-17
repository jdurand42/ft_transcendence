require 'rails_helper'

RSpec.describe GameRecord, type: :model do
  it { should belong_to(:winner) }
  it { should belong_to(:looser) }
end
