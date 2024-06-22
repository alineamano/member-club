import { showCard } from "./show-card"
import { showHistory } from "./show-history"
import { showPerson } from "./show-person"
import { showProgress } from "./show-progress"

export const showClientInfo = (clientInfo) => {
  try {
    const { id, name, clientSince, appointmentHistory, loyaltyCard } = clientInfo

    showPerson({ name, clientSince })
    showCard({ id, loyaltyCard })
    showProgress({ loyaltyCard })
    showHistory({ appointmentHistory })
  } catch (error) {
    console.error(error)
  }
}