import ProductApi from '../api/ProductApi.js';
import { parseRequestUrl } from '../utils.js';
import CategoryApi from '../api/categoryAPI.js';
const DetailProduct = {
   async render() {
    const { id } = parseRequestUrl();
    const { data : product } = await ProductApi.get(id);
    const { data : categories } = await CategoryApi.getAll();
    const result2 = categories.filter(category => category.id == product.categoryId);
    console.log(product);
    // const { data : image} = await ProductApi.getimage(id);
    // console.log(image.data);
        return `
      <div class="grid grid-cols-2 my-20">
      <div class="col-1 w-2/3  relative">
      <img src="${product.image}" alt="" class="absolute inset-0  ml-40" />
      </div>
      <form class="col-1 pl-6  border-l-2 border-gray-200 ">
        <h1 class="text-4xl py-2 font-semibold text-gray-500">${product.name}</h1>
         <div class="flex flex-wrap items-baseline">
            ${result2.map(cate =>{
              return `<h1 class=" w-full flex-none text-xl font-semibold my-2">
              BRAND: ${cate.name}
              </h1>`
            }).join("")
            }
            <div class="text-2xl font-semibold text-gray-500">$ 
            ${product.price}
            </div>
            <div class="w-full flex-none text-sm font-medium text-gray-500 mt-2">
            Quantity: ${product.quantity}
            </div>
        </div>
    <div class="flex items-baseline mt-4 mb-6">
      <div class="space-x-2 flex text-center">
        <label>
          <div  class="w-20 h-9 bg-white border-2 border-gray-400 rounded-md py-1 mb-2 text-center ">White</div>
          <input class="w-4 h-4  bg-gray-100 " name="size" type="radio" value="xs" checked>
        </label>
        <label>
          <div  class="w-20 h-9 bg-red-700 rounded-md py-1 mb-2 text-center text-white ">Red</div>
          <input class="w-4 h-4  bg-gray-100 " name="size" type="radio" value="xs" checked>
        </label>
        <label>
          <div  class="w-20 h-9 bg-black rounded-md py-1 mb-2 text-center text-white ">Black</div>
          <input class="w-4 h-4  bg-gray-100 " name="size" type="radio" value="xs" checked>
        </label>
        
      </div>
      
    </div>
    <div class="flex space-x-2 mb-4 text-sm font-medium">
      
          <button class="w-1/2 flex items-center justify-center rounded-md bg-black text-white" type="submit">Add to bag</button>
        
        <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300" type="button" aria-label="like">
          <svg width="20" height="20" fill="currentColor">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
          </svg>
        </button>
    </div>
      <p class="text-sm text-gray-500">
        Free shipping on all continental US orders.
      </p>
        </form>
      </div>
    <div class="bg-gray-100 w-4/5 mx-auto px-6 py-4">
    <form class="text-gray-500">
      <label>Comment</label><br>
      <textarea type="text" class="border w-full mt-2" h-40 placeholder="Comment about product's quality...."></textarea>
      <button class="px-10 py-2 bg-gray-500 hover:bg-black rounded-md text-white mt-2 font-semibold">Send</button>
      </form>
    </div>
    <div class="bg-gray-100 w-4/5 h-80 mx-auto p-6 mt-10" >
        <div class="bg-white py-3 pl-3 text-xl font-semibold text-gray-500">
        DETAIL PRODUCT
        </div>
        <div class="grid grid-cols-6 py-3 pl-3">
          <div class="cols-1">
            <div class="my-2 text-gray-400">Category</div>
            <div class="my-2 text-gray-400">Brand</div>
            <div class="my-2 text-gray-400">Material</div>
            <div class="my-2 text-gray-400">Origin</div>
            <div class="my-2 text-gray-400">Category</div>
            <div class="my-2 text-gray-400">Category</div>
          </div>
          <div class="cols-5">
            <div class="my-2 ">Model car</div>
            <div class="my-2 ">Bruder</div>
            <div class="my-2 ">Plastic</div>
            <div class="my-2 ">China</div>
            <div class="my-2 ">15</div>
            <div class="my-2 ">Hanoi city</div>
          </div>
        </div>
    </div>
    <div class="bg-gray-100 w-4/5 h-80 mx-auto p-6 mt-10" >
        <div class="bg-white py-3 pl-3 text-xl font-semibold text-gray-500">
        PRODUCT DESCRIPTION
        </div>
        <div class=" py-3 px-3">
        <div class="my-2 text-gray-600">
        1:16 Scale Model Vehicle The Bruder BRU03570 Crane Truck features a lifelike design with exquisite simulation details. The product is equipped with a system of lights and signaling bells to stimulate the curiosity of the baby. The product will definitely be a meaningful gift that parents give to babies, especially babies who love toy car models.
        <br>- The vehicle has a crane arm that can reach up to 1.2m.
        <br>- The car is also equipped with a system of lights and signaling bells to contribute to the excitement of the baby when playing.
        <br>- Exactly and accurately simulated car model with real car image in 1:16 scale.
        <br>- Thanks to that, your baby can easily learn and distinguish different types of transport.
        <br> - The details of the product are made from safe plastic according to European standards.
        </div>
        </div>
        
    </div>
    
    `;
   

}
}
export default DetailProduct;
