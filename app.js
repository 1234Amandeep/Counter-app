const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');
const increaseBtn = document.querySelector('.increase');
const value = document.getElementById('value');

let counter = 0;




decreaseBtn.addEventListener('click', () => {
  counter -=1;
  value.innerHTML = counter;
  if(counter < 0) value.style.color = '#ff0000';

  if(counter === 0)
  {
    value.style.color= ''
  }
  
})


resetBtn.addEventListener('click', () => {
  counter = 0;
  value.innerHTML = counter;
  if(counter === 0) value.style.color= ''
})

increaseBtn.addEventListener('click', () => {
  counter +=1;
  value.innerHTML = counter;
  if(counter > 0)  value.style.color = 'green';
  if(counter === 0)
  {
    value.style.color= ''
  }
  

})

