const moviesData = [
  {
    name: "Transformers: Rise of the Beasts",
    imdb: 6.5,
    desc: "During the '90s, a new faction of Transformers - the Maximals - join the Autobots as allies in the battle for Earth.",
    genre: Action, Adventure, Sci-Fi",

    poster:
      "https://m.media-amazon.com/images/M/MV5BZTNiNDA4NmMtNTExNi00YmViLWJkMDAtMDAxNmRjY2I2NDVjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    year: 2023,
  },
    {
    name: " Mission: Impossible - Dead Reckoning Part One ",
    imdb: 7.9,
    desc: "Ethan Hunt and his IMF team must track down a dangerous weapon before it falls into the wrong hands.",
    genre: "Action, Adventure, Crime",

    poster:
      "https://m.media-amazon.com/images/M/MV5BMDkyMmZlN2EtMzhlNC00ODc5LTk0ODgtOWRlNzRkYzRkNTdmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg",
    year: 2023,
  },
  {
    name: " John Wick: Chapter 4  ",
    imdb: 7.9,
    desc: "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes",
    genre: "Action, Crime, Thriller",

    poster:
      "https://www.themoviedb.org/t/p/original/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    year: 2023,
  },
  {
    name: "  Evil Dead Rise  ",
    imdb: 6.7,
    desc: "A twisted tale of two estranged sisters whose reunion is cut short by the rise of flesh-possessing demons, thrusting them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
    genre: "Horror",

    poster:
      "https://m.media-amazon.com/images/M/MV5BMmZiN2VmMjktZDE5OC00ZWRmLWFlMmEtYWViMTY4NjM3ZmNkXkEyXkFqcGdeQXVyMTI2MTc2ODM3._V1_FMjpg_UX1000_.jpg",
    year: 2023,
  },
  {
    name: " Fast X ",
    imdb: 5.9,
    desc: "Dom Toretto and his family are targeted by the vengeful son of drug kingpin Hernan Reyes.",
    genre: "Action, Adventure, Crime",

    poster:
      "https://m.media-amazon.com/images/M/MV5BNzZmOTU1ZTEtYzVhNi00NzQxLWI5ZjAtNWNhNjEwY2E3YmZjXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
    year: 2023,
  },
  {
    name: " The Equalizer 3 ",
    imdb: 7.0,
    desc: "Robert McCall finds himself at home in Southern Italy but he discovers his friends are under the control of local crime bosses. As events turn deadly, McCall knows what he has to do: become his friends' protector by taking on the mafia.",
    genre: "Action, Crime, Thriller",

    poster: "https://images.static-bluray.com/products/20/129006_1_large.jpg",
    year: 2023,
  },
  {
    name: "Black Panther: Wakanda Forever ",
    imdb: 6.7,
    desc: "Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect the kingdom of Wakanda from intervening world powers in the wake of King T'Challa's death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for their nation.",
    genre: "Sci-fi ",

    poster:
      "https://cdn.marvel.com/content/1x/blackpantherwakandaforever_lob_crd_06.jpg",
    year: 2023,
  },

  {
    name: " Take Care of Maya ",
    imdb: 8,
    desc: "As a medical team tries to understand 10-year-old Maya Kowalski's rare illness, they begin to question her parents. Suddenly, Maya is in state custody - despite a family desperate to bring their daughter home.",
    genre: "Documentary",

    poster:
      "https://www.scotsman.com/jpim-static/image/2023/06/15/13/AAAABbhflSDLL21vXmEFw0NBALADqMhs9E1q3feUajQ_LIfMmd6bCH_Q6xdy5hEB9tUWp_XaHAMr57mdENxvekPJEq5Hcimlxrnp7MGh6yO8rhDIrRUed77G7ePQQrPNiQ2TxPD6mg.jpg?width=1200&enable=upscale",
    year: 2023,
  },
  {
    name: " Arnold ",
    imdb: 8.1,
    desc: "Follows the life of Arnold Schwarzenegger, from his days of lifting weights to his successes in Hollywood, his time serving as governor of California, and both the joys and volatility of his family life",
    genre: "Documentary, Biography",

    poster:
      "https://m.media-amazon.com/images/M/MV5BMjlhOWI3ZjItMDk1OS00ZWUxLWE5ZWYtNzY1YWM5OTk1NjAwXkEyXkFqcGdeQXVyMTMzNzIyNDc1._V1_.jpg",
    year: 2023,
  },
  {
    name: " Oppenheimer ",
    imdb: 8.1,
    desc: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb",
    genre: "Biography, Drama, History ",

    poster:
      "https://movies.universalpictures.com/media/04-opp-dm-mobile-banner-1080x745-pl-f01-050523-1-1-1-6458870c70c1d-1.jpg",
    year: 2023,
  },
  {
    name: " BlackBerry ",
    imdb: 7.4,
    desc: "The story of the meteoric rise and catastrophic demise of the world's first smartphone.",
    genre: "Biography,  Comedy, Drama ",

    poster:
      "https://m.media-amazon.com/images/M/MV5BMDNhZWU4NTQtYjk1NS00MTM1LTg3ODYtMzE0MjQ2YTI5MGM4XkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg",
    year: 2023,
  },
  {
    name: " Babylon  ",
    imdb: 7.2,
    desc: "A tale of outsized ambition and outrageous excess, it traces the rise and fall of multiple characters during an era of unbridled decadence and depravity in early Hollywood.",
    genre: "Comedy, Drama, History ",

    poster:
      "https://assets.gadgets360cdn.com/pricee/assets/product/202212/babylon_poster_1672374652.jpeg",
    year: 2022,
  },
  {
    name: " The Northman  ",
    imdb: 7.0,
    desc: "A young Viking prince is on a quest to avenge his father's murder.",
    genre: "Action, Adventure, Drama",

    poster: "https://upload.wikimedia.org/wikipedia/en/8/8c/The_Northman.png",
    year: 2022,
  },
  {
    name: "The Flash",
    imdb: 7.2,
    desc: "Barry Allen uses his super speed to change the past, but his attempt to save his family creates a world without super heroes, forcing him to race for his life in order to save the future.",
    genre: "Action, Adventure, Fantasy",
    poster:
      "https://i0.wp.com/www.supermanhomepage.com/clickandbuilds/SupermanHomepage/wp-content/uploads/2023/05/TheFlash-TheFash-Poster.jpeg?resize=680%2C850&ssl=1",
    year: 2023,
  },
  {
    name: "  Extraction II  ",
    imdb: 7.1,
    desc: "After barely surviving his grievous wounds from his mission in Dhaka, Bangladesh, Tyler Rake is back, and his team is ready to take on their next mission.",
    genre: "Action, Thriller",

    poster:
      "https://upload.wikimedia.org/wikipedia/en/0/02/Extraction_2_poster.jpg",
    year: 2023,
  },
  {
    name: " No Hard Feelings  ",
    imdb: 6.8,
    desc: "On the brink of losing her home, Maddie finds an intriguing job listing: helicopter parents looking for someone to bring their introverted 19-year-old son out of his shell before college. She has one summer to make him a man or die trying.",
    genre: " Comedy",

    poster:
      "https://m.media-amazon.com/images/M/MV5BMjg3N2M3OWUtZGQ3NC00OGI1LTllZDUtMTdiYWQxMTk0YTg2XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
    year: 2023,
  },
  {
    name: "The 400 Blows",
    imdb: 8.1,
    desc: "A young boy, left without attention, delves into a life of petty crime.",
    genre: "crime,drama",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYTQ4MjA4NmYtYjRhNi00MTEwLTg0NjgtNjk3ODJlZGU4NjRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    year: 1959,
  },
  {
    name: "Avatar: The Way of Water",
    imdb: 7.6,
    desc: "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
    genre: "Sci-fi/Action",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg",
    year: 2022,
  },
  {
    name: "The Blackening",
    imdb: 6.5,
    desc: "Seven Black friends go away for the weekend and end up trapped in a cabin with a killer who has a vendetta. Will their street smarts and knowledge of horror movies help them stay alive? Probably not.",
    genre: "Horror/Comedy",

    poster:
      "https://m.media-amazon.com/images/M/MV5BMGMzNzEyZWItYjUwZC00NmVkLTk5MWUtZGVjNWJlMjBjODA4XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    year: 2022,
  },
  {
    name: "Sisu ",
    imdb: 6.9,
    desc: "When an ex-soldier who discovers gold in the Lapland wilderness tries to take the loot into the city, Nazi soldiers led by a brutal SS officer battle him.",
    genre: "Action/War",

    poster:
      "https://m.media-amazon.com/images/M/MV5BMWYwMzNkOWEtNjA3YS00YjE5LTlkMjYtMmRjMjExNjA1NDM0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_FMjpg_UX1000_.jpg",
    year: 2022,
  },
  {
    name: "The Invisible Man",
    imdb: 7.1,
    desc: "When Cecilia's abusive ex takes his own life and leaves her his fortune, she suspects his death was a hoax. As a series of coincidences turn lethal, Cecilia works to prove that she is being hunted by someone nobody can see.",
    genre: "Drama, Horror, Mystery",

    poster:
      "https://m.media-amazon.com/images/M/MV5BYzc0OGI3NzctNDljYS00MjFiLWIzNjktNjY5MTYwYWRiYWUwXkEyXkFqcGdeQXVyNTU5Mzk0NjE@._V1_FMjpg_UX1000_.jpg",
    year: 2020,
  },
  {
    name: "Greyhound",
    imdb: 7,
    desc: "Several months after the U.S. entry into World War II, an inexperienced U.S. Navy commander must lead an Allied convoy being stalked by a German submarine wolf pack",
    genre: "Action, Drama, History",

    poster:
      "https://m.media-amazon.com/images/M/MV5BZWQzNjk3MGUtYWE1Yy00NTY1LWJjOTctNTlhMTBjYzRlZDEyXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
    year: 2020,
  },

  {
    name: "A Man Called Otto",
    imdb: 7.5,
    desc: "Otto is a grump who's given up on life following the loss of his wife and wants to end it all. When a young family moves in nearby, he meets his match in quick-witted Marisol, leading to a friendship that will turn his world around.",
    genre: "Drama/Comedy",

    poster:
      "https://m.media-amazon.com/images/M/MV5BNzg3OTEzMTgtYWU0OC00YTI0LWIxOTAtNmRkNTc0Nzg2YWU1XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_FMjpg_UX1000_.jpg",
    year: 2022,
  },
  {
    name: "Beauty and the Beast",
    imdb: 7.1,
    desc: "A selfish Prince is cursed to become a monster for the rest of his life, unless he learns to fall in love with a beautiful young woman he keeps prisoner.",
    genre: " Musical/Romance",

    poster:
      "https://m.media-amazon.com/images/M/MV5BMTUwNjUxMTM4NV5BMl5BanBnXkFtZTgwODExMDQzMTI@._V1_.jpg",
    year: 2017,
  },
  {
    name: "Logan",
    imdb: 8.1,
    desc: "In a future where mutants are nearly extinct, an elderly and weary Logan leads a quiet life. But when Laura, a mutant child pursued by scientists, comes to him for help, he must get her to safety.",
    genre: " Action/Sci-fi",

    poster:
      "https://m.media-amazon.com/images/M/MV5BYzc5MTU4N2EtYTkyMi00NjdhLTg3NWEtMTY4OTEyMzJhZTAzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_FMjpg_UX1000_.jpg",
    year: 2017,
  },
  {
    name: "No Time to Die",
    imdb: 7.3,
    desc: "James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology",
    genre: "Action, Adventure, Thriller",

    poster:
      "https://m.media-amazon.com/images/M/MV5BYWQ2NzQ1NjktMzNkNS00MGY1LTgwMmMtYTllYTI5YzNmMmE0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_FMjpg_UX1000_.jpg",
    year: 2021,
  },
  {
    name: "Black Widow ",
    imdb: 6.7,
    desc: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
    genre: "Action, Adventure, Sci-Fi",

    poster:
      "https://upload.wikimedia.org/wikipedia/en/e/e9/Black_Widow_%282021_film%29_poster.jpg",
    year: 2021,
  },
  {
    name: "Top Gun: Maverick",
    imdb: 8.3,
    desc: "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it",
    genre: "Action, Drama",

    poster:
      "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    year: 2022,
  },
  {
    name: "Malignant",
    imdb: 6.2,
    desc: "Madison is paralyzed by shocking visions of grisly murders, and her torment worsens as she discovers that these waking dreams are in fact terrifying realities.",
    genre: "Crime, Horror, Mystery",

    poster:
      "https://m.media-amazon.com/images/M/MV5BYTc0NWIwOTYtNzEwYi00YmUyLTlmYWYtYjJiZjRjN2RjMjAxXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg",
    year: 2021,
  },
  {
    name: "Insidious: The Red Door",
    imdb: 7.2,
    desc: "The Lamberts must go deeper into The Further than ever before to put their demons to rest once and for all",
    genre: "Horror, Mystery, Thriller",

    poster:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Insidious_the_red_door.png/220px-Insidious_the_red_door.png",
    year: 2023,
  },
  {
    name: "The Revenant",
    imdb: 8,
    desc: "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.",
    genre: "Action, Adventure, Drama",

    poster:
      "https://m.media-amazon.com/images/M/MV5BMDE5OWMzM2QtOTU2ZS00NzAyLWI2MDEtOTRlYjIxZGM0OWRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    year: 2015,
  },
  {
    name: "Mad Max: Fury Road",
    imdb: 7.6,
    desc: "Viago, Deacon, and Vladislav are vampires who are struggling with the mundane aspects of modern life, like paying rent, keeping up with the chore wheel, trying to get into nightclubs, and overcoming flatmate conflicts.",
    genre: " Action, Adventure, Sci-Fi",

    poster:
      "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    year: 2015,
  },
  {
    name: "John Wick",
    imdb: 7.4,
    desc: "An ex-hitman comes out of retirement to track down the gangsters who killed his dog and stole his car.",
    genre: "Action, Crime, Thriller",

    poster:
      "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_FMjpg_UX1000_.jpg",
    year: 2014,
  },
  {
    name: "Guardians of the Galaxy Vol. 3",
    imdb: 8.2,
    desc: "An ex-hitman comes out of retirement to track down the gangsters who killed his dog and stole his car.",
    genre: "Action, Adventure, Comedy",

    poster:
      "https://upload.wikimedia.org/wikipedia/en/7/74/Guardians_of_the_Galaxy_Vol._3_poster.jpg",
    year: 2023,
  },
  {
    name: "X-Men: Apocalypse",
    imdb: 6.9,
    desc: "In the 1980s the X-Men must defeat an ancient all-powerful mutant, En Sabah Nur, who intends to thrive through bringing destruction to the world.",
    genre: "Action/Adventure",

    poster:
      "https://m.media-amazon.com/images/M/MV5BMjU1ODM1MzYxN15BMl5BanBnXkFtZTgwOTA4NDE2ODE@._V1_.jpg",
    year: 2016,
  },
  {
    name: "Deadpool",
    imdb: 8,
    desc: "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.",
    genre: "Action/Adventure",

    poster:
      "https://upload.wikimedia.org/wikipedia/en/2/23/Deadpool_%282016_poster%29.png",
    year: 2016,
  },
  {
    name: "Man of Steel",
    imdb: 7.1,
    desc: "An alien child is evacuated from his dying world and sent to Earth to live among humans. His peace is threatened when other survivors of his home planet invade Earth.",
    genre: "Action/Adventure/superhero",

    poster:
      "https://m.media-amazon.com/images/M/MV5BMTk5ODk1NDkxMF5BMl5BanBnXkFtZTcwNTA5OTY0OQ@@._V1_FMjpg_UX1000_.jpg",
    year: 2013,
  },
  {
    name: "Batman v Superman: Dawn of Justice",
    imdb: 6.4,
    desc: "Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel, while the world wrestles with what kind of a hero it really needs.",
    genre: "Action/Adventure/superhero",

    poster:
      "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
    year: 2016,
  },
  {
    name: " Titanic",
    imdb: 6.4,
    desc: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    genre: "Romance/Drama",

    poster:
      "https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png",
    year: 1997,
  },
  {
    name: " Avatar ",
    imdb: 7.9,
    desc: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    genre: "Sci-fi/Action",

    poster:
      "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
    year: 2009,
  },
  {
    name: " Into the Wild ",
    imdb: 8.1,
    desc: "After graduating from Emory University, top student and athlete Christopher McCandless abandons his possessions, gives his entire $24,000 savings account to charity and hitchhikes to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters that shape his life.",
    genre: "Adventure, Biography, Drama",

    poster:
      "https://upload.wikimedia.org/wikipedia/en/d/dc/Into_the_Wild_%282007_film_poster%29.png",
    year: 2007,
  },
  {
    name: "The Bourne Ultimatum",
    imdb: 8,
    desc: "Jason Bourne dodges a ruthless C.I.A. official and his Agents from a new assassination program while searching for the origins of his life as a trained killer..",
    genre: "Action, Mystery, Thriller",

    poster: "https://cdn.kinocheck.com/i/o96d5kfx7t.jpg",
    year: 2007,
  },
  {
    name: " Gravity",
    imdb: 6.4,
    desc: "Two astronauts work together to survive after an accident leaves them stranded in space.",
    genre: "Sci-fi/Thriller",

    poster:
      "https://m.media-amazon.com/images/M/MV5BNjE5MzYwMzYxMF5BMl5BanBnXkFtZTcwOTk4MTk0OQ@@._V1_FMjpg_UX1000_.jpg",
    year: 2013,
  },
  {
    name: "The Dark Knight ",
    imdb: 9,
    desc: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    genre: "Action, Crime, Drama",

    poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
    year: 2008,
  },
  {
    name: "The Dark Knight Rises ",
    imdb: 8.4,
    desc: "Eight years after the Joker's reign of chaos, Batman is coerced out of exile with the assistance of the mysterious Selina Kyle in order to defend Gotham City from the vicious guerrilla terrorist Bane.",
    genre: "Action, Drama, Thriller",

    poster:
      "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_FMjpg_UX1000_.jpg",
    year: 2012,
  },
  {
    name: "Batman Begins ",
    imdb: 8.2,
    desc: "After witnessing his parents' death, Bruce learns the art of fighting to confront injustice. When he returns to Gotham as Batman, he must stop a secret society that intends to destroy the city.",
    genre: "Action, Crime, Drama",

    poster:
      "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
    year: 2005,
  },
  {
    name: "Guardians of the Galaxy ",
    imdb: 8,
    desc: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
    genre: "Action, Adventure, Comedy",

    poster:
      "https://m.media-amazon.com/images/M/MV5BNDIzMTk4NDYtMjg5OS00ZGI0LWJhZDYtMzdmZGY1YWU5ZGNkXkEyXkFqcGdeQXVyMTI5NzUyMTIz._V1_.jpg",
    year: 2014,
  },
  {
    name: "Captain America: Civil War",
    imdb: 7.8,
    desc: "Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man.",
    genre: "Action, Sci-Fi",

    poster:
      "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_.jpg",
    year: 2016,
  },
  {
    name: "How to Be Single",
    imdb: 7.8,
    desc: "A group of young adults navigate love and relationships in New York City",
    genre: "Comedy, Drama, Romance",

    poster:
      "https://m.media-amazon.com/images/M/MV5BNzI4MDMwMzUwNF5BMl5BanBnXkFtZTgwMDgyNzkyNzE@._V1_.jpg",
    year: 2016,
  },
  {
    name: "Ted",
    imdb: 7.8,
    desc: "John Bennett, a man whose childhood wish of bringing his teddy bear to life came true, now must decide between keeping the relationship with the bear, Ted or his girlfriend, Lori.",
    genre: "Comedy",

    poster:
      "https://m.media-amazon.com/images/M/MV5BMTQ1OTU0ODcxMV5BMl5BanBnXkFtZTcwOTMxNTUwOA@@._V1_.jpg",
    year: 2012,
  },
  {
    name: "The Hangover",
    imdb: 7.7,
    desc: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.",
    genre: "Comedy",

    poster:
      "https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
    year: 2009,
  },
  {
    name: " Avengers: Age of Ultron",
    imdb: 7.3,
    desc: "TWhen Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
    genre: "Action, Adventure, Sci-Fi",

    poster:
      "https://upload.wikimedia.org/wikipedia/en/f/ff/Avengers_Age_of_Ultron_poster.jpg",
    year: 2015,
  },
  {
    name: " The Avengers",
    imdb: 8,
    desc: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    genre: " Action, Sci-Fi",

    poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    year: 2012,
  },
  {
    name: "Doctor Strange",
    imdb: 7.5,
    desc: "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
    genre: "Action, Adventure, Fantasy",

    poster:
      "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_FMjpg_UX1000_.jpg",
    year: 2016,
  },
  {
    name: "Inception",
    imdb: 7.5,
    desc: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    genre: "Action, Adventure, Sci-Fi",

    poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    year: 2010,
  },
  {
    name: "Forrest Gump",
    imdb: 7.5,
    desc: "The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.",
    genre: "Drama, Romance",

    poster:
      "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
    year: 1994,
  },
  {
    name: "Avengers: Infinity War",
    imdb: 8.4,
    desc: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    genre: " Action, Adventure, Sci-Fi",

    poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg",
    year: 2018,
  },
  {
    name: "Mission: Impossible - Fallout",
    imdb: 7.7,
    desc: "Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong.",
    genre: " Action, Adventure, Thriller",

    poster:
      "https://m.media-amazon.com/images/M/MV5BNjRlZmM0ODktY2RjNS00ZDdjLWJhZGYtNDljNWZkMGM5MTg0XkEyXkFqcGdeQXVyNjAwMjI5MDk@._V1_FMjpg_UX1000_.jpg",
    year: 2018,
  },
  {
    name: "Mission: Impossible - Rogue Nation",
    imdb: 7.4,
    desc: "Ethan and his team take on their most impossible mission yet when they have to eradicate an international rogue organization as highly skilled as they are and committed to destroying the IMF.",
    genre: " Action, Adventure, Thriller",

    poster:
      "https://m.media-amazon.com/images/M/MV5BOTFmNDA3ZjMtN2Y0MC00NDYyLWFlY2UtNTQ4OTQxMmY1NmVjXkEyXkFqcGdeQXVyNTg4NDQ4NDY@._V1_.jpg",
    year: 2015,
  },
  {
    name: " Mission: Impossible - Ghost Protocol ",
    imdb: 7.4,
    desc: "The IMF is shut down when it's implicated in the bombing of the Kremlin, causing Ethan Hunt and his new team to go rogue to clear their organization's name.",
    genre: " Action, Adventure, Thriller",

    poster:
      "https://m.media-amazon.com/images/M/MV5BMTY4MTUxMjQ5OV5BMl5BanBnXkFtZTcwNTUyMzg5Ng@@._V1_FMjpg_UX1000_.jpg",
    year: 2011,
  },
  {
    name: " Mission: Impossible - Ghost Protocol ",
    imdb: 6.9,
    desc: "IMF agent Ethan Hunt comes into conflict with a dangerous and sadistic arms dealer who threatens his life and his fiancée in response.",
    genre: "Action, Adventure, Thriller",

    poster:
      "https://upload.wikimedia.org/wikipedia/en/b/bc/Mission_Impossible_III.jpg",
    year: 2006,
  },
  {
    name: " Ant-Man and the Wasp",
    imdb: 7,
    desc: "As Scott Lang balances being both a superhero and a father, Hope van Dyne and Dr. Hank Pym present an urgent new mission that finds the Ant-Man fighting alongside The Wasp to uncover secrets from their past",
    genre: " Action, Adventure, Comedy",

    poster:
      "https://upload.wikimedia.org/wikipedia/en/2/2c/Ant-Man_and_the_Wasp_poster.jpg",
    year: 2018,
  },
  {
    name: "Thor: Ragnarok ",
    imdb: 7.9,
    desc: "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela",
    genre: "Action, Adventure, Comedy",

    poster:
      "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
    year: 2017,
  },
  {
    name: "Spider-Man: Homecoming ",
    imdb: 7.4,
    desc: "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.",
    genre: "Action, Adventure, Sci-Fi",

    poster:
      "https://m.media-amazon.com/images/M/MV5BOGQ5YTM3YzctOTVmMC00OGIyLWFkZTYtMWYwOWZhMjA2MWMwXkEyXkFqcGdeQXVyMjUyMTE5MA@@._V1_FMjpg_UX1000_.jpg",
    year: 2017,
  },
  {
    name: " Joker ",
    imdb: 8.4,
    desc: "The rise of Arthur Fleck, from aspiring stand-up comedian and pariah to Gotham's clown prince and leader of the revolution.",
    genre: "Crime, Drama, Thriller",

    poster:
      "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    year: 2019,
  },
  {
    name: " Avengers: Endgame",
    imdb: 8.4,
    desc: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    genre: "Action, Adventure, Drama",

    poster:
      "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
    year: 2019,
  },
  {
    name: "Spider-Man: Far from Home",
    imdb: 7.4,
    desc: "Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever..",
    genre: "Action, Adventure, Comedy",

    poster:
      "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/Spider-Man-FarFromHome-rating.jpg?itok=CGe-MMMn",
    year: 2019,
  },
  {
    name: "La La Land",
    imdb: 8,
    desc: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    genre: "Comedy, Drama, Music",

    poster:
      "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg",
    year: 2016,
  },
  {
    name: "Interstellar ",
    imdb: 8.7,
    desc: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans",
    genre: "Adventure, Drama, Sci-Fi",

    poster:
      "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    year: 2014,
  },
  {
    name: "The Fault in Our Stars ",
    imdb: 7.7,
    desc: "Two teenage cancer patients begin a life-affirming journey to visit a reclusive author in Amsterdam.",
    genre: "Drama, Romance",

    poster:
      "https://m.media-amazon.com/images/M/MV5BNTVkMTFiZWItOTFkOC00YTc3LWFhYzQtZTg3NzAxZjJlNTAyXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    year: 2014,
  },
  {
    name: "Wonder Woman ",
    imdb: 7.4,
    desc: "When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny.",
    genre: " Action, Adventure, Fantasy",

    poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzODQzYjQtNTczNC00MzZhLTg1ZWYtZDUxYmQ3ZTY4NzA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    year: 2017,
  },
  {
    name: " Dune: Part One",
    imdb: 7.4,
    desc: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future",
    genre: "Action, Adventure, Drama",

    poster:
      "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    year: 2021,
  },
  {
    name: "Shang-Chi and the Legend of the Ten Rings",
    imdb: 7.4,
    desc: "Shang-Chi, the master of weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.",
    genre: "Action, Adventure, Drama",

    poster:
      "https://m.media-amazon.com/images/M/MV5BNTliYjlkNDQtMjFlNS00NjgzLWFmMWEtYmM2Mzc2Zjg3ZjEyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    year: 2021,
  },
  {
    name: " Zack Snyder's Justice League",
    imdb: 8,
    desc: "Determined to ensure that Superman's ultimate sacrifice wasn't in vain, Bruce Wayne recruits a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
    genre: "Action, sci-fi",

    poster:
      "https://c.saavncdn.com/948/Zack-Snyder-s-Justice-League-English-2021-20210318014002-500x500.jpg",
    year: 2021,
  },
  {
    name: "The Meg",
    imdb: 5.6,
    desc: "A group of scientists exploring the Marianas Trench encounter the largest marine predator that has ever existed - the Megalodon.",
    genre: "Action, Horror, Sci-Fi",

    poster:
      "https://m.media-amazon.com/images/M/MV5BMTAxMGRmODYtM2NkYS00ZGRlLWE1MWItYjI1MzIwNjQwN2RiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    year: 2018,
  },
  {
    name: "Red Sparrow",
    imdb: 6.6,
    desc: "Ballerina Dominika Egorova is recruited to 'Sparrow School,' a Russian intelligence service where she is forced to use her body as a weapon. Her first mission, targeting a C.I.A. agent, threatens to unravel the security of both nations.",
    genre: "Action, Drama, Thriller",

    poster:
      "https://m.media-amazon.com/images/M/MV5BMTA3MDkxOTc4NDdeQTJeQWpwZ15BbWU4MDAxNzgyNTQz._V1_.jpg",
    year: 2018,
  },
  {
    name: "Aquaman",
    imdb: 6.8,
    desc: "Arthur Curry, the human-born heir to the underwater kingdom of Atlantis, goes on a quest to prevent a war between the worlds of ocean and land.",
    genre: "Action, Adventure, Fantasy",

    poster:
      "https://media.comicbook.com/2018/07/aqamn-vert-tsr-dom-2764x4096-r01-master-1122913.jpeg",
    year: 2018,
  },
  {
    name: "Deadpool 2",
    imdb: 7.6,
    desc: "Foul-mouthed mutant mercenary Wade Wilson (a.k.a. Deadpool) assembles a team of fellow mutant rogues to protect a young boy with supernatural abilities from the brutal, time-traveling cyborg Cable.",
    genre: "Comedy,Action",

    poster:
      "https://hips.hearstapps.com/hmg-prod/images/deadpoolsmall-1525695071.jpg",
    year: 2018,
  },

  {
    name: "Once Upon a Time in Hollywood ",
    imdb: 7.6,
    desc: "A faded television actor and his stunt double strive to achieve fame and success in the final years of Hollywood's Golden Age in 1969 Los Angeles",
    genre: "Comedy, Drama",

    poster:
      "https://i.pinimg.com/564x/55/8f/b9/558fb9603dc9c161dd1d124c640d3ea1.jpg",
    year: 2019,
  },
  {
    name: "John Wick: Chapter 3 - Parabellum  ",
    imdb: 7.4,
    desc: "John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
    genre: "Action, Crime, Thriller",

    poster:
      "https://m.media-amazon.com/images/M/MV5BMDg2YzI0ODctYjliMy00NTU0LTkxODYtYTNkNjQwMzVmOTcxXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_FMjpg_UX1000_.jpg",
    year: 2019,
  },
  {
    name: "Ford v Ferrari ",
    imdb: 8.1,
    desc: "American car designer Carroll Shelby and driver Ken Miles battle corporate interference and the laws of physics to build a revolutionary race car for Ford in order to defeat Ferrari at the 24 Hours of Le Mans in 1966.",
    genre: "Action, Biography, Drama",

    poster:
      "https://m.media-amazon.com/images/M/MV5BM2UwMDVmMDItM2I2Yi00NGZmLTk4ZTUtY2JjNTQ3OGQ5ZjM2XkEyXkFqcGdeQXVyMTA1OTYzOTUx._V1_.jpg",
    year: 2019,
  },
  {
    name: "Doctor Sleep",
    imdb: 7.3,
    desc: "Years following the events of The Shining (1980), a now-adult Dan Torrance must protect a young girl with similar powers from a cult known as The True Knot, who prey on children with powers to remain immortal.",
    genre: "Drama, Fantasy, Horror",

    poster:
      "https://m.media-amazon.com/images/M/MV5BYmY3NGJlYTItYmQ4OS00ZTEwLWIzODItMjMzNWU2MDE0NjZhXkEyXkFqcGdeQXVyMzQzMDA3MTI@._V1_FMjpg_UX1000_.jpg",
    year: 2019,
  },
  {
    name: "Fast & Furious Presents: Hobbs & Shaw",
    imdb: 6.5,
    desc: "Lawman Luke Hobbs and outcast Deckard Shaw form an unlikely alliance when a cyber-genetically enhanced villain threatens the future of humanity.",
    genre: "Action, Adventure, Thriller",

    poster:
      "https://m.media-amazon.com/images/M/MV5BOTIzYmUyMmEtMWQzNC00YzExLTk3MzYtZTUzYjMyMmRiYzIwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    year: 2019,
  },
  {
    name: "Skyscraper",
    imdb: 5.8,
    desc: "A security expert must infiltrate a burning skyscraper, 225 stories above ground, when his family is trapped inside by criminals.",
    genre: "Action, Adventure, Thriller",

    poster:
      "https://m.media-amazon.com/images/M/MV5BOGM3MzQwYzItNDA1Ny00MzIyLTg5Y2QtYTAwMzNmMDU2ZDgxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_.jpg",
    year: 2018,
  },
  {
    name: "Hamilton",
    imdb: 8.3,
    desc: "The real life of one of America's foremost founding fathers and first Secretary of the Treasury, Alexander Hamilton. Captured live on Broadway from the Richard Rodgers Theater with the original Broadway cast.",
    genre: "Biography, Drama, History",

    poster: "https://m.media-amazon.com/images/I/71iZLrkVhDL.jpg",
    year: 2020,
  },
  {
    name: "Bad Boys for Life",
    imdb: 6.5,
    desc: "Miami detectives Mike Lowrey and Marcus Burnett must face off against a mother-and-son pair of drug lords who wreak vengeful havoc on their city.",
    genre: "Action, Comedy, Crime",

    poster:
      "https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2019/11/22/bad-boys-for-life-movie-latest-HD-Poster--scaled.jpg?fit=1727%2C2560&quality=80&zoom=1&ssl=1",
    year: 2020,
  },
  {
    name: "A Quiet Place Part II",
    imdb: 7.2,
    desc: "Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize the creatures that hunt by sound are not the only threats lurking beyond the sand path.",
    genre: "Drama, Horror, Sci-Fi",

    poster:
      "https://m.media-amazon.com/images/M/MV5BMTE2ODU4NDEtNmRjNS00OTk1LTg4NmMtNTAzYzVlNzJmYjgzXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    year: 2020,
  },
  {
    name: "Wonder Woman 1984",
    imdb: 5.4,
    desc: "Diana must contend with a work colleague, and with a businessman whose desire for extreme wealth sends the world down a path of destruction, after an ancient artifact that grants wishes goes missing.",
    genre: "Action, Adventure, Fantasy",

    poster:
      "https://hips.hearstapps.com/hmg-prod/images/wonder-woman-1984-poster-1606931235.jpg",
    year: 2020,
  },
  {
    name: "Tenet",
    imdb: 7.3,
    desc: "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
    genre: "Action, Sci-Fi, Thriller",

    poster:
      "https://m.media-amazon.com/images/I/71OHH9HaB5S._AC_UF1000,1000_QL80_.jpg",
    year: 2020,
  },
  {
    name: "Drive",
    imdb: 7.8,
    desc: "A mysterious Hollywood action film stuntman gets in trouble with gangsters when he tries to help his neighbor's husband rob a pawn shop while serving as his getaway driver",
    genre: "Action, Drama",

    poster: "https://m.media-amazon.com/images/I/91fcWt3BHJL.jpg",
    year: 2011,
  },
  {
    name: "Captain America: The First Avenger",
    imdb: 6.9,
    desc: "Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a Super-Soldier serum. But being Captain America comes at a price as he attempts to take down a warmonger and a terrorist organization.",
    genre: "Action, Adventure, Sci-Fi",

    poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_FMjpg_UX1000_.jpg",
    year: 2011,
  },
  {
    name: "Django Unchained",
    imdb: 8.4,
    desc: "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation owner in Mississippi.",
    genre: "Drama, Western",

    poster:
      "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg",
    year: 2012,
  },
  {
    name: " Skyfall",
    imdb: 7.8,
    desc: "James Bond's loyalty to M is tested when her past comes back to haunt her. When MI6 comes under attack, 007 must track down and destroy the threat, no matter how personal the cost.",
    genre: "Action, Adventure, Thriller",

    poster:
      "https://rukminim1.flixcart.com/image/850/1000/juk4gi80/poster/g/e/u/large-newposter9676-movies-james-bond-daniel-craig-skyfall-original-imafe9xjtyyrz9hr.jpeg?q=20",
    year: 2012,
  },
  {
    name: "Prisoners",
    imdb: 8.1,
    desc: "When Keller Dover's daughter and her friend go missing, he takes matters into his own hands as the police pursue multiple leads and the pressure mounts.",
    genre: "Crime, Drama, Mystery",

    poster:
      "https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_FMjpg_UX1000_.jpg",
    year: 2013,
  },
  {
    name: "The Conjuring",
    imdb: 7.5,
    desc: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse",
    genre: "Crime, Drama, Mystery",

    poster: "https://m.media-amazon.com/images/I/81dzWlccrGS.jpg",
    year: 2013,
  },
  {
    name: "Nightcrawler",
    imdb: 7.8,
    desc: "When Louis Bloom, a con man desperate for work, muscles into the world of L.A. crime journalism, he blurs the line between observer and participant to become the star of his own story.",
    genre: "Crime, Drama, Thriller",

    poster: "https://m.media-amazon.com/images/I/61n0tcEYikL.jpg",
    year: 2014,
  },
  {
    name: "Gone Girl",
    imdb: 8.1,
    desc: "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent.",
    genre: "Crime, Drama, Thriller",

    poster:
      "https://w0.peakpx.com/wallpaper/940/838/HD-wallpaper-gone-girl-2014-movie-poster.jpg",
    year: 2014,
  },
  {
    name: "Gone Girl",
    imdb: 8.1,
    desc: "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent.",
    genre: "Crime, Drama, Thriller",

    poster:
      "https://w0.peakpx.com/wallpaper/940/838/HD-wallpaper-gone-girl-2014-movie-poster.jpg",
    year: 2014,
  },
  {
    name: "Arrival ",
    imdb: 7.9,
    desc: "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world..",
    genre: "Drama, Mystery, Sci-Fi",

    poster:
      "https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_.jpg",
    year: 2016,
  },
  {
    name: "The Magnificent Seven ",
    imdb: 6.9,
    desc: "Seven gunmen from a variety of backgrounds are brought together by a vengeful young widow to protect her town from the private army of a destructive industrialist.",
    genre: "Action, Adventure, Drama",

    poster:
      "https://m.media-amazon.com/images/M/MV5BMTUzNTc0NTAyM15BMl5BanBnXkFtZTgwMTk1ODA5OTE@._V1_.jpg",
    year: 2016,
  },
  {
    name: "Shutter Island  ",
    imdb: 8.2,
    desc: "Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.",
    genre: "Mystery, Thriller",

    poster: "https://m.media-amazon.com/images/I/71nShdGAJGS.jpg",
    year: 2010,
  },
  {
    name: "127 Hours ",
    imdb: 7.5,
    desc: "A mountain climber becomes trapped under a boulder while canyoneering alone near Moab, Utah and resorts to desperate measures in order to survive.",
    genre: "Biography, Drama",

    poster:
      "https://lumiere-a.akamaihd.net/v1/images/image_5fee014c.jpeg?region=0%2C0%2C800%2C1200",
    year: 2010,
  },
  {
    name: " The Blind Side",
    imdb: 7.6,
    desc: "The story of Michael Oher, a homeless and traumatized boy who became an All-American football player and first-round NFL draft pick with the help of a caring woman and her family.",
    genre: "Biography, Drama, Sport",

    poster: "https://wallpapercave.com/wp/wp9042856.jpg",
    year: 2009,
  },
  {
    name: "Taken",
    imdb: 7.8,
    desc: "A retired CIA agent travels across Europe and relies on his old skills to save his estranged daughter, who has been kidnapped while on a trip to Paris.",
    genre: "Action, Crime, Thriller",

    poster:
      "https://lumiere-a.akamaihd.net/v1/images/image_efeee89d.jpeg?region=0%2C0%2C800%2C1200",
    year: 2008,
  },
  {
    name: "Pride & Prejudice",
    imdb: 7.8,
    desc: "Sparks fly when spirited Elizabeth Bennet meets single, rich, and proud Mr. Darcy. But Mr. Darcy reluctantly finds himself falling in love with a woman beneath his class. Can each overcome their own pride and prejudice?.",
    genre: "Drama, Romance",

    poster:
      "https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_.jpg",
    year: 2005,
  },
  {
    name: "Sin City",
    imdb: 8.0,
    desc: "An exploration of the dark and miserable Basin City and three of its residents, all of whom are caught up in violent corruption.",
    genre: "Crime, Thriller",

    poster: "https://img.fruugo.com/product/8/85/14311858_max.jpg",
    year: 2005,
  },
  {
    name: "The Notebook",
    imdb: 7.8,
    desc: "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom. However, social differences soon get in the way.",
    genre: "Drama, Romance",

    poster:
      "https://m.media-amazon.com/images/M/MV5BMTk3OTM5Njg5M15BMl5BanBnXkFtZTYwMzA0ODI3._V1_FMjpg_UX1000_.jpg",
    year: 2004,
  },
  {
    name: "The Incredibles",
    imdb: 8,
    desc: "While trying to lead a quiet suburban life, a family of undercover superheroes are forced into action to save the world..",
    genre: "Animation, Action, Adventure",

    poster:
      "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_.jpg",
    year: 2004,
  },
  {
    name: "Spider-Man: Across the Spider-Verse",
    imdb: 8.9,
    desc: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.",
    genre: "Animation, Action, Adventure",

    poster:
      "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg",
    year: 2023,
  },
  {
    name: " Puss in Boots: The Last Wish",
    imdb: 7.9,
    desc: "When Puss in Boots discovers that his passion for adventure has taken its toll and he has burned through eight of his nine lives, he launches an epic journey to restore them by finding the mythical Last Wish.",
    genre: "Animation, Action",

    poster:
      "https://www.themoviedb.org/t/p/original/wm1SYOZp8GZBm6XWNB38oWSjwML.jpg",
    year: 2022,
  },
  {
    name: "Cars",
    imdb: 7.2,
    desc: "On the way to the biggest race of his life, a hotshot rookie race car gets stranded in a rundown town and learns that winning isn't everything in life",
    genre: "Animation",

    poster: "https://m.media-amazon.com/images/I/91nG1qkExWL.jpg",
    year: 2006,
  },
  {
    name: "Sing 2",
    imdb: 7.4,
    desc: "Buster Moon and his friends must persuade reclusive rock star Clay Calloway to join them for the opening of a new show.",
    genre: "Animation",

    poster:
      "https://m.media-amazon.com/images/M/MV5BMWRiZGQ1NDMtODQ2OS00MDlhLWJkZGYtM2ZmNjlhZThjOWRmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    year: 2021,
  },
  {
    name: " Moana",
    imdb: 7.6,
    desc: "In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the Ocean's call to seek out the Demigod to set things right.",
    genre: "Animation, Comedy",

    poster:
      "https://m.media-amazon.com/images/I/A1JOaV3B6fL._AC_UF1000,1000_QL80_.jpg",
    year: 2016,
  },
  {
    name: "The Lion King",
    imdb: 6.8,
    desc: "After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
    genre: "Animation, Comedy",

    poster:
      "https://e1.pxfuel.com/desktop-wallpaper/188/683/desktop-wallpaper-the-lion-king-2019-poster-thumbnail.jpg",
    year: 2019,
  },
  {
    name: "Creed III",
    imdb: 6.8,
    desc: "Adonis has been thriving in both his career and family life, but when a childhood friend and former boxing prodigy resurfaces, the face-off is more than just a fight.",
    genre: "Drama, Sport",

    poster:
      "https://media1.popsugar-assets.com/files/thumbor/XufvaV0nMxzCrAi6jq5iZtl-WqQ/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2023/02/01/768/n/1922283/6d70f74b63daa0f3c4f7a1.17686700_/i/creed-3.jpg",
    year: 2023,
  },
  {
    name: "Creed II",
    imdb: 7.1,
    desc: "Under the tutelage of Rocky Balboa, newly crowned heavyweight champion Adonis Creed faces off against Viktor Drago, the son of Ivan Drago..",
    genre: "Drama, Sport",

    poster:
      "https://m.media-amazon.com/images/I/81cktCM-UUL._AC_UF1000,1000_QL80_.jpg",
    year: 2018,
  },
];

module.exports = moviesData;
