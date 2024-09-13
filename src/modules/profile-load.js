
export function profileLoad({ name, clientSince }) {
    const nameLabel = document.getElementById('name')
    const sinceLabel = document.getElementById('since')

    nameLabel.textContent = name
    sinceLabel.textContent = `Cliente desde ${clientSince}`
}