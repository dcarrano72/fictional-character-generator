class AddColumnToNovel < ActiveRecord::Migration[6.0]
  def change
    add_column :novels, :author, :string
  end
end
