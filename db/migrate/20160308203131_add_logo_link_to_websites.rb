class AddLogoLinkToWebsites < ActiveRecord::Migration
  def change
    add_column :websites, :logo_link, :string
  end
end
