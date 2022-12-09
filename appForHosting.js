// If we wont to host a simple html website on server this is the way or can read tut63 

// console.log("Hello World");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3008;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="description" content="Eminent Battery House">
    <meta name="keywords" content="Eminent, Battery">
      <title>Eminent Battery House</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <style>
      * {
      margin: 0;
      padding: 0;
  }
  
  /*CSS Variables*/
  :root {
      --navbar-height: 59px;
  }
  
  html {
      scroll-behavior: smooth
  }
  
  /* Navigation Bar  */
  .navbar {
      display: flex;
      align-items: center;
      font-family: 'Raleway', sans-serif;
      position: sticky;
      top: 0px;
      height: 85px;
  }
  
  .navbar::before {
      content: "";
      background-color: #92122a;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: -1;
      opacity: 1;
  }
  
  /* Navigation Bar: Logo & Images  */
  #logo {
      margin: 3px 3px;
      filter: invert(1);
  }
  
  #logo img {
      margin: 8px 8px;
      width: 70px;
      height: 70px;
      align-content: center;
  }
  
  /* Navigation Bar: List & Styling*/
  .navbar ul {
      display: flex;
      align-items: center;
  }
  
  .navbar ul li {
      list-style: none;
      font-size: 1.33rem;
      margin: 10px;
      border: 2px solid white;
      background-color: white;
      border-radius: 30px;
  }
  
  .navbar ul a {
      display: block;
      color: #92122a;
      text-decoration: none;
      padding: 6px 12px;
  }
  #logo a:hover{
      transition-duration: 0.01s;
      transform: scale(1.1);
      
  }
  .navbar li a:hover {
      font-weight: bold;
  }
  .burger{
      position: absolute;
      cursor: pointer;
      right: 5%;
      top: 15px;
      display: none;
  }
  .line{
      width: 25px;
      background-color: white;
      height: 4px;
      margin: 5px 3px;
  }
  #about-section{
      background-color: #0a4668;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 350px;
      padding-left: 40px;
      padding-right: 40px;
      padding-top: 20px;
  }
  .heading{
      text-align: center;
      font-size: 60px;
      text-decoration: underline;
  }
  #about{
      margin: 30px;
      max-width: 70%;
      /* overflow-y: scroll; */
  }
  .para{
      font-size: 25px;
  }
  #product{
      display: flex;
      flex-direction: column;
      padding: 25px;
      color: white;
      background-color: #172714;
  }
  #image-group{
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      margin: 25px;
  }
  #video-group{
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      margin: 25px;
  }
  #product img {
      width: 250px;
      height: 250px;
  }
  #product iframe{
      width: 250px;
      height: 250px;
  }
  #services{
      display: flex;
      flex-direction: column;
      height: 350px;
      background-color: #aeaeae;
  }
  .service-group{
      display: flex;
  }
  .service-box{
      width: 50%;
      text-align: center;
      height: 270px;
      display: flex;
      flex-direction: column;
      justify-content: center;
  }
  .border-right{
      border-right: 2px solid black;
  }
  .border-right1{
      border-right: 2px solid black;
  }
  .box{
      display: flex;
      justify-content: space-evenly;
      margin-top: 20px;
  }
  .box1{
      background-color: black;
      color: white;
      width: 225px;
      padding: 20px;
  }
  .service-box h2{
      font-size: 50px;
  }
  #contact{
      height: 250px;
  }
  .contact-box{
      display: flex;
      height: 170px;
  }
  .contact-box1{
      padding-left: 30px;
      text-align: left;
      width: 50%;
      padding-top: 20px;
  }
  .contact-box1 p{
      font-size: 25px;
  }
  .contact-box1 p a{
      text-decoration: none;
      color: cadetblue;
  }
  .contact-box1 h3{
      font-size: 40px;
  }
  footer{
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px;
      color: white;
      background-color: #92122a;
  }
  .text-footer{
      font-size: 15px;
  }
  footer a{
      text-decoration: none;
      color:white;
  }
  footer a:hover{
      font-weight: bold;
  }
  footer a:visited{
      text-decoration: none;
      color:white;
  }
  @media (min-width:877px) and (max-width:1240px){
      #about{
          max-width: 90%;
      }
      #about-section{
          height: 400px;
      }
  }
  @media (max-width:877px){
      #about{
          max-width: 95%;
      }
      .heading{
          font-size: 40px;
      }
      .para{
          font-size: 18px;
      }
      #product img {
          width: 200px;
          height: 200px;
      }
      #product iframe{
          width: 200px;
          height: 200px;
      }
      .service-box h2{
          font-size: 30px;
      }
      .service-box {
          font-size: 30px;
      }
      .box1 p{
          font-size: 15px;
      }
      .contact-box1 h3{
          font-size: 30px;
      }
      .contact-box1 p{
          font-size: 18px;
      }
  }
  @media (max-width:713px){
      #product{
          justify-content: center;
          align-items: center;
      }
      #video-group{
          flex-direction: column;
      }
      #image-group{
          flex-direction: column;
      }
      #product img {
          margin-top: 20px;
          width: 350px;
          height: 300px;
      }
      #product iframe{
          margin-top: 20px;
          width: 350px;
          height: 300px;
      }
  }
  @media (max-width:630px){
      .navbar ul li{
          font-size: 12px;
          margin: 7px ;
      }  
      .navbar ul a{
          padding: 4px 8px;
      }  
  }
  @media (max-width:535px){
      .box1{
          margin: 5px;
      }
      .service-group{
          flex-direction: column;
          align-items: center;
      } 
      .service-box{
          width: 90%;
      }
      #services{
          height: 600px;
      } 
      .border-right{
          border: 0px ;
      }
      #about-section{
          padding-left: 0px;
          padding-right: 0px;
      }
      #about{
          margin: 15px;
      }
      #contact{
          height: 400px;
      }
      .contact-box{
          height: 300px;
      }
      .navbar{
          flex-direction: column;
          transition: all 0.4s ease-out;
          height: 275px;
      }
      .nav-list{
          flex-direction: column;
      }
      .burger{
          display: block;
      }
      .h-nav-resp{
          height: 70px;
      }
      .v-nav-resp{
          opacity: 0;
      } 
      
  }
  @media (max-width:406px){
      .heading{
          font-size: 30px;
      }
      #about{
          margin: 5px;
      }
      #about-section{
          height: 425px;
      }
      #product img {
          width: 290px;
          height: 250px;
      }
      #product iframe{
          width: 290px;
          height: 250px;
      }
      .box1{
          margin: 2px;
      }
  }
  @media (max-width:329px){
      #services{
          height: 650px;
      }
      .service-box{
          width: 98%;
      }
      .contact-box1 h3{
          font-size: 25px;
      }
      .contact-box1 p{
          font-size: 13px;
      }
      footer{
          height: 25px;
      }
      #about{
        margin: 2px;
    }
      #about-section{
        height:550px;
      }
      
  }
      </style>
  </head>
  
  <body>
      <nav id="navbar" class="navbar h-nav-resp">
          <ul class="nav-list v-nav-resp">
              <div id="logo">
                  <a href="http://127.0.0.1:3008"><img src="https://i.ibb.co/Wt0V478/Logo1.png" alt="EminentBattery.com"></a>
              </div>
              <li class="item"><a href="#about-section">About</a></li>
              <li class="item"><a href="#product">Product</a></li>
              <li class="item"><a href="#services">Services</a></li>
              <li class="item"><a href="#contact">Contact Us</a></li>
          </ul>
          <div class="burger">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
          </div>
      </nav>
      <section id="about-section">
          <h1 class="heading">About</h1>
          <div id="about" class="para">
              <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta cumque, similique voluptatum assumenda
                  ducimus quibusdam impedit repellendus quidem iusto, est obcaecati facilis nisi, maiores exercitationem.
                  Voluptas autem ea labore quibusdam pariatur repellendus, asperiores rem sapiente sequi eveniet at,
                  cupiditate, impedit itaque odio quasi perspiciatis quaerat. Aspernatur ducimus explicabo qui repellendus
                  doloribus ab, dolorum quod fuga quis cupiditate fugit vel necessitatibus voluptate, itaque optio
                  temporibus, soluta beatae? Nihil ipsam ex officiis eveniet quia! Illum excepturi eaque tempora, quae
                  magni enim neque?</p>
          </div>
      </section>
      <section id="product">
          <h1 class="heading">Products</h1>
          <div id="image-group">
              <img src="https://source.unsplash.com/random/?Battery" alt="Lorem ipsum dolor" class="image">
  
              <img src="https://source.unsplash.com/random/?Wire" alt="Lorem ipsum dolor" class="image">
  
              <img src="https://source.unsplash.com/random/?Life" alt="Lorem ipsum dolor" class="image">
  
          </div>
          <div id="video-group">
              <iframe src="https://www.youtube.com/embed/9OVtk6G2TnQ" alt="Lorem ipsum dolor"
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
  
              <iframe src="https://www.youtube.com/embed/G5McJw4KkG8" alt="Lorem ipsum dolor"
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
  
              <iframe src="https://www.youtube.com/embed/PXNKkcB0pI4" alt="Lorem ipsum dolor"
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
          </div>
      </section>
      <section id="services">
          <h1 class="heading">Services</h1>
          <div class="service-group">
              <div class="service-box border-right">
                  <h2>&bull;EM Based</h2>
                  <div class="box">
                      <div class="box1">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo error similique quisquam iusto
                              quasi aut ipsa, adipisci ullam quaerat fugit.</p>
                      </div>
                      <div class="box1 ">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo error similique quisquam iusto
                              quasi aut ipsa, adipisci ullam quaerat fugit.</p>
                      </div>
                  </div>
              </div>
              <div class="service-box">
                  <h2>&bull;Indigeneous</h2>
                  <div class="box">
                      <div class="box1 ">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo error similique quisquam iusto
                              quasi aut ipsa, adipisci ullam quaerat fugit.</p>
                      </div>
                      <div class="box1 ">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo error similique quisquam iusto
                              quasi aut ipsa, adipisci ullam quaerat fugit.</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section id="contact">
          <h1 class="heading">
              Contact-Us
          </h1>
          <div class="contact-box">
              <div class="contact-box1 border-right1">
                  <h3>Contact-Details:</h3>
                  <p>
                      Phone-Number: <a href="tel:123-456-7890">123-456-7890</a>
                      <br>
                      Email: <a href="mailto: abc@example.com">abc@example.com</a>
                      <br>
                      Whatsapp: <a href="https://wa.me/9013151515 "><i class="fa fa-whatsapp"
                              style="font-size:48px;color:green"></i></a>
                  </p>
              </div>
              <div class="contact-box1">
  
                  <h3>Address:</h3>
                  <p>
                      Sector 9/61, Dabra Chowk, Hisar, Haryana - 125005
                  </p>
              </div>
          </div>
      </section>
      <footer>
          <p class="text-footer">Copyright &copy; <a href="http://127.0.0.1:3008/">www.EminentBatteries.com</a> 2022 - All rights reserved</p>
      </footer>
      <script>
      
     
  burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list')

burger.addEventListener('click',()=>{
    navList.classList.toggle('v-nav-resp');
    navbar.classList.toggle('h-nav-resp');
    // navbar.classList.toggle('background'); //I have added it so when I click burger button, it will remove background class from navbar as it was getting messy...
})
</script>
</body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 

//We got this template from nodejs.org, then in res end we pasted html file.. And in res.setHeader we replaced 'text/plain' with 'text/html'