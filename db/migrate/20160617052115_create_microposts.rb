class CreateMicroposts < ActiveRecord::Migration
  def change
    create_table :microposts do |t|
      t.references :user, index: true, foreign_key: true
      t.text :from
      t.text :stSep
      t.text :to

      t.timestamps null: false
      t.index [:user_id, :created_at]
    end
  end
end
