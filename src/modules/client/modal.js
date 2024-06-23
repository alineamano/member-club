const modal = document.querySelector('dialog')
const modalClose = document.getElementById('modal-close')
const overlay = document.getElementById('overlay')

export const showModal = () => {
  overlay.style.display = 'block'
  modal.show()
}

export const closeModal = () => modal.close()

modalClose.onclick = () => {
  overlay.style.display = 'none'
  closeModal()
}