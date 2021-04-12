import CategoryApi from '../api/categoryAPI.js';
import { reRender,$ } from '../utils.js';
const ListProducts = {
    async render(){
        const {data:categories} = await CategoryApi.getAll();
        return `
        <a href="/#/addcategory/"><button class="border-4 boder-gray-700 text-current hover:border-gray-900 font-medium py-2 px-4 rounded mt-2">Add new</button>
        </a>
        <table class="table-fixed">
            <thead>
                <tr>
                <th class=" px-4 py-2">Stt</th>
                <th class="w-1/2  px-4 py-2">image</th>
                <th class=" px-4 py-2">name</th>
                
                <th class="w-1/3 px-4 py-2">Action</th>
                </tr>
            </thead>
            <tbody>
            ${categories.map((cate, index) => {
                return `
                <tr class="text-center">
                    <td class="border px-8 py-2 ">${index}</td>
                    <td class="border px-4 py-2 text-center w-48"><img src="${cate.image}" class="w-28  "></td>
                    <td class="border px-2 py-2 w-auto">${cate.name}</td>
                    <td class="border px-2 py-2">
                        <a href="/#/editcate/${cate._id}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update</a>
                        <button data-id="${cate._id}" class="btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2">Remove</button>
                    </td>
                </tr>
                `
            }).join("")}
                
                
            </tbody>
        </table>
        `
    },
    async afterRender() {
        const btns = $('#list-products .btn');
        btns.forEach( btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click',async function(){
                const question = confirm ('Bạn có chắc chắn muốn xóa ?');
                if(question){
                    await CategoryApi.remove(id);
                    await reRender(ListProducts,'#list-products')
                }
            } )
        })
    }
}
export default ListProducts;