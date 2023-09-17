import axiosClient from "../../axios"


const productApi = {

    getAll: () => {
        return axiosClient.get('/products')
            .then(({ data }) => {
                console.log(data);
                return data.products;
            })
            .catch((error) => {
                throw error;
            });
    },

    getProductByCategory: (categoryId) => {
        return axiosClient.get(`/category/${categoryId}/products`)
            .then(({ data }) => {
                // console.log("get products", data.status);
                return data;
            })
            .catch((error) => {
                throw error;
            });
    },

    getProductInfo: async (productId) => {
        try {
            const { data } = await axiosClient.get(`/product/${productId}`);
            return data.product;
        } catch (error) {
            throw error;
        }
    },

    editProduct: (productId, productData) => {
        return axiosClient.post((`/product/${productId}/edit`), productData, {
            headers: {
                'Content-Type': 'multipart/form-data', // Set correct content type for FormData
                'Accept': 'application/json',
            }
        });
    },
    addProduct: (productData) => {
        const url = '/addproduct';
        return axiosClient.post(url, productData, {
            headers: {
                'Content-Type': 'multipart/form-data', // Set correct content type for FormData
                'Accept': 'application/json',
            }
        })
    },

}


export default productApi;