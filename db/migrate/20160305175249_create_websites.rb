class CreateWebsites < ActiveRecord::Migration
  def change
    create_table :websites do |t|
      t.string :title
      t.text :body
      t.string :site_url

      t.timestamps null: false
    end
  end
end
