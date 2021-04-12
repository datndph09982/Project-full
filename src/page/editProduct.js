import sideBar from'../components/sidebaradmin.js';
import {parseRequestUrl,$} from '../utils.js';
import ProductApi from '../api/ProductApi.js';
import CategoryApi from '../api/categoryAPI.js';
import firebase from '../firebase';

const editproduct ={
    async render(){
        const {id} =parseRequestUrl();
        const {data: products} =await ProductApi.get(id);
        const {data:categories} = await CategoryApi.getAll();
        const newid=products.id;
        const result2 = categories.filter(category => category.id == id);
       
        // console.log(products);
        return /*html*/`
        <div class="grid grid-cols-12 gap-4 ">
        <div class="col-span-3 bg-gray-200 px-16 py-3">
            ${sideBar.render()}
        </div>
          
        <div class="col-span-9">
            <main role="main" class="p-3">
            <div class="table-responsive" id="list_products" >
              
            <form class="w-full max-w-3xl ml-12 mt-8" id="form-update">
            <label class="block uppercase tracking-wide text-gray-700 text-3xl font-bold mb-8" for="grid-first-name">
            Update product                
            </label>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Name
                </label>
                <input id="name_product" value="${products.name}" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name product">
                
                </div>
                <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                price           </label>
                <input value="${products.price}" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="price_product" type="number" placeholder="100">
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    Link image
                </label>
                <input   id="image_product" type="file" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  >
                <input  value="${products.image}" id="old_image"  type="hidden" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  >

                <img  src="${products.image}"  class="w-16">
                <p class="text-gray-600 text-xs italic">Add product's image</p>
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                    quantity
                </label>
                <input  value="${products.quantity}" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="quantity_product" type="number" placeholder="Number">
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                    category-ID
                </label>
                <div class="relative">
                    <select  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="cate_id">
                    ${categories.map(category => {
                        return`<option value="${category.id}" >${category.name}</option>`
                    }).join("") }
                    
                    
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                    ID
                </label>
                <div class="relative">
                    <input type="text" disabled class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="id_product" >
                    
                    
                </div>
                </div>
            </div>
            <div class="md:flex md:items-center">
                <div class="md:w-1/3"></div>
                
                <button class="shadow bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-4" type="submit">
                    Update
                </button>
                
            </div>
            </form>
            </div>
            </main>
        </div>

    </div>
        `
        
    },
    async afterRender(){
        const {id} =parseRequestUrl();
        const {data:product} = await ProductApi.get(id);
        console.log(id);
        $('#form-update').addEventListener('submit',(e) =>{
            e.preventDefault();
            var image = $('#old_image').value;
            const newProduct={
                            ...product,
                            name:$('#name_product').value,
                            description:'abc',
                            image:image,
                            price:$('#price_product').value,
                            quantity:$('#quantity_product').value,
                            categoryID:$('#cate_id').value,
                        };

            if($('#image_product').files[0]){
                const productImage = $('#image_product').files[0];
                let storageRef = firebase.storage().ref(`images/${productImage.name}`);
                storageRef.put(productImage).then( () => {
                    console.log("upload thành công");
                    storageRef.getDownloadURL().then( (url) =>{
                        newProduct.image=url;
                        console.log(newProduct);
                        ProductApi.edit(id,newProduct);
                        alert("Update thành công");
                        window.location.hash = '/products';

                    })
                })
            }else{
                ProductApi.edit(id,newProduct);
                alert("Update thành công");
                window.location.hash = '/products';

            }            
            

            // const newProduct={
            //     ...product,
            //     name:$('#name_product').value,
            //     image:$('#image_product').value,
            //     price:$('#price_product').value,
            //     quantity:$('#quantity_product').value,
            //     categoryID:$('#cate_id').value,
            // };
            // if(product.name=="" ||product.price==""||product.image==""||product.quantity==""){
            //     alert("Bạn phải nhập đủ thông tin !!!");
            // }else if(product.price <= 0){
            //     alert("Giá tiền không được là số âm !!!");
            // }else if(product.quantity <= 0){
            //     alert("Số lượng không được là số âm !!!");
            // }
            // else{
            // ProductApi.edit(id, newProduct);
            // alert("Đã sửa thành công!!!");
            // window.location.hash = '/products';
            // }
        })
    }
}
export default editproduct;