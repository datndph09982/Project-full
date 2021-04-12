import ListCategories from '../components/listCategories.js';
import sideBar from '../components/sidebaradmin.js';

const AdminCate ={
    async render (){
        return `<div class="grid grid-cols-12 gap-4 ">
        <div class="col-span-3 bg-gray-200 px-16 py-3">
            ${sideBar.render()}
        </div>
          
        <div class="col-span-9">
            <main role="main" class="p-3">
                
            <div class="table-responsive" id="list-products" >
            ${await ListCategories.render()}
            </div>
            </main>
        </div>

    </div>`
    },
    async afterRender() {
        return `${await ListCategories.afterRender()}`
    }
};
export default AdminCate;