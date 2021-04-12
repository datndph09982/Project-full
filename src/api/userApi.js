import { axiosClient } from './axiosClient.js';

const UserApi = {
	getAll(){
		const url = `/users`;
		return axiosClient.get(url); // tạo ra 1 đường linh đến db để lấy dữ liệu
	},
	get(id){
		const url = `/users/${id}`;
		return axiosClient.get(url);
	},
	add(category){
		const url = `/users`;
		return axiosClient.post(url, category);
	},
	remove(id){
		const url = `/users/${id}`;
		return axiosClient.delete(url);
	},
	update(id, data){
		const url = `/users/${id}`;
		return axiosClient.put(url, data);
	}

}
export default UserApi;