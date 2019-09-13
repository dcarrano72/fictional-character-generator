# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Novel.create([
    {author: 'Izac Keplin', title: 'Novel2', genre: 'Fiction', description: 'This is the description'}
])

Character.create([
    {name: 'Dejanna Hemric', age: '48', eye_color: 'light green', personality_traits: ['outgoing', 'mean', 'weird'], novel_id: 1},
    {name: 'Marlo Caudill', age: '12', eye_color: 'blue', personality_traits: ['outgoing', 'selfish', 'fearful'], novel_id: 1},
    {name: 'Crisela Kasparian', age: '37', eye_color: 'light green', personality_traits: ['worrysome', 'depressed', 'stressed'], novel_id: 1},
    {name: 'Ashlan Panaia', age: '36', eye_color: 'blue', personality_traits: ['smart', 'gregarious', 'greedy'], novel_id: 1},
    {name: 'Perl Sultzbaugh', age: '50', eye_color: 'bright blue', personality_traits: ['bully', 'gregarious', 'arrogant'], novel_id: 1}
])