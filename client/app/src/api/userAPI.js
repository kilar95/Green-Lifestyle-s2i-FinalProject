import axios from 'axios'

const API = axios.create({ baseURL: 'https://green-lifestyle-s2i-final-project-1hmt.vercel.app/' })

export const getUser = (userId) => API.get(`/home`, userId)
export const updateUserData = (userId, property, value) => API.patch(`/home`, { userId, property, value })
export const calculateResults = (userId) => API.post(`/home`, { userId })
export const resetResults = (userId) => API.patch(`/home/${userId}`)