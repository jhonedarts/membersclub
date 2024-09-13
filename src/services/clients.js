import * as api from '../services/api.js'

export const getClientByID = (id) => api.get(`clients/${id}`)