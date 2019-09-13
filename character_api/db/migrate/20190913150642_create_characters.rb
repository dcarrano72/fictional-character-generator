class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :age
      t.string :eye_color
      t.string :personality_traits, array: true
      t.timestamps
    end
  end
end
