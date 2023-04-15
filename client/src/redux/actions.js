import axios from 'axios';
export const POST_PRODUCT = 'POST_PRODUCT';
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const GET_All_TYPES = 'GET_ALL_TYPES';
export const GET_ALL_BRANDS = 'GET_ALL_BRANDS';

export const createProduct = body => async dipatch => {
    const { data } = await axios.post('http://localhost:3001/Product',body)
    return dipatch({
        type: 'POST_PRODUCT',
        payload: data
    })
};

export function listProducts(page) {
    return async function (dispatch) {
        const json = await axios.get(`http://localhost:3001/product?page=${page}&size=5`);
        return dispatch({
        type: "GET_ALL_PRODUCTS",
        payload: json.data.products,
        });
    };
};

export const listTypes = () => async dispatch => {
    const {data} = await axios('http://localhost:3001/type');
    return dispatch({
        type: 'GET_All_TYPES',
        payload: data
    })
};
export const listBrands = () => async dispatch => {
    const {data} = await axios('http://localhost:3001/brand');
    return dispatch({
        type: 'GET_ALL_BRANDS',
        payload: data
    })
};