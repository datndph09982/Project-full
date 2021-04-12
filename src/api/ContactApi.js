import { axiosClient } from './axiosClient';
const ContactApi = {
    getAll(){
        const url = `/contact`;
        return axiosClient.get(url);
    },
    get(id){
        const url = `/contact/${id}`;
        return axiosClient.get(url);
    },
    remove(id){
        const url = `/contact/${id}`;
        return axiosClient.delete(url);
    },
    add(contact){
        const url = `/contact`;
        return axiosClient.post(url, contact);
    },
    edit(id,contact){
        const url = `/contact/${id}`;
        return axiosClient.put(url,contact);
    }
    
}
export default ContactApi;