const progressSection = document.getElementById('progress')

export const showProgress = ({ loyaltyCard }) => {
  try {
    // Title
    const h2 = document.createElement('h2')
    h2.innerHTML = `${loyaltyCard.cutsRemaining} <span>cortes restantes</span>`
    
    // Progress Bar
    const progressBar = document.createElement('div')
    progressBar.classList.add('progress-bar')

    const bar = document.createElement('div')
    bar.classList.add('bar')

    const indicator = document.createElement('div')
    indicator.classList.add('indicator')
    const indicatorPercent = (loyaltyCard.totalCuts / loyaltyCard.cutsNeeded) * 100
    indicator.style.width = `${indicatorPercent}%`
    bar.append(indicator)

    const description = document.createElement('span')
    description.textContent = `${loyaltyCard.totalCuts} de ${loyaltyCard.cutsNeeded}`

    progressBar.append(bar, description)

    // Overview
    const overview = document.createElement('overview')
    overview.classList.add('overview')

    overview.append(h2, progressBar)

    // Gift
    const gift = document.createElement('div')
    gift.classList.add('gift')

    progressSection.append(overview, gift)
  } catch (error) {
    console.error(error)
  }
}