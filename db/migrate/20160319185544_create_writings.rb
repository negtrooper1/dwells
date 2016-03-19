class CreateWritings < ActiveRecord::Migration
  def change
    create_table :writings do |t|
      t.string :title
      t.string :url

      t.timestamps null: false
    end
  end
end
