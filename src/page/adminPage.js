import ListProducts from '../components/listProductAdmin.js';
import sideBar from '../components/sidebaradmin.js';
import checkLogin from '../utils.js';
const AdminPage ={
    async render (){
        // checkLogin();
        return `<div class="grid grid-cols-12 gap-4 ">
        <div class="col-span-3 bg-gray-200 px-16 py-3">
            ${sideBar.render()}
        </div>
          
        <div class="col-span-9">
            <main role="main" class="p-3">
                
            <div class="table-responsive" id="list-products" >
            ${await ListProducts.render()}
            </div>
            </main>
        </div>

    </div>`
    },
    async afterRender() {
        return `${await ListProducts.afterRender()}`
    }
};
export default AdminPage;