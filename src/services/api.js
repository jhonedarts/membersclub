import { apiConfig } from "./api-config";

export async function post(rote, data) {
    try {
        await fetch(`${apiConfig.baseURL}/${rote}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    } catch (error) {
        console.log(error);
        alert('Houve um erro com a requisição')
    }
}

export async function get(rote, params) {
    try {
        const queryParams = params ? '?'+ new URLSearchParams(params).toString() : ''
        const response = await fetch(`${apiConfig.baseURL}/${rote}${queryParams}`)

        if (response.status === 404) {
            return null
        }

        return await response.json()
    } catch (error) {
        console.log(error);
        alert('Houve um erro com a requisição')
    }
}