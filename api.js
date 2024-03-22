// The file to interact with the deck of cards api
import axios from 'axios';
import 'dotenv/config';

// base is the most common part of the api url before the it is made dynamic
const base = 'https://www.themealdb.com/api/json/v1/1';

// www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
export async function searchByName(meal) {
    try {
        const apiURL = `${base}/search.php?s=${meal}`;
        const response = await axios.get(apiURL);

        return response.data;
    } catch (error) {
        console.error(error);
    }
}

// www.themealdb.com/api/json/v1/1/lookup.php?i=52772
export async function searchById(mealId) {
    try {
        const apiURL = `${base}/lookup.php?i=${mealId}`;
        const response = await axios.get(apiURL);

        return response.data;
    } catch (error) {
        console.error(error);
    }
}
// www.themealdb.com/api/json/v1/1/search.php?f=a
export async function searchByFirstLetter(mealId) {
    try {
        const apiURL = `${base}/lookup.php?a=${mealId}`;
        const response = await axios.get(apiURL);

        return response.data;
    } catch (error) {
        console.error(error);
    }
}
