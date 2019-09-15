let goal = Math.floor(Math.random() * 100) + 40
    let current = 0
    let wins = 0
    let losses = 0

    //  initial game and new game data
    const renderGems = () => {
      current = 0
    //   set goal number
      goal = Math.floor(Math.random() * 100) + 40
      document.getElementById('gems').innerHTML = ''
      for (let i = 0; i < 3; i++) {
        //   get random number for each gem
        const random = Math.floor(Math.random() * 20) + 1
        // update HTML elements with the new information
        let gemElem = document.createElement('div')
        gemElem.className = 'col s4'
        gemElem.innerHTML = `
          <div class="card" >
          <div class="card-image">
            <img class="gem" src="./gem${i + 1}.png" data-value="${random}">
          </div>
        </div>
        `
        document.getElementById('gems').append(gemElem)
      }
      document.getElementById('goal').textContent = goal
      document.getElementById('current').textContent = current
      document.getElementById('wins').textContent = wins
      document.getElementById('losses').textContent = losses
    }

    // each time a gem is clicked on this will update var current by a random amount
    document.addEventListener('click', event => {
      if (event.target.className === 'gem') {
        //   update current value
        let gemValue = parseInt(event.target.dataset.value)
        current += gemValue
        // update wins
        if (current === goal) {
          wins++
          renderGems()
        //   update losses
        } else if (current > goal) {
          losses++
          renderGems()
        } else{
          document.getElementById('current').textContent = current
        }
      }
    })

    renderGems()