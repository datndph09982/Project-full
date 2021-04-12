// import CategoryApi from '../api/categoryAPI.js';

const menuList = {
    async render(){
        // const { data: categories } = await CategoryApi.getAll();

        return `<div class="grid grid-cols-5  gap-8 px-4 py-3">
        <div class="bg-gray-100 pl-5  py-4">
            <h1 class="font-bold text-xl w-3/4 border-b-2 border-gray-400">SEARCH OPTION</h1>
            <div class="border-b-2 border-gray-300 w-4/5 py-3">  
            
            </div>

            <div class="border-b-2 border-gray-300 w-4/5 py-3">               
            <h2 class="font-medium my-3">Price</h2>
            <li><a href="/#/sortprice"  class="text-medium hover:text-blue-600 hover:underline ">Low to high </a></li>
            <li><a href="/#/sortprice2" class="text-medium hover:text-blue-600 hover:underline" >High to low</a></li>
            <br>
            <span><input type="checkbox" class="mr-3"> 0-100$</span><br>
            <span><input type="checkbox" class="mr-3"> 100-150$</span><br>
            <span><input type="checkbox" class="mr-3"> 150-200$</span><br>
            <span><input type="checkbox" class="mr-3"> 200-250$</span><br>
            <span><input type="checkbox" class="mr-3"> 250-300$</span><br>
            </div>
            <div class="border-b-2 border-gray-300 w-4/5 py-3">               
            <h2 class="font-medium my-3">Color</h2>
            <span class="flex items-center my-2"><input type="radio" class="mr-3"><div class="w-24 h-6 bg-red-600 rounded-lg "></div></span>
            <span class="flex items-center my-2"><input type="radio" class="mr-3"><div class="w-24 h-6 bg-black rounded-lg"></div></span>
            <span class="flex items-center my-2"><input type="radio" class="mr-3"><div class="w-24 h-6 bg-white rounded-lg"></div></span>
            <span class="flex items-center my-2"><input type="radio" class="mr-3"><div class="w-24 h-6 bg-yellow-400 rounded-lg"></div></span>
            <span class="flex items-center my-2"><input type="radio" class="mr-3"><div class="w-24 h-6 bg-blue-700 rounded-lg"></div></span>

            </div>
            <div class="border-b-2 border-gray-300 w-4/5 py-3">               
            <h2 class="font-medium my-3">Express</h2>
            <span><input type="radio" class="mr-3"> Shopee epress</span><br>
            <span><input type="radio" class="mr-3"> Ghtk</span><br>
            <span><input type="radio" class="mr-3"> Lalamove</span><br>
            <span><input type="radio" class="mr-3"> J&T epress</span><br>
            
            </div>
            <button type="submit" class="mx-8 my-2 py-2 rounded-md w-20 bg-gray-500 text-white font-bold hover:bg-black">Apply</button>
        </div>`
    }
}
export default menuList;