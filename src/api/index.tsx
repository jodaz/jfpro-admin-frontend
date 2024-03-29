import defaultAxios from 'axios';
import vars from '../utils/vars';

const jsonInstance = defaultAxios.create({
    baseURL: vars.source,
    withCredentials: false
});

const blobInstance = defaultAxios.create({
    baseURL: vars.source,
    withCredentials: false,
    responseType: 'blob'
});

// Request interceptor
const interceptorsFunc = (config: any) => {
    const token = localStorage.getItem(vars.authToken);

    const newConfig = config;

    // When a 'token' is available set as token.
    if (token) {
        newConfig.headers['Authorization'] = `Bearer ${token}`;
    }

    return newConfig;
};

jsonInstance.interceptors.request.use(interceptorsFunc, (err) => Promise.reject(err));
blobInstance.interceptors.request.use(interceptorsFunc, (err) => Promise.reject(err));

export {
    jsonInstance as apiProvider,
    blobInstance as fileProvider
}
