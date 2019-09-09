'use stric'

import * as UI from './interfaz.js'

console.log(UI)

UI.serachForm.addEventListener('submit', (e) => {
  e.preventDefault()

  // Get data form
  const artist = document.querySelector('#artist').value
  const song = document.querySelector('#song').value

  if(artist === '' || song === '') {
    UI.divMessages.innerHTML = 'Error... todos los campos son obligatorios'
    UI.divMessages.classList.add('error')
    setTimeout(() => {
      UI.divMessages.innerHTML = ''
      UI.divMessages.classList.remove('error')
    }, 3000);
  } else {
    // Comlete form. Get Api information
  }

})


