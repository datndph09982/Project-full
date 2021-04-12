import sideBar from'../components/sidebaradmin.js';
import {parseRequestUrl,$} from '../utils.js';
import CategoryApi from '../api/categoryAPI.js';
import firebase from '../firebase';

const editCategory={
    async render(){
        const {id} =parseRequestUrl();
        const {data:categories} = await CategoryApi.get(id);

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
            Add new category
            </label>
            <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-2/3 px-3 mb-6 md:mb-0">
            <label  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            Name
            </label>
            <input value="${categories.name}" id="name_cate"class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name brand">
            </div>
            <div class="w-full md:w-2/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                Image
            </label>
            <div class="relative">
            <input   id="image_category" type="file" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  >
            <input  value="${categories.image}" id="old_image"  type="hidden" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  >

            <img  src="${categories.image}"  class="w-16">
            <p class="text-gray-600 text-xs italic">Add category's image</p>                
                
            </div>
            </div>
        </div>
        <div class="md:flex md:items-center">
            <div class="md:w-1/5 "></div>
            
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
        const {data:categories} = await CategoryApi.get(id);

        $('#form-update').addEventListener('submit',(e) =>{
            e.preventDefault();

            const category={
                ...categories,
                name:$('#name_cate').value,
            };
            CategoryApi.edit(id,category);
            alert("Update thành công");
            window.location.hash ='/addmincate';

            // var image = $('#old_image').value;
            // const newCate={
            //                 ...categories,
            //                 name:$('#name_cate').value,
            //                 image:image
            //             };
            // if($('#image_category').files[0]){
            
            // const cateImage = $('#image_category').files[0];
            //     let storageRef = firebase.storage().ref(`image/${cateImage.name}`);
            //     storageRef.put(cateImage).then(function (){
            //         storageRef.getDownloadURL().then((url) => {
            //         newCate.image=url;
            //         CategoryApi.edit(id,newCate);
            //         alert("Update thành công");
            //         window.location.hash = '/addmincate';
            //         })
            //         })
            //         }else{
            //         CategoryApi.edit(id,newCate);
            //         alert("Update thành công");
            //         window.location.hash = '/addmincate';
            //         }            
        })
    }
}
export default editCategory;