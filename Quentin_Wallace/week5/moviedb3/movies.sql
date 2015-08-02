CREATE DATABASE movies;

\c movies

CREATE TABLE movies (
  id SERIAL4 PRIMARY KEY,
  title VARCHAR(40) NOT NULL,
  year INTEGER,
  rating VARCHAR(10),
  released VARCHAR(20),
  runtime VARCHAR(20),
  genre VARCHAR(200),
  director VARCHAR(100),
  actors VARCHAR(300),
  plot VARCHAR(500),
  poster_url VARCHAR(300),
  imdbid VARCHAR(20)
);

INSERT INTO movies (title,year,rating,released,runtime,genre,director,actors,plot,poster_url,imdbid)
VALUES ('Frozen','2013','PG','27 Nov 2013','102 min','Animation, Adventure, Comedy','Chris Buck, Jennifer Lee','Kristen Bell, Idina Menzel, Jonathan Groff, Josh Gad','When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister, Anna, teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.','http://ia.media-imdb.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg','tt2294629');


-- Title: "Frozen",
-- Year: "2013",
-- Rated: "PG",
-- Released: "27 Nov 2013",
-- Runtime: "102 min",
-- Genre: "Animation, Adventure, Comedy",
-- Director: "Chris Buck, Jennifer Lee",
-- Writer: "Jennifer Lee (screenplay), Hans Christian Andersen (inspired by the story "The Snow Queen" by), Chris Buck (story), Jennifer Lee (story), Shane Morris (story), Dean Wellins (additional story)",
-- Actors: "Kristen Bell, Idina Menzel, Jonathan Groff, Josh Gad",
-- Plot: "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister, Anna, teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.",
-- Language: "English, Icelandic",
-- Country: "USA",
-- Awards: "Won 2 Oscars. Another 76 wins & 53 nominations.",
-- Poster: "http://ia.media-imdb.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg",
-- Metascore: "74",
-- imdbRating: "7.7",
-- imdbVotes: "352373",
-- imdbID: "tt2294629",
-- Type: "movie",
-- Response: "True"