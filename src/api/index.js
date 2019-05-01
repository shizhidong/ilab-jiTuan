import * as api from './api';

export default api;

import request from '@/utils/request'

export const getPersonInfo = data => {
    return request({
        url: '/login',
        method: 'post',
        data
    })
};