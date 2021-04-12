const Cart = {
    render(){
        return `<div class="w-11/12 mt-10 p-4 bg-gray-200 mx-auto">
        <div class="container" id="container_cart">
        <h2 class="text-center text-3xl font-bold py-8">CART SHOPPING</h2>
            <form id="id_soluong">
                
                    <div class="flex justify-end">
                        <a href=""><button class="mx-8 my-2 py-2 rounded-md w-20 bg-gray-500 text-white font-bold hover:bg-black" type="button">History</button></a>
                    </div>
                
    
                <div class="table_cart px-4">
                    <table  class=" w-full text-center table-hover my-8 load_price1" >
                        <tr class="border-b-2 border-gray-500">
                            <th class="w-1/4 text-left">NAME PRODUCT</th>
                            <th>IMAGE</th>
                            <th>PRICE</th>
                            <th>STATUS</th>
                            <th>COLOR</th>
                            <th></th>
                        </tr>
    
                        <tr class=" border-b border-gray-500 ">
                                <td class="w-1/4 text-left "> </td>
                                <td class="flex justify-center">
                                    <a href="">
                                        <img class="h-40 py-4" src=""> 
                                    </a>
                                </td>
                                <td class="text-primary"> </td>
                                <td> </td>
                                <td class="text-primary"></td>
                                <td><a href=""><i class="far fa-trash-alt text-black hover:text-blue-500 pr-4"></i></a></td>
                            </tr>
                            
    
                    </table>
                </div>
                <a href=""><button class="mr-3 ml-5 my-2 py-2 rounded-md w-20 bg-gray-500 text-white font-bold hover:bg-black " type="button"> <i class="fas fa-arrow-left"></i><< Back</button></a>
                <button class="px-2 my-2 py-2 rounded-md w-50 bg-gray-500 text-white font-bold hover:bg-black" id="update_cart" type="button">Update cart</button>
            </form>
        </div>
        <div class="container ">
    
            <div class="text-2xl my-4 font-semibold mx-6">INFORMATION CUSTOMER</div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="">
                    <form id="thong_tin_kh">
                        <input class="w-full md:w-10/12 p-2 my-4 border" name="ho_ten" value="" placeholder="Name" type="text">
                        <input class="w-full md:w-10/12 p-2 my-4 border" name="dia_chi" value=""  placeholder="Address" type="text">
                        <input class="w-full md:w-10/12 p-2 my-4 border" name="sdt" value="" placeholder="Phone number" type="text">
                        <input class="w-full md:w-10/12 p-2 my-4 border" name="email" value=""  placeholder="Email" type="text"><br>
                        <input name="vai_tro" value="0" type="hidden">
                        <input name="kich_hoat" value="0" type="hidden">
                        <button type="button" id="thanh_toan_js" class="px-10 my-2 py-2 rounded-md w-50 bg-gray-500 text-white font-bold hover:bg-black">Order</button>
                    </form>
                </div>
                <div class="border-2 border-gray-400 p-4 mt-4">
                    <div class="text-2xl mb-4 font-semibold">Bill</div>
                    <div class="flex justify-between border-b-4 border-gray-400 py-2">
                        <div class="font-semibold">Product</div>
                        <div class="font-semibold mr-4">Total</div>
                    </div>
                    <div class="don_hang">
                       
                            <div class="flex justify-between py-2  border-b-2 border-gray-400 load_price">
                                <div class="text-gray-600">Car model</div>
                                <div class=" mr-4 text-primary">$500</div>
                            </div>
                            
                    </div>
                    <div class="don_hang_total">
                        <div class="flex justify-between py-2  border-b-2 border-gray-400 load_price2">
                            <div class="font-semibold">Total</div>
                            <div class="text-primary mr-4">$500</div>
                        </div>
                    </div>
                    <div class="py-4">Making payment when goods are delivered, customers have the right to check the goods before making payment</div>
                </div>
            </div>
        </div>
        
        </div>`
    }
}
export default Cart;