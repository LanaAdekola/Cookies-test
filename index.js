*{
    box-sizing: border-box;
}

html, body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto';
    color: #222;
}

/* typography */

h1{
    font-size: 48px;
    line-height: 60px;
    font-weight: 900;
}

h2{
    margin-top: 0;
}

h3{
    font-size: 20px;
    font-weight: 700; 
    line-height: 30px;
}

p{
    font-size: 18px;
    line-height: 28px;

}

ul{
    list-style: none;
    padding: 5px 0 0 0;
}

li{
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 12px;
    font-weight: 500;
    font-size: 22px;
}

.li-green{background-color:#E5FDEA}
.li-yellow{background-color:#FCFDD6}
.li-blue{background-color:#E5F9FE}
.li-pink{background-color:#FCF1FE}

/* layout */

img{
    width: 100%;
}

main{
    width: 400px;
    margin: 0 auto;
}

/* modal */
  
.modal {
    display: none;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 420px;
    width: 350px;
    border-radius: 5px;
    box-shadow: 0px 0px 6px 2px #666;
    background-color: #212529;
    color: whitesmoke;
}

.modal-inner{
    width: 290px;
    margin: 0 auto;
}

.modal-inner-loading{
    text-align: center;
}

/* modal buttons */

.close-modal-btn-container{
    text-align: right;
    margin: 9px;
}

.modal-close-btn {
  font-size: 22px;
  font-weight: bold;
  background-color: transparent;
  border: 1px solid transparent;
  color: whitesmoke;
}

.modal-close-btn:hover,
.modal-close-btn:active{
    color: red;
    cursor: pointer;
}

.modal-close-btn:disabled{
    color: whitesmoke;
    opacity: 0.2;
    cursor: not-allowed;
}

.modal-choice-btns{
    margin-top: 10px;
    padding: 8px 16px;
    display: flex;
    justify-content: center;
}

.modal-btn{
    padding: 10px 24px;
    cursor: pointer;
}

/* modal input */

input{
    margin-top: 10px; 
    border: 1px solid #212529;
    padding: 10px;
    width: 100%;
    border-radius: 3px;
}

/* modal after submit */

.loading{
    width: 100%; 
    margin-top: 10px;
}

.modal-display-name{
    color: fuchsia;
}

.modal-text{
    height: 140px;
    line-height: 23px;
    margin-bottom: 0;
}

.idiot-gif{
    width: 95%;
    margin: 0 auto;
}

.idiot-gif img{
    box-shadow: 1px 1px 3px #999;
    border-radius: 5px;
}
