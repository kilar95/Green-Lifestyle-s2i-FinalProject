import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

export const getUser = (userId) => API.get(`/home`, userId)
export const updateUserData = (userId, property, value) => API.patch(`/home`, { userId, property, value })
export const calculateResults = (userId) => API.post(`/home`, userId)