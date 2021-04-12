const sideBar={
    render(){
        return`<ul class="">
        <li class="border-b-2 border-gray-600 pb-3">
          <a class="nav-link active " href="/#/products">
            <span class="font-black text-3xl text-blue-500">Dashboard</span>
            
          </a>
        </li>
        
        <li class="py-2 border-b-2 border-gray-300 mx-4">
          
            <a class="nav-link active text-2xl font-medium " href="/#/products">
                Product
            </a>
            
        </li>
        
        <li class="py-2 border-b-2 border-gray-300 mx-4">
            <a class="nav-link active text-2xl font-medium" href="/#/addmincate/">
                Category
            </a>
        </li>
        
        <li class="py-2 border-b-2 border-gray-300 mx-4">
            <a class="nav-link active text-2xl font-medium" href="/#/admincontact/">
                Contact
            </a>
        </li>
        <li class="py-2 border-b-2 border-gray-300 mx-4">
        <a class="nav-link active text-2xl font-medium" href="/#/adminnews/">
            News
        </a>
        </li>
       
        
    </ul>`
    }
}
export default sideBar;