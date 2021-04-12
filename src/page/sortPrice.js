import ProductApi from '../api/ProductApi.js';
import menuList from '../components/menulist.js';
import {$} from '../utils.js';
const sortprice ={
    async render(){
        
        const {data:products} =await ProductApi.getSort();
        
        return `
        ${await menuList.render()}
        <div class=" col-span-4 bg-gray-100 py-4">
            <h2 class="not-italic text-4xl text-center mb-4 font-sans font-medium ">Price: low to high</h2>
            <div id="sort_product" class="grid grid-cols-3 gap-24 justify-items-center ">
            ${products.map(product =>{
                return `
                <div class="w-full h-96 flex flex-col  border-solid">
                <div class=" bg-center w-60 h-40 static" ><img src="${product.image}"></div>
                <div class="p-3 font-mono  text-center">
                    <ul>
                        
                        <li><p class="text-xl font-semibold text-gray-500">$ ${product.price}</p></li>
                        <li><a href="/#/product/${product.id}" class="text-lg font-bold ">${product.name}</a></li>
                        <li class="px-9">
                        <button class="rounded-full  flex items-center focus:outline-none px-5 bg-gray-500 text-white mt-2 py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                        <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                        </svg>
                        <p class="ml-4">Add to cart</p>
                      </button>
                      </li>
                    </ul>
                </div>  
            </div>
                `
            }).join("")}
        `
    },
    async afterRender(){
        // $('#sort_price').addEventListener('onchange', (e)=>{
        //     e.preventDefault();
        //     const valueOption = $("#sort_price").value;
        //     if(valueOption == "esc"){
        //         const {data:products} =  ProductApi.getSort();
        //         console.log(products);
        //         $('#sort_product').innerHTML = `
        //             ${products.map(product => {
                        
        //             }).join("")}
        //         `
        //     }
        // })
        
    }
}
export default sortprice;

