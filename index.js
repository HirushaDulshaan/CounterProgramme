const decreaseButton =document.getElementById('DEBtn');
const increaseButton =document.getElementById('InBtn');
const resetButton =document.getElementById('ReBtn');
const counter =document.getElementById('countlable');

let count = 0;

increaseButton.onclick = function(){
    count++;
    counter.innerHTML = count;
}

decreaseButton.onclick = function(){
    count--;
    counter.innerHTML = count;

}

resetButton.onclick = function(){
    count = 0;
    counter.innerHTML = count;
}