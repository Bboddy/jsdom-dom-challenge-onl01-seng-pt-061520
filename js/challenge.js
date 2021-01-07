let counter = document.getElementById('counter');
let number = 0;
let paused = false;

let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let heart = document.getElementById('heart');
let pause = document.getElementById('pause');

document.getElementById("submit").addEventListener("click", function(event){
  event.preventDefault();
  console.log(document.getElementById('comment-input').value);
  document.getElementById('allComments').innerHTML = document.getElementById('comment-input').value;
  // var ul = document.getElementById('allComments');
  // var h3 = document.createElement('h3');
  // h3.appendChild(document.createTextNode(number));
  // ul.appendChild(h3);
});

function subtractTimer(){
  number--;
  counter.innerHTML = number;
}

function addTimer() {
  number ++;
  counter.innerHTML = number;
}

function stopTimer(){
  paused = !paused;
}

function likeNumber(){
  var ul = document.getElementById('likes');
  var li = document.createElement('li');
  li.appendChild(document.createTextNode(number));
  ul.appendChild(li);
}

function startGame(){
  var i = setInterval(function(){
    if (paused === false){
      number++;
      counter.innerHTML = number;
    }
  }, 1000);
}
