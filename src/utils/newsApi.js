import * as axiosUtils from './axiosUtils';

const API_KEY = 'd96c409bcf2c43e89a1c423320fb8575';

/**
 *  Get notices by keyword and page
 * 
 * @param {string} keyWord - Keywords or phrases to search for in the article title and body.
 * @param {number} page - Use this to page through the results.
 * @returns 
 */
export function getNotices(keyWord, page) {
    const client = axiosUtils.getAxiosClient();
    const pageSize = 10;

    return client.get(`/v2/everything?q=${keyWord}&apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}&language=es`);
}