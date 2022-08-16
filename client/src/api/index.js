import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
    // baseURL: 'http://192.168.1.102:3000/api',

})

// export const insertMovie = payload => api.post(`/movie`, payload)
export const getBeats = () => api.get(`/beats`)
export const updateBeat = (id, payload) => api.put(`/beat/${id}`, payload)
// export const deleteMovieById = id => api.delete(`/beat/${id}`)
export const getBeatById = id => api.get(`/beat/${id}`)
export const getBeatByIndex = index => api.get(`/beatbyIndex/${index}`)

export const getUserById = id => api.get(`/user/${id}`)
export const updateUser = (id, payload) => api.put(`/user/${id}`, payload)
export const getAllnumber = () => api.get(`/counts`)


const apis = {
    getBeats,
    updateBeat,
    getBeatById,
    getUserById,
    updateUser,
    getBeatByIndex,
    getAllnumber,

}

export default apis