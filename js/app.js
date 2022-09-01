// alert('hello')

const loadPlayer = () => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/all_sports.php`

    fetch(url)
        .then(res => res.json())
        .then(data => displayPlayer(data.sports));
}
    
const displayPlayer = (sports) => {
    // console.log(sports)

    const playerContainer = document.getElementById('player-container')
    sports.forEach(sport => {
        console.log(sport)

        const newPlayer = document.createElement('div')
        newPlayer.classList.add('col')
        newPlayer.innerHTML = `
        
        <div class="card">
      <img src="${sport.strSportThumb}" class="card-img-top" alt="...">
      <div class="card-body">
      <h2>${sport.strFormat
      } <h2>
      <h4>${sport.strSport?sport.strSport:'This is locked man'}</h4>
        <h5 class="card-title">${sport.strSportDescription.slice(0,300)}</h5>
        <img src="${sport.strSportIconGreen
        }" class="card-img-top" alt="...">
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
        
        
        
        `; playerContainer.appendChild(newPlayer)
    })
}



loadPlayer();
   