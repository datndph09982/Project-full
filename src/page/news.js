import NewsApi from '../api/NewsApi.js';
const News = {
    async render(){
        const {data:news} = await NewsApi.getAll();
        const {data:news2} = await NewsApi.getSort2();
        const first = news[0];
        return /*html*/`
        <div class="container mx-auto">
            <div class="my-16 text-center  font-bold text-5xl">NEWS </div>
            <div class="grid grid-rows-3 grid-flow-col gap-2 mx-32">
                        
                            
                            <div class="row-span-2 col-span-2 bg-black h-96 bg-cover bg-center relative " style="background-image: url(${first.image})">
                                <a class="absolute bottom-10 left-6 right-20 text-white text-4xl font-bold" href="/#/detailnews/${first.id}">${first.title}</a>
                            </div>
                         ${news.map(News =>{
                             return /*html*/`
                             <div class=" bg-black bg-cover bg-center relative" style="background-image: url(${News.image})">
                                <a class="absolute bottom-4 left-4 right-10 text-white text-lg font-medium" href="/#/detailnews/${News.id}">${News.title}</a>
                             </div>
                            `
                         }).join("")}  
                        
                        </div>
            <div class="mt-16 mb-6 font-bold text-3xl text-gray-700 mx-32 border-b border-gray-400">NEWS LATESTED </div>            
            <div class="w-3/4 lg:gap-x-6 mx-28">
                
                    ${news2.map(News => {
                        return/*html*/`
                        <div class="flex pb-4 items-start p-8 ">
                            <div class=" w-full h-72 sm:w-64 sm:h-44 ">
                                <a href="/#/detailnews/${News.id}"> <div class=" transition duration-500 ease-in-out transform  hover:scale-125">
                                        <img class="w-200 h-44" src="${News.image}" alt="">
                                    </div></a>
                            </div>
                            <div class="pl-4 flex-1">
                                <div class="text-xl font-semibold"><a class="text-gray-700 hover:text-blue-500" href="/#/detailnews/${News.id}">${News.title}</a></div>
                                <p class="text-gray-500 my-2">${News.date}</p>
                            </div>
                        </div>
                        `
                        
                    }).join("")}
                       
                    
                
                
        
            </div>
        </div>
        `
    }
}
export default News;