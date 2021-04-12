import { axiosClient } from './axiosClient';
const ProductApi = {
    getAll(){
        const url = `/products`;
        return axiosClient.get(url);
    },
    getimage(id){
        const url = `/product/image/${id}`;
        return axiosClient.get(url);
    },
    param(id){
        const url = `/${id}`;
        return axiosClient.param(url);
    },
    get(id){
        const url = `/product/${id}`;
        return axiosClient.get(url);
    },
    getlist(){
        const url = `/products?sortBy=sold&order=asc&limit=20`;
        return axiosClient.get(url);
    },
    getlist2(){
        const url = `/products?sortBy=sold&order=asc&limit=20`;
        return axiosClient.get(url);
    },
    getRelated(){
        const url = `/product/related/${id}`;
        return axiosClient.get(url);
    },
    getSort(){
        const url =`/products?_sort=price&_order=asc`;
        return axiosClient.get(url);
    },
    getSort2(){
        const url =`/products?_sort=price&_order=desc`;
        return axiosClient.get(url);
    },
    
    getsearch(search){
        const url=`/posts?q=${search}`;
        return axiosClient.get(url);
    },
    remove(id){
        const url = `/product/${id}`;
        return axiosClient.delete(url);
    },
    add(product){
        const url = `/products`;
        return axiosClient.post(url, product);
    },
    edit(id,product){
        const url = `/product/${id}`;
        return axiosClient.put(url,product);
    }

}
export default ProductApi;