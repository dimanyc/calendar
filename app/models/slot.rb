class Slot < ApplicationRecord

  validates_presence_of :start_time, :end_time
  after_initialize :append_end_time

  def append_end_time
    if start_time
      self.end_time = start_time + 30.minutes
    end
  end

end
