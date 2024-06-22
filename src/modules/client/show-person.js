const personSection = document.getElementById('person')

export const showPerson = ({ name, clientSince }) => {
  try {
    // Avatar
    const avatar = document.createElement('div')
    avatar.classList.add('avatar')

    const avatarImage = document.createElement('img')
    avatarImage.setAttribute('src', 'src/assets/images/avatar.png')
    avatarImage.setAttribute('alt', `Avatar de ${name}`)

    avatar.append(avatarImage)
    
    // Person Info
    const informations = document.createElement('div')
    informations.classList.add('person-info')

    const nameTitle = document.createElement('h1')
    nameTitle.textContent = name

    const since =  document.createElement('p')
    since.textContent = `Cliente desde ${clientSince}`
    informations.append(nameTitle, since)

    // Person Section
    personSection.append(avatar, informations)
  } catch (error) {
    console.error(error)
  }
}