/**
 * Ali_Mongi-CAPSTONE_SEARCH_API-L2T21
 * @search.js - route for search API
 */
const express = require("express");
const router = express.Router();
const config = require("config");
const fetch = require("node-fetch");
const search = config.get("iTunes.api.lookupParameters");

//* GET search parameters
router.get(search, function (req, res, next) {
  let category = req.params.fetchCategory;
  let term = req.params.searchTerm;

  let iTunesUrl = itunesLoadUrl(term, category);
  fetchData(iTunesUrl, res);
});

//* generates appropriate url
const itunesLoadUrl = (term, category) => {
  let loadUrl = "";
  if (category === "all") {
    loadUrl = `https://itunes.apple.com/search?term=${term}`;
  } else {
    loadUrl = `https://itunes.apple.com/search?term=${term}&entity=${category}&limit=32`;
  }
  return loadUrl;
};

//* GET fetch data media from iTunes store
const fetchData = async (url, res) => {
  try {
    const response = await fetch(url);
    const json = await response.json();

    if (json.resultCount > 0) {
      let media = json;
      let message = "successful";
      res.json({ media, message });
    } else {
      let message = "failure";
      res.json({ message });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = router;
module.exports.itunesLoadUrl = itunesLoadUrl;
