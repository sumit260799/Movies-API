const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
require("dotenv").config(); // For JavaScript

require("./connection");
const Movie = require("./user.model");
const moviesData = require("./Data");

const createError = require("http-errors");
app.use(cors());

// api get................
app.get("/", async (req, res) => {
  const search = req.query.search || "";
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 9;
  const searchRegExp = new RegExp(".*" + search + ".*", "i");
  let filter;
  if (!isNaN(parseInt(search))) {
    // If search can be parsed as a number, search by year
    filter = {
      year: parseInt(search),
    };
  } else {
    // Otherwise, search by genre or name
    filter = {
      $or: [
        { genre: { $regex: searchRegExp } },
        { name: { $regex: searchRegExp } },
      ],
    };
  }

  const year = req.query.year || "";

  if (year) {
    const yearFilter = {
      year: parseInt(year),
    };
    filter = { ...filter, ...yearFilter };
  }

  try {
    const existingDummyMovies = await Movie.find({
      name: { $in: moviesData.map((movie) => movie.name) },
    });
    if (existingDummyMovies.length === 0) {
      await Movie.insertMany(moviesData);
    }
    const movies = await Movie.find(filter)
      .sort({ year: -1 })
      .limit(limit)
      .skip((page - 1) * limit);
    const count = await Movie.find(filter).countDocuments();
    const countUser = await Movie.countDocuments();
    res.status(200).send({
      message: "movies were returned",
      movies: movies,

      totalPages: Math.ceil(count / limit),
      currentPage: page,
      previousPage: page - 1 > 0 ? page - 1 : null,
      nextPage: page + 1 <= Math.ceil(count / limit) ? page + 1 : null,
      totalDB_Movies: countUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

app.use((req, res, next) => {
  next(createError(404, "routes not found"));
});
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
