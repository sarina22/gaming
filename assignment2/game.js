var interval=0;
var stop = false;
var dest_lap_no;
var current_lap_no=1;
var funds=100;
var chosenHorse;
function myRight(){
	 var  horses = document.getElementsByClassName('horse');
       for (var i = 0; i <4; i++){
    	 var positionRight = horses[i].offsetLeft;
        horses[i].style.left= positionRight + Math.ceil(Math.random()*3)+ 'px';
        horses[i].className='horse standRight runRight';
        	if (positionRight >= window.innerWidth*0.785) {
        clearInterval(interval);
        interval = setInterval(moveUp,10); 
      }  
    }
       if(stop==true && positionRight>= window.innerWidth*0.31){
        console.log(horses[i]);
      clearInterval(interval);
      for(var i = 0; i<4; i++){
        horses[i].className = 'horse standRight';   
      }    
       var bet_amount= document.getElementById('amount').value;
       var amount=Math.ceil(parseInt(bet_amount));
       if(document.getElementById('betHorse')==horses[0]){
       funds+=amount;
       alert("Winner");
}
else{
  funds+=amount;
  alert("Loser");
}

        
      }
  }




function moveUp(){
  var horseup = document.getElementsByClassName('horse');
  for(var i = 0; i<4; i++){
    var positionTop = horseup[i].offsetTop;
    horseup[i].style.top = positionTop - Math.ceil(Math.random()*3) + 'px';
    horseup[i].className = 'horse standUp runUp ';

  }
   if (positionTop <= window.innerHeight*0.14) {
        clearInterval(interval);   
        interval = setInterval(moveLeft,10); 
  }

}


function moveLeft(){
   var horseleft = document.getElementsByClassName('horse');
  for(var i = 0; i<4; i++){
    var positionLeft = horseleft[i].offsetLeft;
    horseleft[i].style.left = positionLeft - Math.ceil(Math.random()*4) + 'px';
    horseleft[i].className = 'horse standLeft runLeft ';

  }
  if (positionLeft <= window.innerWidth*0.08) {
        clearInterval(interval);   
        interval = setInterval(moveDown,10); 
  }
}

function moveDown(){ 
   var horsedown = document.getElementsByClassName('horse');
  var dest_lap_no=document.getElementById('laps').value
    
  for(var i = 0; i<4; i++){
    var positionDown = horsedown[i].offsetTop;
    horsedown[i].style.top = positionDown + Math.ceil(Math.random()*3) + 'px';
    horsedown[i].className = 'horse standDown runDown ';
  }
  if (positionDown >= window.innerHeight*0.78) {
        if(current_lap_no==dest_lap_no){
          stop=true;
        }
        else{
          current_lap_no++;  
        }
        clearInterval(interval);
        //current_lap_no++;
        
        //if(current_lap_no==lap_no)
        //stop=true;   
        interval = setInterval(myRight,10); 
  }
}
	


function mineClic(){
  var bet_amount= document.getElementById('amount').value;
  var dest_lap_no=document.getElementById('laps').value;
  if(bet_amount!="" && dest_lap_no>0){
    if(bet_amount==0 || bet_amount>100){
      alert('Enter valid bet amount');
      }
      else if (bet_amount>0 && bet_amount<=100){
          interval=setInterval(myRight, 10);      
      }
    }
  else{
    alert('Please fill the required valid lap and bet');
  }
}

  function reset(){
    location.reload();
  }
	

function firstFunction(){
  // var betHorse= document.getElementById('betHorse');
  // chosenHorse=betHorse.[betHorse.selectedIndex].text;
	var element=document.getElementById("start");
	element.addEventListener('click',mineClic);
  var restartButton =document.getElementById("reset");
  restartButton.addEventListener('click', reset);

}
document.addEventListener('DOMContentLoaded', firstFunction);