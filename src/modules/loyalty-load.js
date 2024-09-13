
export function loyaltyLoad({ id, loyaltyCard }) {
    const idLabel = document.getElementById('id-label')
    idLabel.textContent = `ID: ${id}`

    const checkList = document.getElementById('loyalty-checks')
    checkList.innerHTML = ''

    for (let i = 0; i < loyaltyCard.cutsNeeded; i++) {
        const checkCard = document.createElement('div')

        checkCard.classList.add('check-card')

        if (i === loyaltyCard.cutsNeeded - 1) {
            checkCard.classList.add('gift')
        }

        if (i < loyaltyCard.totalCuts) {
            checkCard.classList.add('checked')
        }

        checkList.appendChild(checkCard)
    }
}