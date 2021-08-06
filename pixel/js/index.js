const btn = document.querySelector('#button')
const input = document.querySelector('#input')


btn.addEventListener('click',()=>{
    input.forEach(input => input.value='');
});


const empty = ''
setInterval(()=>{
    input.fadeOut('slow').load('empty').fadeIn('slow');
    refresh();
},100);