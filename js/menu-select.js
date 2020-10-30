const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setTattoo);

function setTattoo {
    const choice = select.value;

     if (choice === 'arm') {
         para.textContent = 'you have selected arm';
     } else if (choice === 'leg') {
         para.textContent = 'you have selected leg';
     } else if (choice === 'chest') {
         para.textContent = 'you have selected chest';
     } else {
         para.textContent = '';
     }

}