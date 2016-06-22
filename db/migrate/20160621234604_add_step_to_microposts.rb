class AddStepToMicroposts < ActiveRecord::Migration
  def change
    add_column :microposts, :step, :string
  end
end
