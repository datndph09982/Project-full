import sideBar from '../components/sidebaradmin.js';
import {$} from '../utils.js';
import firebase from '../firebase';
import NewsApi from '../api/NewsApi.js';
import menuArea from '../components/menuArea.js';
const addNews = {
    async render(){
        const today = new Date();
        const date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
        console.log(today);
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
                Add news
                </label>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Date
                </label>
                <input disabled value=${date} id="date_news"class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Date..">
                
                </div>
                
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    Title news
                </label>
                <input placeholder="Write something.." class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="title_news" type="text" >
                <p class="text-gray-600 text-xs italic">Add title news's</p>
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    News image
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="image_news" type="file" >
                <p class="text-gray-600 text-xs italic">Add news's image</p>
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6 summernote">
                <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    Content
                </label>
                <textarea placeholder="Write something.." class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="content_news" cols="30" rows="10" >
                </textarea>
                <p class="text-gray-600 text-xs italic">Add content news's</p>
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
    afterRender(){
        menuArea.render();
        $('#form-add').addEventListener('submit', e =>{
            e.preventDefault();
            
            const newsImage = $('#image_news').files[0];
            let storageRef = firebase.storage().ref(`img/${newsImage.name}`);
            storageRef.put(newsImage).then(function (){
                storageRef.getDownloadURL().then((url) => {
                    const news = {
                        id: Math.random().toString(36).substr(2,9),
                        title:$('#title_news').value,
                        image:url,
                        date:$('#date_news').value,
                        content:$('#content_news').value
                    }
                        console.log(news);
                        NewsApi.add(news);
                        alert("Đã thêm thành công!!!");
                        window.location.hash = '/adminnews';

                    }
                    

                )
            })
            
        })
    }
}
export default addNews;