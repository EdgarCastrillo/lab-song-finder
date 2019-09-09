'use stric'

import * as UI from './interfaz.js'
import { API } from './api.js'

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
    const api = new API(artist, song)
    api.getAPI()
        .then(data => {
          if(data.response.lyrics) {
            // The song exists
            const lyrics = data.response.lyrics
            UI.divResults.textContent = lyrics
            console.log(data)
            
          } else {
            // The song doesn't exist
            UI.divMessages.innerHTML = 'La canción no existe, prueba con otra busqueda'
            UI.divMessages.classList.add('error')
            setTimeout(() => {
              UI.divMessages.innerHTML = ''
              UI.divMessages.classList.remove('error')
            }, 3000);
          }
        })
  }

})


