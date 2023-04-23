import * as ratingsDao from './RatingsDao';

const RatingsController = (app) => {

    const addRating = async (req, res) => {
        const rating = await ratingsDao.createRating(res.body);
        console.log("RATTT");
        console.log(rating);
        res.json(rating)
    };

    const getAllRatings = async (req, res) => {
        const allUsers = await ratingsDao.getAllFilms();
        res.json(allUsers);
    };

    const getByReviewerId = async (req, res) => {
        const reviewerId = req.params.reviewerId;
        const ratings = await ratingsDao.findByReviewerId(reviewerId);
        res.json(ratings);
    }

    const getByFilmId = async (req, res) => {
        const filmId = req.params.filmId;
        const ratings = await ratingsDao.findByFilmId(filmId);
        res.json(ratings);
    }

    app.post("/api/ratings/addReview", addRating);
    app.get("/api/ratings/user/:reviewerId", getByReviewerId);
    app.get("/api/ratings/film/:filmId", getByFilmId);
    app.get("/api/ratings/getAllRatings", getAllRatings);
};

export default RatingsController;