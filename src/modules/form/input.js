const cardIdInput = document.getElementById('card-id')

cardIdInput.addEventListener('input', (event) => {
  const hasCharactersRegex = /\D+/g
  cardIdInput.value = cardIdInput.value.replace(hasCharactersRegex, '')

  // hifen after first 3 digits
  cardIdInput.value = cardIdInput.value.replace(/^(\d{3})(\d)/g, '$1-$2') 

   // hifen after first 6 digits
  cardIdInput.value = cardIdInput.value.replace(/^(\d{3})-(\d{3})(\d)/g, '$1-$2-$3')

   // hifen after first 9 digits
  cardIdInput.value = cardIdInput.value.replace(/^(\d{3})-(\d{3})-(\d{3})(\d)/g, '$1-$2-$3-$4')

  event.target.value = cardIdInput.value
})