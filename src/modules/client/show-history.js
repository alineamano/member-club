const historySection = document.getElementById('history')

export const showHistory = ({ appointmentHistory }) => {
  try {
    // Header
    const historyHeader = document.createElement('header')
    historyHeader.id = 'history-header'

    const h2 = document.createElement('h2')
    h2.textContent = 'Histórico'
    
    const p = document.createElement('p')
    p.textContent = `${appointmentHistory.length} cortes`

    historyHeader.append(h2, p)

    // Haircuts history
    const haircuts = document.createElement('div')
    haircuts.classList.add('haircuts')

    appointmentHistory.forEach(appointment => {
      // Info
      const info = document.createElement('info')
      info.classList.add('info')

      const pDate = document.createElement('p')
      pDate.classList.add('date')
      pDate.textContent = appointment.date

      const pHour = document.createElement('p')
      pHour.classList.add('hour')
      pHour.textContent = appointment.time

      info.append(pDate, pHour)

      // Pin
      const pin = document.createElement('div')
      pin.classList.add('pin')

      // Haircut
      const haircut = document.createElement('div')
      haircut.classList.add('haircut')

      haircut.append(info, pin)
      haircuts.append(haircut)
    })

    historySection.append(historyHeader, haircuts)
    historySection.style.display = 'flex'

  } catch (error) {
    console.error(error)
  }
}