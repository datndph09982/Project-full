import NewsApi from '../api/NewsApi.js';
import { parseRequestUrl } from '../utils.js';
const detailnews = {
    async render(){
        const { id } = parseRequestUrl();
        const {data:news} = await NewsApi.get(id);
        return /*html*/`
            <div class="bg-gradient-to-r from-gray-400 via-gray-100 to-gray-700 w-full max-h-96 px-28 pt-20 ">
                <div class="bg-white py-8 px-14 ">
                    <div>
                        <a href="/#/news/"><<< News</a>
                        <div class="text-4xl font-serif font-bold leading-normal">
                            ${news.title}
                        </div>
                        <li class=" text-gray-600 my-4">Upload: ${news.date}</li>
                        <div class="mx-4 ">
                            ${news.content}
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="clear-both"></div>
        `
    }
}
export default detailnews;