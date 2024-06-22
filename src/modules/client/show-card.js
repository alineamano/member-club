const loyaltyCardSection = document.getElementById('loyalty-card')

export const showCard = ({ id, loyaltyCard }) => {
  try {
    // Header
    const header = document.createElement('header')
    const about = `
      <div class="about">
        <h2>Cartão Fidelidade</h2>
        <p>Ao fazer cortes de cabelo, o décimo sai de graça!</p>
      </div>
    `

    const idCard = document.createElement('div')
    idCard.classList.add('id')
    
    const p = document.createElement('p')
    p.textContent = id

    idCard.append(p)
    header.append(about, idCard)

    // Slots
    const usage = document.createElement('div')
    usage.classList.add('usage')

    // loyaltyCard.cutsNeeded
    
    for(let i = 0; i < loyaltyCard.cutsNeeded; i++) {
      const slot = document.createElement('div')
      slot.classList.add('slot')

      if (i < loyaltyCard.totalCuts) {
        const pinCheckImage = document.createElement('img')
        pinCheckImage.setAttribute('src', 'src/assets/pins/PinCheck.png')

        slot.append(pinCheckImage)
      } else if (i === loyaltyCard.cutsNeeded - 1) {
        const pinGiftImage = document.createElement('img')
        pinGiftImage.setAttribute('src', 'src/assets/icons/gift.svg')

        slot.append(pinGiftImage)
      }

      usage.append(slot)
    }

    loyaltyCardSection.append(usage)
    // const 
  } catch (error) {
    console.error(error)
  }
}