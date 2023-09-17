import axios from 'axios'

const REACT_API_BASE_URL = 'http://localhost:8000'

const axiosClient = axios.create({

    baseURL: `${REACT_API_BASE_URL}/api`,

})

axiosClient.interceptors.request.use((config) => {
    // const token = config.token.split('|')[1];
    const token = localStorage.getItem('ACCESS_TOKEN');
    config.headers.Authorization = `Bearer ${token}`
    return config;
})

axiosClient.interceptors.response.use((response) => {
    return response
}, (error) => {
    const { response } = error;
    if (response.status === 401) {
        localStorage.removeItem('ACCESS_TOKEN')
        // window.location.reload();
    } else if (response.status === 404) {
        //Show not found
    }

    throw error;
})

export default axiosClient