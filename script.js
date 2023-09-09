import objects from './objectNames.js';

const main = document.querySelector('.main');
const buttons = document.querySelectorAll('button');

const handleClick = (event) => {
  const target = event.target;

  if (target.tagName === 'BUTTON') {
    target.classList.toggle('open');
    target.innerHTML = target.classList.contains('open') 
      ? objects[target.dataset.id].name
      : '+';
  } else if (
    target.tagName !== 'BUTTON' 
    && Array.from(buttons)
      .some(item => item.classList.contains('open'))
    ) {
    buttons.forEach(item => { 
      item.innerHTML = '+';
      item.classList.remove('open');
    });
  }
}

main.addEventListener('click', handleClick);
