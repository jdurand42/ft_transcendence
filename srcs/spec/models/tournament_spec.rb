require 'rails_helper'

RSpec.describe Tournament, type: :model do
  it { validate_presence_of :start_date }
  it { should have_many(:participants) }

end
