<template>
  <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'><link rel="stylesheet" href="./style.css">
</head>
<body>
<!-- partial:index.partial.html -->
<div class="dashboard">
	<main class="content-wrap">
        <span id='title'>
            <p>DASHBOARD DE USUARIO</p>
            <hr>
        </span>
		<div class="content">
			<section class="info-boxes">
				<div class="info-box">
					<div class="box-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 20V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1zm-2-1H5V5h14v14z"/><path d="M10.381 12.309l3.172 1.586a1 1 0 0 0 1.305-.38l3-5-1.715-1.029-2.523 4.206-3.172-1.586a1.002 1.002 0 0 0-1.305.38l-3 5 1.715 1.029 2.523-4.206z"/></svg>
					</div>
					
					<div class="box-content">
						<span class="big">¡No pares de<br>aprender!</span>
						Haz click debajo para<br>acceder a la lista de cursos
					</div>
				</div>
				
                <div class="info-box">
					<div class="box-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 3C6.486 3 2 6.364 2 10.5c0 2.742 1.982 5.354 5 6.678V21a.999.999 0 0 0 1.707.707l3.714-3.714C17.74 17.827 22 14.529 22 10.5 22 6.364 17.514 3 12 3zm0 13a.996.996 0 0 0-.707.293L9 18.586V16.5a1 1 0 0 0-.663-.941C5.743 14.629 4 12.596 4 10.5 4 7.468 7.589 5 12 5s8 2.468 8 5.5-3.589 5.5-8 5.5z"/></svg>
					</div>
					
					<div class="box-content">
						<span class="big">¿Tienes alguna duda?</span>
						Contáctanos debajo mediante estas redes
					</div>
				</div>

				<div class="info-box active">
					<div class="box-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3,21c0,0.553,0.448,1,1,1h16c0.553,0,1-0.447,1-1v-1c0-3.714-2.261-6.907-5.478-8.281C16.729,10.709,17.5,9.193,17.5,7.5 C17.5,4.468,15.032,2,12,2C8.967,2,6.5,4.468,6.5,7.5c0,1.693,0.771,3.209,1.978,4.219C5.261,13.093,3,16.287,3,20V21z M8.5,7.5 C8.5,5.57,10.07,4,12,4s3.5,1.57,3.5,3.5S13.93,11,12,11S8.5,9.43,8.5,7.5z M12,13c3.859,0,7,3.141,7,7H5C5,16.141,8.14,13,12,13z"/></svg>
					</div>
					
					<div class="box-content">
						<span class="big">Cerrar sesión</span>
						E ir a la página de inicio
					</div>
				</div>
				
				
			</section>
		
			<section class="person-boxes">
				<div class="person-box">
					<a href="/course-list">
                        <img src="../../public/documentation-icon.png" alt="">
                        <h4>Lista de cursos</h4>
                    </a>
				</div>

				<div class="social-box">
					<a href="">
                        <img id="facebook" src="../../public/facebook-circle.png">
                    </a>
                    <a href="">
                        <img id="instagram" src="../../public/ig-circle.png">
                    </a>
                    <a href="">
                        <img id="twitter" src="../../public/twitter-circle.png">
                    </a>
                    <a href="">
                        <img id="email" src="../../public/email-icon.png">
                    </a>
				</div>
				
				<div class="person-box">
					<a href="/">
            <img id="logout" src="../../public/logout-circle.png">
            <h4>Salir del dashboard</h4>
          </a>
				</div>
			</section>
		</div>
	</main>
</div>  
</body>
</template>

<script>
export default {

}
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  color: #99a0b0;
  width: 100%;
  height: 100%;
  background: #f5f5fa;
  font-size: 16px;
  line-height: 120%;
  font-family: Open Sans, Helvetica, sans-serif;
}
.dashboard {
    margin-top: -70px;
  display: grid;
  width: 100%;
  height: 100%;
  grid-gap: 0;
  grid-template-columns: 300px auto;
  grid-template-rows: 40px auto;
  grid-template-areas: 'menu search' 'menu content';
}
.search-wrap {
  grid-area: search;
  background: #fff;
  border-bottom: 1px solid #ede8f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3em;
}
.search-wrap .search {
  height: 40px;
}
.search-wrap .search label {
  display: flex;
  align-items: center;
  height: 100%;
}
.search-wrap .search label svg {
  display: block;
}
.search-wrap .search label svg path,
.search-wrap .search label svg circle {
  fill: #b6bbc6;
  transition: fill 0.15s ease;
}
.search-wrap .search label input {
  display: block;
  padding-left: 1em;
  height: 100%;
  margin: 0;
  border: 0;
}
.search-wrap .search label input:focus {
  background: #f5f5fa;
}
.search-wrap .search label:hover svg path,
.search-wrap .search label:hover svg circle {
  fill: #2b3a60;
}
.search-wrap .user-actions button {
  border: 0;
  background: none;
  width: 32px;
  height: 32px;
  margin: 0;
  padding: 0;
  margin-left: 0.5em;
}
.search-wrap .user-actions button svg {
  position: relative;
  top: 2px;
}
.search-wrap .user-actions button svg path,
.search-wrap .user-actions button svg circle {
  fill: #b6bbc6;
  transition: fill 0.15s ease;
}
.search-wrap .user-actions button:hover svg path,
.search-wrap .user-actions button:hover svg circle {
  fill: #2b3a60;
}
.menu-wrap {
  grid-area: menu;
  padding-bottom: 3em;
  overflow: auto;
  background: #fff;
  border-right: 1px solid #ede8f0;
}
.menu-wrap .user {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  padding: 0 3em;
}
.menu-wrap .user .user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
}
.menu-wrap .user .user-avatar img {
  display: block;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}
.menu-wrap .user figcaption {
  margin: 0;
  padding: 0 0 0 1em;
  color: #1b253d;
  font-weight: 700;
  font-size: 0.875em;
  line-height: 100%;
}
.menu-wrap nav {
  display: block;
  padding: 0 3em;
}
.menu-wrap nav section {
  display: block;
  padding: 3em 0 0;
}
.menu-wrap nav h3 {
  margin: 0;
  font-size: 0.875em;
  text-transform: uppercase;
  color: #4b84fe;
  font-weight: 600;
}
.menu-wrap nav ul {
  display: block;
  padding: 0;
  margin: 0;
}
.menu-wrap nav li {
  display: block;
  padding: 0;
  margin: 1em 0 0;
}
.menu-wrap nav li a {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #99a0b0;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.875em;
  transition: color 0.15s ease;
}
.menu-wrap nav li a svg {
  display: block;
  margin-right: 1em;
}
.menu-wrap nav li a svg path,
.menu-wrap nav li a svg circle {
  fill: #b6bbc6;
  transition: fill 0.15s ease;
}
.menu-wrap nav li a:hover {
  color: #1b253d;
}
.menu-wrap nav li a:hover svg path,
.menu-wrap nav li a:hover svg circle {
  fill: #2b3a60;
}
.menu-wrap nav li a.active {
  color: #4b84fe;
}
.menu-wrap nav li a.active svg path,
.menu-wrap nav li a.active svg circle {
  fill: #fe4b4b;
}
.content-wrap {
  grid-area: content;
  padding: 3em;
  overflow: auto;
  width: 1300px;
}
.content-wrap .content-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.content-wrap .content-head h1 {
  font-size: 1.375em;
  line-height: 100%;
  color: #1b253d;
  font-weight: 500;
  margin: 0;
  padding: 0;
}
.content-wrap .content-head .action button {
  border: 0;
  background: #4b84fe;
  color: #fff;
  width: auto;
  height: 3.5em;
  padding: 0 2.25em;
  border-radius: 3.5em;
  font-size: 1em;
  text-transform: uppercase;
  font-weight: 600;
  transition: background-color 0.15s ease;
}
.content-wrap .content-head .action button:hover {
  background-color: #e91b18;
}
.content-wrap .content-head .action button:hover:active {
  background-color: #da1212;
  transition: none;
}
.content-wrap .info-boxes {
  padding: 3em 0 2em;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 2em;
}
.content-wrap .info-boxes .info-box {
  background: #fff;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 3em;
  border: 1px solid #ede8f0;
  border-radius: 5px;
}
.content-wrap .info-boxes .info-box .box-icon svg {
  display: block;
  width: 48px;
  height: 48px;
}
.content-wrap .info-boxes .info-box .box-icon svg path,
.content-wrap .info-boxes .info-box .box-icon svg circle {
  fill: #99a0b0;
}
.content-wrap .info-boxes .info-box .box-content {
  padding-left: 1.25em;
}
.content-wrap .info-boxes .info-box .box-content .big {
  display: block;
  font-size: 1.5em;
  line-height: 150%;
  color: #1b253d;
}
.content-wrap .info-boxes .info-box.active svg circle,
.content-wrap .info-boxes .info-box.active svg path {
  fill: #4b84fe;
}
.content-wrap .person-boxes {
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 2em;
}

.person-boxes .person-box a img {
    width: 230px;
    margin-top: -20px;
}

.content-wrap .person-boxes {
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 2em;
}

.content-wrap .person-boxes .social-box {
  background: #fff;
  height: 320px;
  text-align: center;
  border: 1px solid #ede8f0;
  border-radius: 5px;
}

.person-boxes .social-box a #logout {
    width: 140px;
    margin: 4px;
}

.person-boxes .social-box a #facebook {
    width: 140px;
    margin: 4px;
}
.person-boxes .social-box a #instagram {
    width: 180px;
    margin: 4px;
}
.person-boxes .social-box a #twitter {
    width: 130px;
    margin-left: -15px;
}
.person-boxes .social-box a #email {
    width: 130px;
    margin-top: 4px;
    margin-left: 40px;
}


.content-wrap .person-boxes .person-box {
  background: #fff;
  height: 320px;
  text-align: center;
  padding: 3em;
  border: 1px solid #ede8f0;
  border-radius: 5px;
}
.content-wrap .person-boxes .person-box:nth-child(2n) .box-avatar .no-name {
  background: #4b84fe;
}
.content-wrap .person-boxes .person-box:nth-child(5n) .box-avatar .no-name {
  background: #ffbb09;
}
.content-wrap .person-boxes .person-box .box-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0px auto;
  overflow: hidden;
}
.content-wrap .person-boxes .person-box .box-avatar img {
  display: block;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}
.content-wrap .person-boxes .person-box .box-avatar .no-name {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  font-size: 1.5em;
  font-weight: 600;
  text-transform: uppercase;
  width: 100%;
  height: 100%;
  background: #fa5b67;
}
.content-wrap .person-boxes .person-box .box-bio {
  white-space: no-wrap;
}
.content-wrap .person-boxes .person-box .box-bio .bio-name {
  margin: 2em 0 0.75em;
  color: #1b253d;
  font-size: 1em;
  font-weight: 700;
  line-height: 100%;
}
.content-wrap .person-boxes .person-box .box-bio .bio-position {
  margin: 0;
  font-size: 0.875em;
  line-height: 100%;
}
.content-wrap .person-boxes .person-box .box-actions {
  margin-top: 1.25em;
  padding-top: 1.25em;
  width: 100%;
  border-top: 1px solid #ede8f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.content-wrap .person-boxes .person-box .box-actions button {
  border: 0;
  background: none;
  width: 32px;
  height: 32px;
  margin: 0;
  padding: 0;
}
.content-wrap .person-boxes .person-box .box-actions button svg {
  position: relative;
  top: 2px;
}
.content-wrap .person-boxes .person-box .box-actions button svg path,
.content-wrap .person-boxes .person-box .box-actions button svg circle {
  fill: #b6bbc6;
  transition: fill 0.15s ease;
}
.content-wrap .person-boxes .person-box .box-actions button:hover svg path,
.content-wrap .person-boxes .person-box .box-actions button:hover svg circle {
  fill: #2b3a60;
}

.dashboard span p {
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding-top: 20px;
    padding-left: 40px;
    font-size: 60px;
    padding-bottom: 10px;
}
</style>