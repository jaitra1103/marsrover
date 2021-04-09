canvas = document.getElementById('myCanvas');
 ctx = canvas.getContext("2d");
document.body.style.overflow = "hidden";
 rover_width = 100;
  rover_height = 80;
  background_image = "mars.jpg";
  rover_image = "rover.png";
   rover_x = 10; rover_y = 10;
   function add() {
        background_imgTag = new Image();
     //defining a variable with a new image
      background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
       background_imgTag.src = background_image; // load image
        rover_imgTag = new Image(); //defining a variable with a new image
         rover_imgTag.onload = uploadrover; // setting a function, onloading this variable
          rover_imgTag.src = rover_image; // load image
   } 
   function uploadBackground() { ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height); }
   function uploadrover() { ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height); }
   window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keypressed = e.keycode;
    console.log(keypressed);
      if(keypressed == '38')
    {
        up();
        console.iog("up");
        
    }
    if(keypressed == '40')
    {
        down();
        console.log("down");
    }    
    if(keypressed == '37')
    {
        left();
        console.log("left");
    }
    if(keypressed == '39')
    {
        right();
        console.log("right");} 
    } 