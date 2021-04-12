import CategoryApi from '../api/categoryAPI.js';

const Header = {
    async render(){
        const { data: categories }= await CategoryApi.getAll();

        return  `<nav class="rd-navbar-aside-outer rd-navbar-collapse bg-black ">
          
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 " >
          <div class="relative flex items-center justify-between h-20">
            
            <div class="flex-1 flex items-center justify-center ml-20 sm:items-stretch sm:justify-start">
              <div class="flex-shrink-0 flex items-center border-r border-gray-100 px-5">
                <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
                <img class="hidden lg:block h-4 w-auto" src="https://ld-wp.template-help.com/wordpress_prod-12407/wp-content/themes/transmister/assets/images/invert-logo.png" alt="Workflow">
              </div>
              <div class="text-gray-200 px-3 py-2 not-italic">
                Car model
              </div>
              
            </div>

            <form id="form-search">
              <input type="text" id="search-value" class="rounded-l-lg px-4 py-2  text-gray-700leading-tight focus:outline-none" placeholder="Example...">
              <button class="text-white bg-yellow-600 rounded-r-lg  mr-6 px-4 py-2" type="submit">Search</button>
            </form>
            <div class="absolute inset-y-0  flex items-center mr-8 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div class="hidden  mr-10  pr-10 sm:block sm:ml-6 border-r border-gray-100">
                <div class="flex space-x-4">
                  <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                  <a href="#"       class="text-gray-300 focus:bg-gray-100 focus:text-black hover:bg-gray-100 hover:text-black text-current px-3 py-2 rounded-md text-sm font-medium ">Home</a>
                  <a href="#/list/" class="text-gray-300 focus:bg-gray-100 focus:text-black hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium">List</a>
                  <a href="#/news/" class="text-gray-300 focus:bg-gray-100 focus:text-black hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium">News</a>
                  <a href="#/contact/" class="text-gray-300 focus:bg-gray-100 focus:text-black hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Contact</a>

                </div>
              </div>
              <a href="/#/cart/" class="bg-gray-800 p-1 rounded-full text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span class="sr-only">View notifications</span>
                <!-- Heroicon name: bell -->
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="border-1 rounded-full bi bi-cart-plus " viewBox="0 0 16 16">
                  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
              </a>
      
              <!-- Profile dropdown -->
              <div class="ml-3 relative">
                <a href="/#/products/">
                  <button class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
                    <span class="sr-only">Open user menu</span>
                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                  </button>
                
              </div>
            </div>
          </div>
        </div>
      </nav>` 
    }
}

export default Header;