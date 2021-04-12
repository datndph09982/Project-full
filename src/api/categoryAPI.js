import { axiosClient } from './axiosClient';
const CategoryApi = {
    getAll(){
        const url = `/categories`;
        return axiosClient.get(url);
    },
    get(id){
        const url = `/category/${id}`;
        return axiosClient.get(url);
    },
    // getimage(id){
    //     const url = `/category/image/${id}`
    //     return axiosClient.get(url);
    // },
    remove(id){
        const url = `/category/${id}`;
        return axiosClient.delete(url);
    },
    add(category){
        const url = `/category`;
        return axiosClient.post(url, category);
    },
    edit(id,category){
        const url = `/category/${id}`;
        return axiosClient.put(url,category);
    }
    
}
export default CategoryApi;