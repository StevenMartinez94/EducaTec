<template>
  <header>
    <div class="container">
        <h1 class="icon">EducaTec</h1>
        <input type="checkbox" id="menu-bar">
        <label class="icon-menu" for="menu-bar"></label>
        <nav class='menu'>
            <a href="">Acerca de nosotros</a>
            <a href="">Cursos</a>
            <a href="">Contáctanos</a>
            <a href="">Últimas Noticias</a>
        </nav>
    </div>
  </header>

  <main>
    <section id='banner'>
        <img src="../../public/banner.png">
        <div class='container'>
            <h2>¡No le pongas límites a tu educación!</h2>
            <p>EducaTec te ofrece la mejor educación acerca de las más interesantes tecnologías</p>
            <a href="">Leer más</a>
        </div>
    </section>

    <section id='welcome'>
        <h2>¿Deseas prepararte para trabajar en el área de tecnología?</h2>
        <p>{Info acerca de los beneficios de la plataforma}</p>
    </section>

    <section id='presentation'>
        <h3>¿Qué ofrecemos?</h3>
        <div class='container'>
            <article>
                <img src="../../public/programming-img.jpg" alt="">
                <h4>Estudia Programación</h4>
            </article>
            <article>
                <img src="../../public/db-img.jpeg" alt="">
                <h4>Estudia Bases de Datos</h4>
            </article>
            <article>
                <img src="../../public/ciber-img.jpeg" alt="">
                <h4>Estudia Ciberseguridad</h4>
            </article>
        </div>
    </section>
    <section id='info'>
        <h3>En EducaTec creemos inherentemente en el potencial de la juventud para liderar la industria tecnológica de las próximas décadas.</h3>
        <div class='container'>
            <div class="info-course">
                <img src="../../public/teen1.png" alt="">
                <h4></h4>
            </div>
            <div class="info-course">
                <img src="../../public/teen2.png" alt="">
                <h4></h4>
            </div>
            <div class="info-course">
                <img src="../../public/teen3.png" alt="">
                <h4></h4>
            </div>
            <div class="info-course">
                <img src="../../public/teen4.png" alt="">
                <h4></h4>
            </div>
        </div>
    </section>
  </main>

  <footer>
    <div class='container'>
        <p class='copy'>EducaTec &copy; 2022</p>
        <div class='social-media'>
            <img src="../../public/fb-logo.png">
            <img src="../../public/ig-logo.png">
            <img src="../../public/twitter-logo.png">
        </div>
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
    }

    header .container {
        display: table;
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

    #welcome {
        text-align: center;
    }
    
    #banner {
        margin-top: 50px;
        position: relative;
    }

    #banner img {
        width: 100%;
        height: 100%;
    }

    #banner .container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(50%);
        color: #fff;
    }

    #banner h2 {
        font-size: 28px;
    }

    #banner a {
        display: block;
        width: 100px;
        color: #fff;
        text-decoration: none;
        padding: 7px;
        margin-top: 10px;
        border: 3px solid #fff;
    }

    #banner a:hover {
        background: rgba(51, 51, 51, 0.5);
    }

    @media (min-width: 480px) {
        #banner h2 {
            font-size: 40px;
        }

        #banner a {
            margin-top: 25px;
        }
    }

    @media (min-width: 768px) {
       #banner {
           height: 300px;
           overflow: hidden;
        }

        #banner img {
            height: auto;
            margin-top: -100px;
        }
    }

    @media (min-width: 1024px) {
        #banner img {
            margin-top: -200px;
        }
    }

    #presentation h3, h4 {
        text-align: center;
    }

    #presentation .container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    #presentation article {
        margin: 15px;
    }

    #presentation img {
        width: 100%;
        max-width: 280px;
    }

    #info {
        background: #333;
        color: #fff;
        text-align: center;
        padding: 20px;
    }

    #info .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .info-course {
        margin: 20px;
    }

    .info-course img {
        width: 180px;
        height: 180px;
        border-radius: 50%;
        border: 7px solid #fff;
    }

    @media (min-width: 480px) {
        .info-course {
            width: 40%;
        }
    }
    
    @media (min-width: 1024px) {
        .info-course {
            width: auto;
        }
    }

    footer .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding-bottom: 25px;
    }

    .copy {
        font-size: 20px;
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
</style>