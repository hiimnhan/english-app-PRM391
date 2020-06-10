import axios from 'axios';

import * as settings from '../settings';

const { baseUrl } = settings;

const defOpts = {'Content-Type': 'application/json; charset=utf-8'}

export const STORAGE_KEYS = {
    ACCESS_TOKEN = 'dfdfdsfsdfsfsfs'
}

export const setStorage = ({key, val}) => {
    window.localStorage.setItem(key, val);
}

export const getStorage = key => window.localStorage.getItem(key) || ''

export const removeStorage = key => window.localStorage.removeItem(key)

export const setHeader = isAuth => {
    const token = getStorage(STORAGE_KEYS.ACCESS_TOKEN);
    const tmpOpts = isAuth ? { Authorization: `Bearer ${token}`} : {}

    return {...defOpts, ...tmpOpts};
}

