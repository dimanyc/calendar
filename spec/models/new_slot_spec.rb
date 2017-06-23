require 'rails_helper'

RSpec.describe Slot, type: :model do

  it { should validate_presence_of(:start_time) }
  it { should validate_presence_of(:end_time) }

  it 'should set the default end time to 30 minutes' do
    date = DateTime.parse('1985-03-16T03:33:33+03:33')
    allow(Time)
      .to receive(:now)
      .and_return(date)
    slot = Slot.new(start_time: Time.now)
    expect(slot.end_time)
      .to eq(date + 30.minutes)
  end

end
