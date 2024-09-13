
export function historyLoad(appointmentHistory) {
    const logsView = document.getElementById('history-logs')
    const emptyLabel = document.getElementById('empty-history')
    const totalLabel = document.getElementById('history-total')

    logsView.innerHTML = ''
    emptyLabel.style.display = 'none'
    logsView.appendChild(emptyLabel)

    if (!appointmentHistory || (Array.isArray(appointmentHistory) && !appointmentHistory.length)) {
        emptyLabel.style.display = 'flex'
        return
    }

    totalLabel.textContent = `${appointmentHistory.length} cortes`

    for (const log of appointmentHistory) {
        const logCard = createLogCard(log)
        logsView.appendChild(logCard)
    }
}

function createLogCard({ date, time }) {
    const logCard = document.createElement('div');
    logCard.classList.add('log-card')

    logCard.innerHTML = `
        <div class="time-mark">
            <div class="subtitle-sm gray-600">${date}</div>
            <div class="text-xs gray-500">${time}</div>
        </div>
        <div class="check-icon"></div>`

    return logCard
}