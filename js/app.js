// alert('hello')

const loadPlayer = () => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchevents.php?e=`

    fetch(url)
        .then(res => res.json())
        .then(data => displayPlayer(data.event));
}
    
const displayPlayer = (events) => {
    console.log(events)

    const playerContainer = document.getElementById('player-container')
    events.forEach(event => {
        // console.log(event)

        const newPlayer = document.createElement('div')
        newPlayer.classList.add('col')
        newPlayer.innerHTML = `
        
        <div class="card">
      <img src="" class="card-img-top" alt="...">
      <div class="card-body">
      <h2>${event.strLeague
      } <h2>

      <h4>${event.strLocked?event.strLocked:'This is locked man'}</h4>
        <h5 class="card-title">${event.strEvent}</h5>
        <h5 class="card-title">${event.dateEvent}</h5>
        <h5 class="card-title">${event.strTime}</h5>
        <h5 class="card-title">${event.strTimeLocal}</h5>
        <h5 class="card-title">${event.strTimestamp
        }</h5>
        <h3>${event.strAwayTeam?event.strHomeTeam
            :'No HOme team'
        }</h3>
        <h3>${event.strAwayTeam?event.strAwayTeam:'No Away team'
        }</h3>
        <h5>${event.strEventAlternate ? event.strEventAlternate : 'upcoming'}</h5>
        <h2>${event.idEvent}</h2>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
        
        
        
        `; playerContainer.appendChild(newPlayer)
    })
}



loadPlayer();
   