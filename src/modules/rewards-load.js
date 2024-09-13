
export function rewardsLoad({ totalCuts, cutsNeeded, cutsRemaining }) {
    const remainingCounter = document.querySelector('#rewards .rewards-call strong')
    const coutdown = document.querySelector('#rewards .rewards-progress .coutdown')
    const progressBar = document.querySelector('#rewards .rewards-progress .bar-progress')
    const percentage = (totalCuts / cutsNeeded) * 100


    remainingCounter.textContent = cutsRemaining
    coutdown.textContent = `${totalCuts} de ${cutsNeeded}`
    progressBar.style.width = `${percentage}%`;

    if (totalCuts === cutsNeeded) {
        setTimeout(() => {
            alert('Parabéns! Seu próximo corte é gratuito!')
        }, 500);
    }
}