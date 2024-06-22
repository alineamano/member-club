import { resetValues } from "../client/reset-values"
import { showClientInfo } from "../client/show"
import { getClientById } from "../services/get-client-by-id"

const form = document.querySelector('form')
const cardId = document.getElementById('card-id')

form.onsubmit = async (event) => {
  event.preventDefault()

  try {
    if (!cardId.value) {
      throw new Error('Oops! Parece que você esqueceu de digitar o ID do seu cartão de fidelidade.')
    }
    
    if (cardId.value.length !== 15) {
      throw new Error('Oops! O ID do Cliente que você digitou parece estar faltando alguns números. Por favor, verifique e insira todos os 12 números corretamente.')
    }

    const client = await getClientById({ cardId: cardId.value })

    if (!client) {
      throw new Error('Desculpe, não conseguimos encontrar informações para o ID do Cliente fornecido. Verifique se digitou corretamente e tente novamente.')
    }

    resetValues()
    showClientInfo(client)
  } catch (error) {
    console.error(error)
    alert(error)
  }
}
