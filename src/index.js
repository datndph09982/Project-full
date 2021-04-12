import DetailProduct from './page/detail.js';
import Error404Page from './page/404.js';
import ProductsPage from './page/ProductsPage.js';
import { parseRequestUrl, $ } from './utils.js';
import contact from './page/contact.js';
import News from './page/news.js';
import List from './page/list.js';
import Cart from './page/cart.js';
import Header from './components/header.js';
// import categoryPage from './page/categoryPage.js';
import AdminPage from './page/adminPage.js';
import addProduct from './page/addproduct.js';
import AdminCate from './page/adminCate.js';
import addCategory from './page/addcategory.js';
import editproduct from './page/editProduct.js';
import editCategory from './page/editCategory.js';
import catehomepage from './page/cateHomepage.js';
import adminContact from './page/admincontact.js';
import sortprice from './page/sortPrice.js';
import sortprice2 from './page/sortPrice2.js';
import AdminNews from './page/adminNews.js';
import addNews from './page/addnews.js';
import eidtNews from './page/editnews.js';
import detailnews from './page/detailNews.js';
import loginUser from './page/login.js';
import search from './page/search.js';

// tao duong dan 
const routes = {
    '/':ProductsPage,
    
    //client
    '/product/:id':DetailProduct,
    '/contact': contact,
    '/news': News,
    '/list':List,
    '/cart':Cart,
    // '/category/:id': categoryPage,
    '/catehomepage/:id':catehomepage,
    '/sortprice':sortprice,
    '/sortprice2':sortprice2,
    '/detailnews/:id':detailnews,
    '/search/:id':search,


    //admin
    '/loginuser':loginUser,
    '/products':AdminPage,
    '/addproduct': addProduct,
    '/addmincate': AdminCate,
    '/addcategory': addCategory,
    '/editproduct/:id':editproduct,
    '/editcate/:id': editCategory,
    '/admincontact':adminContact,
    '/adminnews':AdminNews,
    '/addnews':addNews,
    '/editnews/:id':eidtNews
}

const router = async () => {
    const request = parseRequestUrl();
    // console.log('resource',resource);
    const parseUrl = (request.resource ? `/${request.resource}` : '/') + (request.id ? '/:id' : '');
    const screen = routes[parseUrl] ? routes[parseUrl] : Error404Page;
    $('#header').innerHTML = await Header.render();
    $('#main-content').innerHTML = await screen.render();
    if(screen.afterRender){
        await screen.afterRender();

    }
}
window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router)




