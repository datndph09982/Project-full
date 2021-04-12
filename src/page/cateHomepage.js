import ProductApi from '../api/ProductApi.js';
import { parseRequestUrl } from '../utils.js';
import CategoryApi from '../api/categoryAPI.js';
const catehomepage ={
    async render(){
        const { data: categories } = await CategoryApi.getAll();
        const { _id } =parseRequestUrl();
        const {data: products} = await ProductApi.getAll();
        const result = products.filter(product => product.categoryId == _id);
        const result2 = categories.filter(category => category.id == _id);
        console.log(result);
        console.log(result2.id);
        // const {data:product} =await ProductApi.getRelated()
        return`
        <div class="bg-gray-100"> 
        <hr class="gray-200 ">
        <img src="./src/image/background.jpg" class="w-full h-2/5">

        <div class=" m-10">
            
            <div class="grid grid-cols-6 gap-4">
                ${categories.map(cate =>{
                    return `
                    <div class="shadow-2xl rounded-md bg-white animate-pulse">
                        <a href="/#/catehomepage/${cate.id}">
                            <div class="p-2  max-h-2xl border-gray-300">
                                <img src="${cate.image}" class="h-30 w-30">
                            </div>
                        </a>
                    </div>
                    `
                }).join("")}
            </div>
        </div>

        <div class="bg-white m-10">
        ${result2.map(categ => {
            return`<div class=" w-40 mx-auto">
                        <a href="/#/catehomepage/${categ.id}">
                            <div class="p-2  max-h-2xl border-gray-300">
                                <img src="${categ.image}" class="h-40 w-40">
                            </div>
                            <p class="text-center font-medium text-2xl">${categ.name}</p>
                        </a>
                    </div>
        `
        })

        }
        <h2 class="not-italic text-4xl font-medium text-center my-12 pt-6 font-sans "></h2>
        <div class="grid grid-cols-3 gap-32 justify-items-center px-24">
                ${result.map(product =>{
                    return /*html*/`
                    <div class="w-full h-96 flex flex-col  border-solid .shadow-xl">
                    <div class=" bg-center w-80 h-60 static" ><img src="${product.image}"></div>
                    <div class="p-2 font-mono  text-center ">
                        <ul>
                            
                            <li><p class="text-xl font-semibold text-gray-500">$ ${product.price}</p></li>
                            <li><a href="/#/product/${product._id}" class="text-lg font-bold ">${product.name}</a></li>
                            <li class="px-9">
                            <button class="rounded-full  flex items-center focus:outline-none px-8 py-1 bg-gray-500 text-white mt-2 py-2 hover:bg-gray-300 hover:text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                            <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                            </svg>
                            <p class="ml-2">Add to cart</p>
                        </button>
                        </li>
                        </ul>
                    </div>  
                </div>
                    `
                }).join("")}
        </div>
        </div>
        </div>
        `
    }
}
export default catehomepage;