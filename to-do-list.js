/* configurações gerais -----------*/
@import url('https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Yonone Kaffesats', sans-serif;
}
body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    background-color: #6cbaaa;
}

.container {
max-width: 700px;
height: auto;
background-color: #3e8c84;
border-radius: 20px;
border: 10px solid #0000;
margin: 30px 20px;
position: relative;
}

.container h1 {
text-align: center;
margin-top: 40px;
font-size: 3rem;
}

.container .linha {
margin: 30px 0;
border-bottom: 3px dashed black;
width: 100%;
}

/* argolas -------------------------*/
.container .imgs img{
    display: flex;
    width: 60px;
    position: absolute;
    left: 60px;
    top: -35px;
}

.container imgs img2{
    left:130px;
}
.container imgs img3{
    left:200px;
}
.container imgs img4{
    left:270px;
}
.container imgs img5{
    left:340px;
}
.container imgs img6{
    left:410px;
}
.container imgs img7{
    left:480px;
}
.container imgs img8{
    left:550px;
}

.container .to-dentro{
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 20px;

}
.to-dentro .img img{
    width: 100%;
    
}

.to-dentro .ul .li{
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
    text-decoration: none;
}

.to-dentro .ul .li ,linha-li{
    display: flex;
    align-items: center;
    background-color: #ddf9ec;
    width: 95%;
    font-size: 1.5rem ;
    height: auto;
    border-radius: 8px;
    padding: 10px;
    cursor: pointer;
    transition: 0.5s;
} 

.to-dentro .ul .li .linha .li:hover{
    transform: scale(1.03);
    background-color: #fff;
}

.to-dentro .ul .li .i{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding-left: 10px;
    font-size: 2rem;
    color: #ddf9ac;
    transition: 1s;

}
/* animação da lixeira ----------------------------------------*/

@keyframes lixeira {
    0%{transform:rotatez(0deg)};
    20%{transform:rotatez(-20deg)};
    40%{transform:rotatez(20deg)};
    60%{transform:rotatez(-20deg)};
    80%{transform:rotatez(20deg)};
    100%{transform:rotatez(-20deg)};
}
.to-dentro .ul .li .i:hover{
    color:#fff;
    animation: lixeira .3s linear;
}

.to-dentro .input .digitar{
    color: black;
    width: 100%;
    height: 100px;
    border-radius: 10px;
    border: none;
    background-color: #f7e8b4;
    font-size: 1.5rem;
    outline: none;
    padding: 20px;
    margin-bottom: 20px;
}

.to-dentro .input input::placeholder{
    color:#9b9999;

}


/* responsividade ----------------------------*/
@media(max-width:650px){
    .container .imgs .img1{
        left: 0;
    }
    .container .imgs .img2{
        left: 50px;
    } .container .imgs .img3{
        left: 100px;
    }
    .container .imgs .img4{
        left: 150px;
    }
    .container .imgs .img5{
        left: 200px;
    }
    .container .imgs .img6{
        left: 250px;
    }
    .container .imgs .img7{
        left: 300px
    }
    .container .imgs .img8{
        left: 350px;
    }
}