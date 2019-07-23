import axios from "axios";

// Oy, this is a lot.  Dunno if we can split into one file per collection?
// I think it might be accessed like 'API.users.getUsers()' if we did
export default {
    // Users
    // Get all users
    getUsers: function () {
        return axios.get("/api/users");
    },
    // Create a user
    createUser: function (userData) {
        return axios.post("/api/users", userData);
    },
    // Get user by id
    getUserDetail: function (id) {
        return axios.get("/api/users/" + id);
    },
    // Update user by id
    updateUser: function (id, userData) {
        return axios.put("/api/users/" + id, userData);
    },
    // Deletes user by id
    deleteUser: function (id) {
        return axios.delete("/api/users/" + id);
    },
    // Beers
    // Get all beers
    getBeers: function () {
        return axios.get("/api/beers");
    },
    // Create a beer
    createBeer: function (beerData) {
        return axios.post("/api/beers", beerData);
    },
    // Get beer by id
    getBeerDetail: function (id) {
        return axios.get("/api/beers/" + id);
    },
    // Update beer by id
    updateBeer: function (id, beerData) {
        return axios.put("/api/beers/" + id, beerData);
    },
    // Deletes beer by id
    deleteBeer: function (id) {
        return axios.delete("/api/beers/" + id);
    },
    // Comments
    // Get all comments
    getComments: function () {
        return axios.get("/api/comments");
    },
    // Create a comment
    createComment: function (commentData) {
        return axios.post("/api/comments", commentData);
    },
    // Get comment by id
    getCommentDetail: function (id) {
        return axios.get("/api/comments/" + id);
    },
    // Update comment by id
    updateComment: function (id, commentData) {
        return axios.put("/api/comments/" + id, commentData);
    },
    // Deletes comment by id
    deleteComment: function (id) {
        return axios.delete("/api/comments/" + id);
    },

    // Search external beer API
    // Using the Open Beer Database for now.  Not confident we'll find a more up-to-date provider; anything new seems to be paywalled.
    searchBeerAPI: function(query) {
        return axios.get(
            `https://data.opendatasoft.com/api/records/1.0/search/?dataset=open-beer-database%40public-us&q=${query}`
        );
    }
};
