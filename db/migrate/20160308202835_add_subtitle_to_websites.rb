class AddSubtitleToWebsites < ActiveRecord::Migration
  def change
    add_column :websites, :subtitle, :string
  end
end
