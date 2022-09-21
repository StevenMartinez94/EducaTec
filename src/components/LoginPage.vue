<template>
  <header>
    <div class="container">
        <img src="../../public/educatec-branding.png">
        <h1>EducaTec</h1>
        <input type="checkbox" id="menu-bar">
        <label class="icon-menu" for="menu-bar"></label>
        <nav class='menu'>
            <a href="./">Inicio</a>
            <a href="./login">Cursos</a>
            <a href="./about">Acerca de nosotros</a>
            <a href="./contact">Contáctanos</a>
        </nav>
    </div>
  </header>

  <main>
    <div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<form class="login100-form validate-form">
					<span class="login100-form-title p-b-26">
						Bienvenido/a
					</span>
					<span class="login100-form-title p-b-48">
						<i class="zmdi zmdi-font"></i>
					</span>

					<div class="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
						<input class="input100" type="text" name="email">
						<span class="focus-input100" data-placeholder="Email"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Enter password">
						<span class="btn-show-pass">
							<i class="zmdi zmdi-eye"></i>
						</span>
						<input class="input100" type="password" name="pass">
						<span class="focus-input100" data-placeholder="Password"></span>
					</div>

					<div class="container-login100-form-btn">
						<div class="wrap-login100-form-btn">
							<div class="login100-form-bgbtn"></div>
							<button class="login100-form-btn">
								Login
							</button>
						</div>
					</div>

					<div class="text-center p-t-115">
						<span class="txt1">
							¿No tienes una cuenta?
						</span>

						<a class="txt2" href="#">
							Regístrate
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
  </main>

  <footer>
    <div class='container'>
        <p class='copyright'>EducaTec &copy; 2022</p>
    </div>
  </footer>
</template>

<script>
export default {
 
}
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Courier New', Courier, monospace;
    }

    header {
        width: 100%;
        height: 50px;
        background: #333;
        color: #fff;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100%;
    }

    .container {
        width: 98%;
        margin: auto;
    }

    h1 {
        float: left;
        padding-top: 7px;
    }

    header .container {
        display: table;
    }

    header img { 
        float: left;
        padding-top: 8px;
        padding-right: 3px;
    }

    #menu-bar {
        display: none;
    }
    
    header label {
        float: right;
        font-size: 28px;
        margin: 6px, 0;
        cursor: pointer;
    }

    .menu {
        position: absolute;
        top: 50px;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgba(51, 51, 51, 0.9);
        transition: all 0.5s;
        transform: translateX(-100%);
    }

    .menu a {
        display: block;
        color: #fff;
        height: 50px;
        text-decoration: none;
        padding: 15px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    }

    .menu a:hover {
        background: rgba(255, 255, 255, 0.3);
    }

    #menu-bar:checked ~ .menu {
        transform: translateX(0%);
    }

    

    @media (min-width: 1024px) {
        .menu {
            position: static;
            width: auto;
            height: auto;
            transform: translateX(0%);
            float: right;
            display: flex;
        }

        .menu a {
            border: none;
        }

        header label {
            display: none;
        }
    }

    section {
        width: 100%;
        margin-bottom: 25px;
    }

    @media (min-width: 480px) {
        .info-person {
            width: 40%;
        }
    }

    @media (min-width: 1024px) {
        .info-person {
            width: auto;
        }
    }

    footer .container {
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        padding-bottom: 25px;
    }

    .copyright {
        font-size: 20px;
        margin: auto;
    }

    .social-media {
        width: 100%;
        text-align: center;
        font-size: 28px;
    }

    .social-media img {
        color: #333;
        text-decoration: none;
        padding: 5px;
    }

    @media (min-width: 768px) {
        .social-media {
            width: auto;
        }

        footer .container {
            justify-content: space-between;
        }
    }

    @media (min-width: 1024px) {
        .container {
            width: 1000px;
        }
    }
        
    /*//////////////////////////////////////////////////////////////////
    [ RESTYLE TAG ]*/
    
    
    textarea {
      outline: none;
      border: none;
    }
    
    textarea:focus, input:focus {
      border-color: transparent !important;
    }
    
    input:focus::-webkit-input-placeholder { color:transparent; }
    input:focus:-moz-placeholder { color:transparent; }
    input:focus::-moz-placeholder { color:transparent; }
    input:focus:-ms-input-placeholder { color:transparent; }
    
    textarea:focus::-webkit-input-placeholder { color:transparent; }
    textarea:focus:-moz-placeholder { color:transparent; }
    textarea:focus::-moz-placeholder { color:transparent; }
    textarea:focus:-ms-input-placeholder { color:transparent; }
    
    input::-webkit-input-placeholder { color: #adadad;}
    input:-moz-placeholder { color: #adadad;}
    input::-moz-placeholder { color: #adadad;}
    input:-ms-input-placeholder { color: #adadad;}
    
    textarea::-webkit-input-placeholder { color: #adadad;}
    textarea:-moz-placeholder { color: #adadad;}
    textarea::-moz-placeholder { color: #adadad;}
    textarea:-ms-input-placeholder { color: #adadad;}
    
    
    /*//////////////////////////////////////////////////////////////////
    [ Utility ]*/
    .txt1 {
      font-family: Poppins-Regular;
      font-size: 13px;
      color: #666666;
      line-height: 1.5;
    }
    
    .txt2 {
      font-family: Poppins-Regular;
      font-size: 13px;
      color: #333333;
      line-height: 1.5;
    }
    
    /*//////////////////////////////////////////////////////////////////
    [ login ]*/
    
    .limiter {
      width: 100%;
      margin: 0 auto;
    }
    
    .container-login100 {
      width: 100%;  
      min-height: 100vh;
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-box;
      display: -ms-flexbox;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      padding: 15px;
      background: #f2f2f2;  
    }
    
    .wrap-login100 {
      width: 390px;
      background: #fff;
      border-radius: 10px;
      overflow: hidden;
      padding: 77px 55px 33px 55px;
    
      box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
      -moz-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
      -webkit-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
      -o-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
      -ms-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
    }
    
    
    /*------------------------------------------------------------------
    [ Form ]*/
    
    .login100-form {
      width: 100%;
    }
    
    .login100-form-title {
      display: block;
      font-family: Poppins-Bold;
      font-size: 30px;
      color: #333333;
      line-height: 1.2;
      text-align: center;
    }
    .login100-form-title i {
      font-size: 60px;
    }
    
    /*------------------------------------------------------------------
    [ Input ]*/
    
    .wrap-input100 {
      width: 100%;
      position: relative;
      border-bottom: 2px solid #adadad;
      margin-bottom: 37px;
    }
    
    .input100 {
      font-family: Poppins-Regular;
      font-size: 15px;
      color: #555555;
      line-height: 1.2;
    
      display: block;
      width: 100%;
      height: 45px;
      background: transparent;
      padding: 0 5px;
    }
    
    /*---------------------------------------------*/ 
    .focus-input100 {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
    }
    
    .focus-input100::before {
      content: "";
      display: block;
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
    
      -webkit-transition: all 0.4s;
      -o-transition: all 0.4s;
      -moz-transition: all 0.4s;
      transition: all 0.4s;
    
      background: #6a7dfe;
      background: -webkit-linear-gradient(left, #21d4fd, #b721ff);
      background: -o-linear-gradient(left, #21d4fd, #b721ff);
      background: -moz-linear-gradient(left, #21d4fd, #b721ff);
      background: linear-gradient(left, #21d4fd, #b721ff);
    }
    
    .focus-input100::after {
      font-family: Poppins-Regular;
      font-size: 15px;
      color: #999999;
      line-height: 1.2;
    
      content: attr(data-placeholder);
      display: block;
      width: 100%;
      position: absolute;
      top: 16px;
      left: 0px;
      padding-left: 5px;
    
      -webkit-transition: all 0.4s;
      -o-transition: all 0.4s;
      -moz-transition: all 0.4s;
      transition: all 0.4s;
    }
    
    .input100:focus + .focus-input100::after {
      top: -15px;
    }
    
    .input100:focus + .focus-input100::before {
      width: 100%;
    }
    
    .has-val.input100 + .focus-input100::after {
      top: -15px;
    }
    
    .has-val.input100 + .focus-input100::before {
      width: 100%;
    }
    
    /*---------------------------------------------*/
    .btn-show-pass {
      font-size: 15px;
      color: #999999;
    
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-box;
      display: -ms-flexbox;
      display: flex;
      align-items: center;
      position: absolute;
      height: 100%;
      top: 0;
      right: 0;
      padding-right: 5px;
      cursor: pointer;
      -webkit-transition: all 0.4s;
      -o-transition: all 0.4s;
      -moz-transition: all 0.4s;
      transition: all 0.4s;
    }
    
    .btn-show-pass:hover {
      color: #6a7dfe;
      color: -webkit-linear-gradient(left, #21d4fd, #b721ff);
      color: -o-linear-gradient(left, #21d4fd, #b721ff);
      color: -moz-linear-gradient(left, #21d4fd, #b721ff);
      color: linear-gradient(left, #21d4fd, #b721ff);
    }
    
    .btn-show-pass.active {
      color: #6a7dfe;
      color: -webkit-linear-gradient(left, #21d4fd, #b721ff);
      color: -o-linear-gradient(left, #21d4fd, #b721ff);
      color: -moz-linear-gradient(left, #21d4fd, #b721ff);
      color: linear-gradient(left, #21d4fd, #b721ff);
    }
    
    
    
    /*------------------------------------------------------------------
    [ Button ]*/
    .container-login100-form-btn {
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-box;
      display: -ms-flexbox;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding-top: 13px;
    }
    
    .wrap-login100-form-btn {
      width: 100%;
      display: block;
      position: relative;
      z-index: 1;
      border-radius: 25px;
      overflow: hidden;
      margin: 0 auto;
    }
    
    .login100-form-bgbtn {
      position: absolute;
      z-index: -1;
      width: 300%;
      height: 100%;
      background: #a64bf4;
      background: -webkit-linear-gradient(right, #21d4fd, #b721ff, #21d4fd, #b721ff);
      background: -o-linear-gradient(right, #21d4fd, #b721ff, #21d4fd, #b721ff);
      background: -moz-linear-gradient(right, #21d4fd, #b721ff, #21d4fd, #b721ff);
      background: linear-gradient(right, #21d4fd, #b721ff, #21d4fd, #b721ff);
      top: 0;
      left: -100%;
    
      -webkit-transition: all 0.4s;
      -o-transition: all 0.4s;
      -moz-transition: all 0.4s;
      transition: all 0.4s;
    }
    
    .login100-form-btn {
      font-family: Poppins-Medium;
      font-size: 15px;
      color: #fff;
      line-height: 1.2;
      text-transform: uppercase;
    
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-box;
      display: -ms-flexbox;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 20px;
      width: 100%;
      height: 50px;
    }
    
    .wrap-login100-form-btn:hover .login100-form-bgbtn {
      left: 0;
    }
    
    
    /*------------------------------------------------------------------
    [ Responsive ]*/
    
    @media (max-width: 576px) {
      .wrap-login100 {
        padding: 77px 15px 33px 15px;
      }
    }
    
    
    
    /*------------------------------------------------------------------
    [ Alert validate ]*/
    
    .validate-input {
      position: relative;
    }
    
    .alert-validate::before {
      content: attr(data-validate);
      position: absolute;
      max-width: 70%;
      background-color: #fff;
      border: 1px solid #c80000;
      border-radius: 2px;
      padding: 4px 25px 4px 10px;
      top: 50%;
      -webkit-transform: translateY(-50%);
      -moz-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      -o-transform: translateY(-50%);
      transform: translateY(-50%);
      right: 0px;
      pointer-events: none;
    
      font-family: Poppins-Regular;
      color: #c80000;
      font-size: 13px;
      line-height: 1.4;
      text-align: left;
    
      visibility: hidden;
      opacity: 0;
    
      -webkit-transition: opacity 0.4s;
      -o-transition: opacity 0.4s;
      -moz-transition: opacity 0.4s;
      transition: opacity 0.4s;
    }
    
    .alert-validate::after {
      content: "\f06a";
      font-family: FontAwesome;
      font-size: 16px;
      color: #c80000;
    
      display: block;
      position: absolute;
      background-color: #fff;
      top: 50%;
      -webkit-transform: translateY(-50%);
      -moz-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      -o-transform: translateY(-50%);
      transform: translateY(-50%);
      right: 5px;
    }
    
    .alert-validate:hover:before {
      visibility: visible;
      opacity: 1;
    }
    
    @media (max-width: 992px) {
      .alert-validate::before {
        visibility: visible;
        opacity: 1;
      }
    }

</style>