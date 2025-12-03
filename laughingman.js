const SQUARE_COUNT = 15;
const SPEED = 10;
const TIMER_SPEED = 100;




document.addEventListener('DOMContentLoaded', function(){

    let squareElement = document.getElementById("square");

    squareElement.addEventListener("click", function(){
        alert("OMG YOU CAUGHT ME!");
        });

    squareElement.addEventListener('mouseover', function(){
        squareElement.style.backgroundColor = getRandomColor();
    }); //random color 4 the red box upon mouseover

    

    let box = document.querySelector("#box");

    for(let i = 0;i<SQUARE_COUNT;i++){
        let square = document.createElement('img');
        square.src = 'laughing_man.jpg';
        square.alt = 'Catch the Laughing Man!';
        square.className = 'square';

        square.addEventListener('mouseover',()=>{
            square.src='orochimaru_50x50.jpg';
            //changes to new pic
        });

        square.addEventListener('mouseout',() =>{
            square.src='laughing_man.jpg';
            //brings back OG laughing man pic

        });

        


        box.appendChild(square);

        


    }

    let allSquares = box.children;
    let squareArray = Array.from(allSquares)
    squareArray.forEach(function(element, index){

        var dx = SPEED * (Math.random()*2-1);
        var dy = SPEED * (Math.random()*2-1);

        setInterval(() => {
            let currentLeft = parseFloat(element.style.left) || 225;
            let currentTop =  parseFloat(element.style.top) || 175;

            if(currentLeft >= 450 || currentLeft <= 0){
                dx*=-1;
                element.style.borderColor = getRandomColor();

            }
            if(currentTop >=350 || currentTop <=0){
                dy*= -1;
                element.style.borderColor = getRandomColor();
            }
            
            element.style.left = (currentLeft+dx)+"px"
            element.style.top = (currentTop+dy)+"px"
     } , TIMER_SPEED);



    });

    

});

function getRandomColor() {
    let r = parseInt(Math.random() * 256);
    let g = parseInt(Math.random() * 256);
    let b = parseInt(Math.random() * 256);
    let color = `rgb(${r},${g},${b})`;
    return color;
}


