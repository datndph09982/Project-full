import {$} from '../utils.js';

import ContactApi from '../api/ContactApi.js';
const contact = {
    async render(){
        return `<div class="lienhe " style=" background-image: url('./src/image/bg-contact.jpg'); background-size: 100%">
      
        <div class="grid grid-cols-1 md:grid-cols-2" >
            <div class="contact text-center py-4">
                <h1 class="mt-5 mb-2 text-center text-white text-2xl font-bold">CONTACT WITH US</h1>

                <form action="lien-he.php" method="post" enctype="multipart/form-data" id="form-add">
                    <input id="name_contact" class="bg-gray-500 bg-opacity-75 rounded-xl w-10/12 md:w-3/5 border-none text-white p-2 m-2 placeholder-white " name="ho_ten" placeholder="Name"><br>
                    
                    <input id="email_contact" type="email" name="gmail" class="bg-gray-500 bg-opacity-75 rounded-xl w-10/12 md:w-3/5 border-none text-white p-2 m-2 placeholder-white  " placeholder="Email "><br>
                    <input id="title_contact" type="text" name="tieu_de" class="bg-gray-500 bg-opacity-75 rounded-xl w-10/12 md:w-3/5 border-none text-white p-2 m-2 placeholder-white " placeholder="Title"><br>
                    
<!--                    <input name="sdt" class="bg-gray-500 bg-opacity-75 rounded-xl w-10/12 md:w-3/5 border-none text-white p-2 m-2 placeholder-white " placeholder="Phone number"><br>
                    -->
                    <textarea id="content_contact" type="text" name="noi_dung" class="bg-gray-500 bg-opacity-75 rounded-xl w-10/12 md:w-3/5 border-none text-white p-2 m-2 placeholder-white " rows="4" placeholder="Content"></textarea><br>
                    
                    <div class=" "><button type="submit" class="btn btn-outline-primary border-2 border-white rounded-md w-20 text-white font-bold " name="btn_Lienhe">Send</button></div>
                    

                </form>
            </div>
            <div class="flex justify-center">
            <div class="about-us text-center text-white bg-gray-500 bg-opacity-75 w-10/12 md:w-3/5 pt-10 " >
                <div class="p-5">
                    <h1 class="text-2xl mb-2 font-bold">ABOUT US</h1>
                    <p class="text-1xl">TRANSMISTER MAKES FACTS AND FASHION TRENDS WORLDWIDE. </p><br>
                    <i class="text-gray-200">"We provide developers, e-commerce site owners and their customers around the world the best online stores.
                    "</i>
                    <p>-Jerry Combo</p><br>

                    <a href="https://www.facebook.com/"><i class="fab fa-facebook-f " id="icon_sign_up_footer"></i></a>
                    <a href="https://twitter.com/"> <i class="fab fa-twitter" id="icon_sign_up_footer"></i></a>
                    <a href="https://www.google.com.vn/"><i class="fab fa-google-plus-g" id="icon_sign_up_footer"></i></a>
                    <a href="#"><i class="fas fa-camera" id="icon_sign_up_footer"></i></a>
                    <a href="#"><i class="fas fa-phone-volume" id="icon_sign_up_footer"></i></a>

                </div>
            </div>
            </div>
        </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 p-4 gap-8 mb-10">

        <div class="ml-10"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14894.747094875795!2d105.7425176697754!3d21.045215400000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313455ace9078029%3A0x677e91696344621b!2sShop%20Crocs%20Store%20-%20Crocs%20Vietnam!5e0!3m2!1sen!2s!4v1606202249157!5m2!1sen!2s" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
        <div class="ml-5">
            <div class="text-3xl mt-4 font-bold" >Contact</div>
            <hr class="w-20 h-1 bg-black">
            <p>
                <ul>
                     
                   <li class="mt-5">
                        <p>Address</p>
                        <p><strong>315 Trường Chinh, Khương Mai, Thanh Xuân, Hà Nội.</strong></p>
                    </li>
                    <li class="mt-4">
                        <p>Email shop</p>
                        <p><strong>datdinh99hp@gmail.com</strong></p>
                    </li >
                    <li class="mt-4">
                        <p>Phone number</p>
                        <p><strong>0987654321</strong></p>
                    </li>
                    <li class="mt-4">
                        <p>Time online</p>
                        <p><strong>Monday to saturday, 9am to 17pm</strong></p>
                    </li>
                     
                   
                </ul>
            </p>
        </div>`
    },
    afterRender(){
        $('#form-add').addEventListener('submit', e =>{
            e.preventDefault();
                    const contact = {
                        id:$('#id_contact').value,
                        name:$('#name_contact').value,
                        email:$('#email_contact').value,
                        title:$('#title_contact').value,
                        content:$('#content_contact').value
                    }
                    if(contact.name=="" ||contact.email==""||contact.title==""||contact.content==""){
                        alert("Bạn phải nhập đủ thông tin !!!");
                    }else{
                    
                        ContactApi.add(contact);
                        alert("Cảm ơn bạn đã gửi thông tin!!!");
                    }
                    }
                    

                )
            }

}
export default contact;
