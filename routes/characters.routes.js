/* const router = require("express").Router();

// Require and instantiate the API Service
const APIHandler = require('../api/');
const APIHandler = new APIHandler();

// List all the characters from the API.
router.get('/characters/list', (req, res) => {
  APIHandler
      .getFullList()
      .then((response) => {
        res.json(response.data);
        // res.render('pages/characters-list', { characters: response.data }) // <== leave this line commented for now
      })
      .catch(error => console.log(error));
  });


module.exports = router; */

