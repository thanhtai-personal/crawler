const _ = require('lodash');

// Import helper functions
const {
	composeAsync,
	fetchHtmlFromUrl,
} = require('../helpers');

// truyencv (Base URL)
const TRUYENCV_BASE = 'https://truyencv.com/';
const truyencvPattern = /https:\/\/truyencv.com/;

const fetchNovalData = $ => {
  
	return Promise.all([
		
	]).then((data) => {

  });

};

const fetchNovalsNameByCategory = $ => {
  
	return Promise.all([
		
	]).then((data) => {

  });

};

const fetchCategories = $ => {
  
	return Promise.all([
		
	]).then((data) => {

  });

};

/**
 * Fetches the noval data of the given noval name
 */
const getNovalFromTruyenCV = (novalName) => {
	const DATA_URL = `${TRUYENCV_BASE}/${novalName.toLowerCase()}`;
	return composeAsync(fetchNovalData, fetchHtmlFromUrl)(DATA_URL);
};

/**
 * Fetches the noval name
 */
const getNovalNamesByCategory = (category) => {
  const DATA_URL = `${TRUYENCV_BASE}/${category}`;
	return composeAsync(fetchNovalsNameByCategory, fetchHtmlFromUrl)(DATA_URL);
}

const getCategories = () => {
  const DATA_URL = `${TRUYENCV_BASE}`;
	return composeAsync(fetchCategories, fetchHtmlFromUrl)(DATA_URL);
}

module.exports = {  
  getNovalFromTruyenCV,
  getNovalNamesByCategory,
  getCategories
};
