class AddNovelIdToCharacter < ActiveRecord::Migration[6.0]
  def change
    add_column :characters, :novel_id, :integer
  end
end
