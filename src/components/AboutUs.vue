<template>
  <header>
    <div class="container">
        <img src="../../public/educatec-branding.png">
        <h1>EducaTec</h1>
        <input type="checkbox" id="menu-bar">
        <label class="icon-menu" for="menu-bar"></label>
        <nav class='menu'>
            <a href="./">Inicio</a>
            <a href="">Cursos</a>
            <a href="./about">Acerca de nosotros</a>
            <a href="./contact">Contáctanos</a>
        </nav>
    </div>
  </header>

  <main>
    <section id='info'>
        <div>
            <h2>¿Qué es EducaTec?</h2>
            <p>
                EducaTec es un entorno digital en el que se imparten conocimientos que hacen posible el aprendizaje en diferentes medios informáticos.
            </p>
        </div>
        <hr>
        <div class='container'>
        <h2>¿Quieres saber acerca de nosotros?</h2>
            <article class="info-person">
                <a href="">
                    <img src="../../public/steven.jpg">
                </a>
                <h4>Albert Martínez <br> - Desarrollador Front-End -</h4>
                <p>Es un desarrollador Front-End que día a día transita por el camino de convertirse en desarrollador Full-Stack, dominando nuevas tecnologías un paso a la vez.</p>
            </article>
            <article class="info-person">
                <a href="">
                    <img src="../../public/enrique.jpg">
                </a>
                <h4>Enrique Rodríguez <br> - Desarrollador Back-End -</h4>
                <p>Es un entusiasta del Back-End y un perfeccionista sin descanso que entrega todo de sí para poder lograr el más alto rendimiento en su applicaciones web.</p>
            </article>
        </div>
    </section>
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

    #info p {
        margin-top: 15px;
        margin-bottom: 15px;
    }

    .info-person {
        margin: 20px;
    }

    .info-person img {
        width: 180px;
        height: 180px;
        border-radius: 50%;
        border: 7px solid #fff;
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

    hr {
        margin: 15px;
    }
</style>