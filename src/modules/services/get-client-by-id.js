import { apiConfig } from "./api-config.js"

export async function getClientById({ cardId }) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/clients`)
    const data = await response.json()
    
    const [clientById] = data.filter(client => client.id === cardId)

    return clientById
  } catch (error) {
    console.error(error)
  }
}

//124-537-835-230