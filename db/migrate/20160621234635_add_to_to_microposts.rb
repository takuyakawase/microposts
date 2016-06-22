class AddToToMicroposts < ActiveRecord::Migration
  def change
    add_column :microposts, :to, :string
  end
end
