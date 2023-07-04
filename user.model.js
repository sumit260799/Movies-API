const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  imdb: {
    type: Number,
    trim: true,
  },
  desc: {
    type: String,
    trim: true,
  },
  genre: {
    type: String,
    trim: true,
  },
  poster: {
    type: String,
    trim: true,
  },
  year: {
    type: Number,
    trim: true,
  },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
