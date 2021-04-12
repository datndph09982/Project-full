import sideBar from '../components/sidebaradmin.js';
import { $ } from '../utils.js';
import ProductApi from '../api/ProductApi.js';
import firebase from '../firebase';
import CategoryApi from '../api/categoryAPI.js';


const addProduct = {
    async render() {
        const { data: categories } = await CategoryApi.getAll();
        const { data: products } = await ProductApi.getAll();
        const newid = products.length + 1;
        return /*html*/`
        <div class="grid grid-cols-12 gap-4 ">
        <div class="col-span-3 bg-gray-200 px-16 py-3">
            ${sideBar.render()}
        </div>
          
        <div class="col-span-9">
            <main role="main" class="p-3">
            <div class="table-responsive" id="list_products" >
            <form class="w-full max-w-3xl ml-12 mt-8" id="form-add">
                <label class="block uppercase tracking-wide text-gray-700 text-3xl font-bold mb-8" for="grid-first-name">
                Add new product
                </label>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        Name
                        </label>
                    <input id="name_product"class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Name product">
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        price           
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="price_product" type="number" placeholder="100">
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Link image
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="image_product" type="file" >
                        <p class="text-gray-600 text-xs italic">Add link product's image</p>
                    </div>
                </div>
            <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                        quantity
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="quantity_product" type="number" placeholder="Number">
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                    category-ID
                </label>
                <div class="relative">
                    <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="cate_id">
                    ${categories.map(category => {
                        return `<option value="${category._id}">${category.name}</option>`
                    }).join("")}
                    
                    
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                    Status
                </label>
                <div class="relative">
                    <input type="text" disabled class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="id_product" value="True">
                    
                    
                </div>
                </div>
            </div>
            <div class="md:flex md:items-center">
                <div class="md:w-1/3"></div>
                    <button class="shadow bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-4" type="submit">
                        Add new
                    </button>
                </div>
            </form>
            </div>
            </main>
        </div>

    </div>
        `
    },
    afterRender() {
        $('#form-add').addEventListener('submit', e => {
            e.preventDefault();
            // const product = {
            //     name: $('#name_product').value,
            //     price: $('#price_product').value,
            //     image: '',
            //     quantity: $('#quantity_product').value,
            //     categoryId: $('#cate_id').value,
            //     status: true
            // }

            // console.log(product);
            // ProductApi.add(product);
            // alert("Đã thêm thành công!!!");
            // window.location.hash = '/products';

            const productImage = $('#image_product').files[0];
            let storageRef = firebase.storage().ref(`images/${productImage.name}`);
            console.log(productImage.name);
            storageRef.put(productImage).then(function (){
                storageRef.getDownloadURL().then((url) => {

                    const product ={
                        name:$('#name_product').value,
                        description:'abc',
                        price:$('#price_product').value,
                        image:url,
                        quantity:$('#quantity_product').value,
                        categoryId:$('#cate_id').value,
                        status: true
                    }

                        console.log(product);
                        ProductApi.add(product);
                        alert("Đã thêm thành công!!!");
                        window.location.hash = '/products';

                    }
                )
            })

        })
    }
}
export default addProduct;