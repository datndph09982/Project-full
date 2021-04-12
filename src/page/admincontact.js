import ContactApi from '../api/ContactApi.js';
import sideBar from '../components/sidebaradmin.js';
const adminContact ={
    async render(){
        const {data:contact} = await ContactApi.getAll();
        console.log(contact);
        return `<div class="grid grid-cols-12 gap-4 ">
        <div class="col-span-3 bg-gray-200 px-16 py-3">
            ${sideBar.render()}
        </div>
          
        <div class="col-span-9">
            <main role="main" class="p-3">
                
            <div class="table-responsive" id="list-products" >
            <table class="table-fixed">
            <thead>
                <tr>
                <th class=" px-4 py-2">Name</th>
                <th class=" px-4 py-2">Email</th>
                <th class="w-1/3 px-4 py-2">Title</th>
                
                <th class="w-1/2 px-4 py-2">Content</th>
                </tr>
            </thead>
            <tbody>
            ${ contact.map(contact => {
                return `
                <tr class="text-center">
                    <td class="border px-8 py-2 ">${contact.name}</td>
                    <td class="border px-4 py-2 text-center w-48">${contact.email}</td>
                    <td class="border px-2 py-2 w-auto">${contact.title}</td>
                    <td class="border px-2 py-2 w-auto">${contact.content}</td>

                </tr>
                `
            }).join("")}
                
                
            </tbody>
        </table>
            </div>
            </main>
        </div>

    </div>`
    },
    
}
export default adminContact;