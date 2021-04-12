import NewsApi from '../api/NewsApi.js';
import { reRender,$ } from '../utils.js';

const listnews ={
    async render(){
        const {data:news} = await NewsApi.getAll();
        return `
        <a href="/#/addnews/"><button class="border-4 boder-gray-700 text-current hover:border-gray-900 font-medium py-2 px-4 rounded mt-2">Add new</button>
        </a>
        <table class="table-fixed">
            <thead>
                <tr>
                <th class="w-1/6 px-4 py-2">Date-write</th>
                <th class="w-1/6 px-4 py-2">Late-update</th>

                <th class="w-1/4  px-4 py-2">Image</th>
                <th class="w-1/2 px-4 py-2">Title</th>
                
                <th class="w-1/3 px-4 py-2">Action</th>
                </tr>
            </thead>
            <tbody>
            ${news.map((New) => {
                return `
                <tr >
                    <td class="border px-8 py-2 " class="text-center">${New.date}</td>
                    <td class="border px-8 py-2 " class="text-center">${New.update_date}</td>

                    <td class="border px-4 py-2 text-center w-48" class="text-center"><img src="${New.image}" class="w-full  "></td>
                    <td class="border px-2  w-auto">${New.title}</td>
                    <td class="border px-2 py-2" class="text-center">
                        <a href="/#/editnews/${New.id}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Detail</a>
                        <button data-id="${New.id}" class="btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2">Remove</button>
                    </td>
                </tr>
                `
            }).join("")}
                
                
            </tbody>
        </table>
        
        `
    },
    async afterRender() {
        const btns = $('#list-news .btn');
        btns.forEach( btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click',async function(){
                const question = confirm ('Bạn có chắc chắn muốn xóa ?');
                if(question){
                    await NewsApi.remove(id);
                    await reRender(listnews,'#list-news')
                }
            } )
        })
    }
}
export default listnews;