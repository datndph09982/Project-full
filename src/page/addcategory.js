import sideBar from '../components/sidebaradmin.js';
// import addNew from '../components/addNewcate.js';
import {$} from '../utils.js';
import CategoryApi from '../api/categoryAPI.js';
import firebase from '../firebase';
const addCategory = {
    async render(){
        const {data:categories} = await CategoryApi.getAll();
        const newid=categories.length+1;
        return /*html*/`
        <div class="grid grid-cols-12 gap-4 ">
        <div class="col-span-3 bg-gray-200 px-16 py-3">
            ${sideBar.render()}
        </div>
          
        <div class="col-span-9">
            <main role="main" class="p-3">
            <div class="table-responsive" id="list_products" >
            <form class="w-full max-w-3xl ml-12 mt-8" id="form-add" enctype="multipart/form-data">
            <label class="block uppercase tracking-wide text-gray-700 text-3xl font-bold mb-8" for="grid-first-name">
            Add new category
            </label>
            <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-2/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            Name
            </label>
            <input id="name_cate"class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name brand">
            </div>
            <div class="w-full md:w-2/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                image
            </label>
            <div class="relative">
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="image_category" type="file" >
            </div>
            </div>
        </div>
        <div class="md:flex md:items-center">
            <div class="md:w-1/5 "></div>
            
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
    afterRender(){
        $('#form-add').addEventListener('submit', e =>{
            e.preventDefault();
            // const category = {
            //     // id:Math.random().toString(36).substr(2,9),
            //     name:$('#name_cate').value,
            //     // image:$('#image_category').files[0]
            // }
            // // console.log(category.image);
            //     CategoryApi.add(category);
            //     alert("Đã thêm thành công!!!");
            //     window.location.hash = '/addmincate';
            // }
            
            const cateImage = $('#image_category').files[0];
            let storageRef = firebase.storage().ref(`image/${cateImage.name}`);
            storageRef.put(cateImage).then(function (){
                storageRef.getDownloadURL().then((url) => {
                    const category = {
                        name:$('#name_cate').value,
                        image:url
                    }
                        console.log(category);
                        CategoryApi.add(category);
                        alert("Đã thêm thành công!!!");
                        window.location.hash = '/addmincate';
                    }
                    

                )
            })

        }
        )
    }
}
export default addCategory;