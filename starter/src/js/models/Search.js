import axios from 'axios';
import {proxy} from '../config'

export default class Search {
    constructor(query) {
        this.query = query;
    }
    async getResults() {
        // const key = 0;
        // axios(`https://forkify-api.herokuapp.com/api/search?key=${key}&q=${query}`);
        try {
            const res = await axios(`https://forkify-api.herokuapp.com/api/search?q=${this.query}`);
            this.result = res.data.recipes;
            // console.log(this.result);
        } catch (error) {
            alert(error);
        }   
    }   
}