
import axiosClient from '../../axios';

const categoryApi = {

    getAll: () => { // get all category
        return axiosClient.get('/category')
            .then(({ data }) => {
                console.log("data get all", data); //
                return data.category;
            })
            .catch((error) => {
                throw error;
            });
    },

    getCategory: (categoryId) => { //get one category

        return axiosClient.get(`category/${categoryId}`)
            .then(({ data }) => {
                console.log('data', data)
                return data;
            })
            .catch((error) => {
                throw error;
            });

    },

    editCategory: (categoryId, categoryData) => {
        const url = `/category/${categoryId}/edit`;
        return axiosClient.update(url, categoryData);
    },


    addCategory: (categoryData) => {
        const url = '/addcategory';
        return axiosClient.post(url, categoryData, {
            headers: {
                'Content-Type': 'multipart/form-data', // Set correct content type for FormData
                'Accept': 'application/json',
            }
        })
    },


    deleteCategory: (categoryId) => {
        const url = `/category/${categoryId}`;
        return axiosClient.delete(url);
    },
};

export default categoryApi;
