# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Novel.create([
    {title: 'Novel1', genre: 'Fiction', description: 'This is the description'}

])

Character.create([
    {name: 'Herman Munson', age: '50', eye_color: 'gray', personality_traits: ['scary', 'funny', 'gray'], novel_id: 1}
])