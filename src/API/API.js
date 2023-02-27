import axios from 'axios';

export const getRevenue = async () => {
    /* const result = await axios.get('https://dummyjson.com/carts');*/
    return fetch('https://dummyjson.com/carts').then((res) => res.json());
};
