const open = document.getElementById ('open')
const close = document.getElementById ('close')
const container = document.querySelector ('.container')

//git

open.addEventListener('click', () => 

{container.classList.add ('show-nav')  
addPain()
})

close.addEventListener('click', () => 
{container.classList.remove ('show-nav')
removePain()
})

function addPain() {
    document.getElementById("img1").src = "https://64.media.tumblr.com/tumblr_lpw3yiCQjI1qdqlhzo1_500.gifv";
  }

  function removePain() {
    document.getElementById("img1").src = "https://i.pinimg.com/originals/1b/69/d2/1b69d2dd50ff993833db64bd7c84aa2d.gif";
  }