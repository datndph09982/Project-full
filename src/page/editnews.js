import sideBar from'../components/sidebaradmin.js';
import {parseRequestUrl,$} from '../utils.js';
import NewsApi from '../api/NewsApi.js';
import firebase from '../firebase';
import menuArea from '../components/menuArea.js';
const eidtNews = {
    async render(){
        const {id} = parseRequestUrl();
        const {data:news} = await NewsApi.get(id);
        const today = new Date();
        const date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
        console.log(news.content);
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
                Detail news
                </label>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Date
                </label>
                <input disabled value=${news.date} id="date_news"class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Date..">
                <input type="hidden" value=${date} id="update_date">
                </div>
                
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    Title news
                </label>
                <input id="title_news" value="${news.title}"  type="text" placeholder="Write something.." class=" block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  >
                <p class="text-gray-600 text-xs italic">Add title news's</p>
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    News image
                </label>
                <input type="hidden" value=${news.image} id="old_image" >
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="image_news" type="file" >
                <img src=${news.image} class="w-16">
                <p class="text-gray-600 text-xs italic">Add news's image</p>
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6 summernote">
                <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    Content
                </label>
                <textarea cols="30" rows="10" placeholder="Write something.." class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="content_news"  >
                ${news.content}
                </textarea>
                <p class="text-gray-600 text-xs italic">Add content news's</p>
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
        menuArea.render();
        const {id} =parseRequestUrl();
        const {data:news} = await NewsApi.get(id);
        $('#form-update').addEventListener('submit',(e) =>{
            e.preventDefault();
            var image = $('#old_image').value;
            const newNews={
                            ...news,
                            title:$('#title_news').value,
                            image:image,
                            update_date:$('#update_date').value,
                            content:$('#content_news').value
                        };

            if($('#image_news').files[0]){
                const newsImage = $('#image_news').files[0];
                let storageRef = firebase.storage().ref(`img/${newsImage.name}`);
                storageRef.put(newsImage).then( () => {
                    
                    storageRef.getDownloadURL().then( (url) =>{
                        newNews.image=url;
                        console.log(newNews.title);
                        NewsApi.edit(id,newNews);
                        alert("Update thành công");
                        window.location.hash = '/adminnews';
                    })
                })
            }else{
                NewsApi.edit(id,newNews);
                alert("Update thành công");
                window.location.hash = '/adminnews';

            }            
            

            
        })
    }
}
export default eidtNews;