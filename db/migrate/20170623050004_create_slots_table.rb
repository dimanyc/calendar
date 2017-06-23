class CreateSlotsTable < ActiveRecord::Migration[5.1]
  def change
    create_table :slots do |t|
      t.datetime :start_time, null: false
      t.datetime :end_time, null:false
      t.timestamps
      t.index :start_time
      t.index :end_time

    end
  end
end
