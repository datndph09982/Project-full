import MainPage  from'../../components/client/main2.js';
import { $, parseRequestUrl, reRender } from '../../utils.js';
import UserApi from '../../api/UserApi.js';
import ProductApi from '../../api/ProductApi.js';
import Search from './search.js';
 const AcountPage = {
	async render(){
		MainPage.setContent = async ()=>{
			const { data: users } = await UserApi.getAll();
			//console.log(abouts);
			return `
				<div class="account">
					<div class="container">
					<div class="account-top heading">
							<h2>ACCOUNT</h2>
						</div>
						<div class="account-main">
							<div class="col-md-6 account-left">
								<h3>Existing User</h3>
								<form class="account-bottom" id="form-login">
									<input placeholder="Email" type="text" tabindex="3" required id="email">
									<input placeholder="Password" type="password" tabindex="4" required id="password">
									<div class="address">
										<a class="forgot" href="#">Forgot Your Password?</a>
										<input type="submit" value="Login">
									</div>
								</form>
							</div>
							<div class="col-md-6 account-right account-left">
								<h3>New User? Create an Account</h3>
								<p>By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
								<a href="register.html">Create an Account</a>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>
				</div>
			`
		}
		MainPage.setBreadCrumb = async () =>{
				return `<div class="container">
							    <div class="breadcrumbs-main">
							        <ol class="breadcrumb">
							            <li><a href="#/">Home</a></li>
							            <li class"active" class="active">Acount</li>
							        </ol>
							    </div>
								</div>`
		}
       return await MainPage.render();

	},
	async afterRender(){
		// @ login
		$('#form-login').addEventListener('submit', async(e) => {
			e.preventDefault();
			if($('#email').value.trim() && $('#password').value.trim()){
				const { data: users } = await UserApi.getAll();
				const user = users.filter(item => {
					return item.email == $('#email').value.trim() && item.password == $('#password').value.trim();
				})
				if(user){
					sessionStorage.setItem("user", JSON.stringify(user));
					//console.log(JSON.parse(sessionStorage.getItem("user")));
					window.location.hash = '#/admin';
				}
			}else{
				alert('Mời điền đầy đủ email và password');
			}
					
		})
		// @ search
		$('#form-search').addEventListener('submit', async(e) => {
			e.preventDefault();
			let keyword = $('#search-value').value.trim();
			if(keyword){
				window.location.hash = `#/search/${keyword}`;
			}else{
				alert('Bạn chưa nhập keyword')
			}
					
		})
		
	}
}

export default AcountPage;