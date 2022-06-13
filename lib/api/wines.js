import sendRequest from './sendRequest';

const BASE_PATH = '/api';

export const getWines = data =>
    sendRequest(`${BASE_PATH}/wines`, {
        method: 'GET',
    });
    

