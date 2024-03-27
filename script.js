function setup(){
    createCanvas(800,600);
    background(0);
   }
   function draw(){
       //the sun
       fill("yellow");
       circle(400, 300, 100);
       fill("orange");
       circle(400, 300, 80);
       fill("red");
       circle(400, 300, 40);

       //mercury
       noFill();
       stroke(255);
       arc(400, 300, 400, 200, 0, PI+PI);

       fill("red");
       circle(400, 400, 40);

       //venus
       noFill();
       stroke(255);
       arc(400, 300, 500, 300, 0, PI+PI);

       fill("orange");
       circle(650, 300, 70);

       //earth
       noFill();
       stroke(255);
       arc(400, 300, 700, 500, 0, PI+PI);

       fill("blue");
       circle(400, 550, 100);

       fill("green");
       ellipse(400, 550, 70, 50);

      
   }
   