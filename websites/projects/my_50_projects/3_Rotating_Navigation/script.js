const open = document.getElementById ('open')
const close = document.getElementById ('close')
const container = document.querySelector ('.container')
const content = document.querySelector ('.content')


open.addEventListener('click', () => 

{container.classList.add ('show-nav') 
content.classList.add ('show-img')
})


close.addEventListener('click', () => 
{container.classList.remove ('show-nav')
content.classList.remove ('show-img')

})