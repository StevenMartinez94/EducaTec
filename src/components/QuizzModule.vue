<template>
  <button class="start-quiz-btn">Comenzar evaluación</button>
  <div class="container">
    <div class="top-bar">
        <div class="question-counter">

        </div>
        <div class="timer">
            <span><i class="fa-regular fa-clock"></i></span>
            <span class="time-left">15</span>
        </div>
        <div class="time-line"></div>
    </div>
    <div class="ques-text">

    </div>
    <div class="option-div">

    </div>
    <button class="next-ques-btn click-disable">Siguiente pregunta</button>
  </div>
  <div class="result-div">
    <i class="fa-solid fa-crown"></i>
    <span>Has completado la evaluación</span>
    <div class="score">

    </div>
    <button class="replay-quiz-btn" onclick="location.reload()">Comenzar de nuevo</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Cookie&family=Poppins&family=Roboto:wght@300&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
    }
    
    body {
        background: #66C7D0;
        font-family:'poppins', sans-serif;
    }

    .start-quiz-btn {
        all:unset;
        padding: 15px;
        width: 150px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background: white;
        color: #66C7D0;
        text-align: center;
        cursor: pointer;
        font-size: 25px;
        white-space:nowrap;
        border-radius: 5px;
    }

    .container {
        height: 600px;
        width: 400px;
        background: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform:translate(-50%,-50%);
        border-radius: 10px;
        overflow: hidden;
        display: none;
    }

    .top-bar{
        height: 60px;
        width: 400px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        position: absolute;
        display: flex;
        align-items: center;
    }

    .question-counter {
        position: relative;
        left: 30px;
    }

    .timer {
        height: 35px;
        width: 80px;
        background: whitesmoke;
        border-radius: 3px;
        position: absolute;
        right: 20px;
    }

    .timer > span:nth-child(1){
        color: #696969;
        font-size: 23px;
        position: relative;
        top:1px;
        left:13px;
    }

    .timer > span:nth-child(2){
        color: black;
        position: relative;
        top:0px;
        left:10px;
        padding: 3px 10px 3px 10px;
        border-radius: 3px;
        font-size: 20px;
    }

    .ques-text{
        height: 100px;
        width: 350px;
        color: #7B8295;
        position: relative;
        top: 120px;
        left: 50%;
        transform:translate(-50%,-50%);
        display: flex;
        align-content: center;
        font-weight: 600;
    }

    .ques-text > span{
        font-size:20px;
        color:black;
        margin-top:5px;
    }

    .option-div {
        height: 350px;
        width: 100%;
        position: relative;
        top:85px;
    }

    .option-div > .option{
        position: relative;
        top: 5px;
        left:50%;
        transform:translate(-50%,-50%);
        height: 65px;
        width: 350px;
        border: 1px solid grey;
        border-radius: 10px;
        margin-top: 23px;
        cursor: pointer;
        color: grey;
        display: flex;
        align-items: center;
    }

    .option:hover{
        background: whitesmoke;
        color: #696969;
        border: 1.2px solid #696969;
    }

    .option > span{
        margin-left: 15px;
    }

    .option > .icon{
        height: 35px;
        width: 35px;
        color: whitee;
        position: absolute;
        top: 50%;
        transform:translate(-50%,-50%);
        right: -5px;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .correct-icon {
        background: #6FBD67;
    }

    .wrong-icon{
        background: #D73739;
    }

    .option.correct{
        background-color: #e7f6d5;
        color: #689f38;
        border-color:#689f38;
    }

    .option.incorrect{
        background-color: #ffdde0;
        color:#d32f2f;
        border-color: #d32f2f;
    }

    .option.disabled{
        pointer-events: none;
    }

    .next-ques-btn{
        all:unset;
        padding: 10px;
        width: 330px;
        color:white;
        text-align: center;
        background: #66C7D0;
        border-radius: 5px;
    }

</style>