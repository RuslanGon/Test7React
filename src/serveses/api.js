import axios from "axios";

const instance = axios.create({
    baseURL: 'https://dummyjson.com'
})


export const reguestProducts = async () => {
    const { data } = await instance.get("/products");
    return data
}


export const reguestProductsByQuery = async (query = '') => {
    const { data } = await instance.get(`/products/search?q=${query}`);
    return data
}

export const reguestProductDetailsById = async (productId) => {
    const { data } = await instance.get(`/products/${productId}`);
    return data
}