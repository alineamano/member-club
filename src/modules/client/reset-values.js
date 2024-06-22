const personSection = document.getElementById('person')
const loyaltyCardSection = document.getElementById('loyalty-card')
const progressSection = document.getElementById('progress')
const historySection = document.getElementById('history')

export const resetValues = () => {
  personSection.innerHTML = ''
  loyaltyCardSection.innerHTML = ''
  progressSection.innerHTML = ''
  historySection.innerHTML = ''
}