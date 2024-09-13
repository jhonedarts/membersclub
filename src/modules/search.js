import { getClientByID } from '../services/clients.js'
import { profileLoad } from './profile-load.js'
import { loyaltyLoad } from './loyalty-load.js'
import { rewardsLoad } from './rewards-load.js'
import { historyLoad } from './history-load.js'

const searchForm = document.getElementById('search-form')
const searchInput = document.getElementById('search-id')

searchForm.onsubmit = async (event) => {
    event.preventDefault()

    const clientID = searchInput.value
    const client = await getClientByID(clientID)

    if (!client) {
        alert('Cliente não cadastrado!')
        return
    }

    profileLoad(client)
    loyaltyLoad(client)
    rewardsLoad(client.loyaltyCard)
    historyLoad(client.appointmentHistory)
}

