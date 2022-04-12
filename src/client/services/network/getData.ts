/**
 * Отравляет запрос
 * @param {String} url - url для запроса
 * @return {Promise} - Promise с результатом запроса.
 **/
import axios from 'axios';

export const getData = async (url: string) => {
    try {
        const { data } = await axios(url);

        if (data.status !== 200) {
            console.log('Could not fetch', data.status);
        }

        return { data };
    } catch (error: any) {
        console.error('Could not fetch', error.message);
        return false;
    }
};

export const makeConcurrentRequest = async (url: string[]) => {
    return await Promise.all(
        url.map((data) => {
            return fetch(data).then((result) => result.json());
        }),
    );
};
