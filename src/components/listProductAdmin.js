import CategoryApi from '../api/categoryAPI.js';
import ProductApi from '../api/ProductApi.js';
import { reRender,$,parseRequestUrl } from '../utils.js';
const ListProducts = {
    async render(){
        const {data:products} = await ProductApi.getAll();
        const {data:categories} = await CategoryApi.getAll();
        // const result = categories.filter(category=>category.id=products.categoryId);
        // console.log(result);
        return `
        <a href="/#/addproduct/"><button class="border-4 boder-gray-700 text-current hover:border-gray-900 font-medium py-2 px-4 rounded mt-2">Add new</button>
        </a>
        <table class="table-fixed">
            <thead>
                <tr>
                <th class=" px-4 py-2">stt</th>
                
                <th class="w-1/3 px-4 py-2">name</th>
                <th class="w-1/4 px-4 py-2">image</th>
                <th class="w-1/4 px-4 py-2">price</th>
                <th class="w-1/2 px-4 py-2">quantity</th>
                <th class="w-1/2 px-4 py-2">Action</th>
                </tr>
            </thead>
            <tbody>
            ${products.map((product, index) => {
                // console.log(product.image.contentType);
                return `
                <tr class="text-center">
                    <td class="border px-4 py-2">${index}</td>
                    
                    <td class="border px-4 py-2">${product.name}</td>
                    <td class="border px-4 py-2"><img src="${product.image}" class="w-28"></td>
                    <td class="border px-4 py-2">${product.price}</td>
                    <td class="border px-4 py-2">${product.quantity}</td>
                    
                    <td class="border px-4 py-2">
                        <a href="/#/editproduct/${product._id}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update</a>
                        <button data-id="${product._id}" class="btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2">Remove</button>
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
                    await ProductApi.remove(id);
                    await reRender(ListProducts,'#list-products')
                }
            } )
        })
    }
}
export default ListProducts;