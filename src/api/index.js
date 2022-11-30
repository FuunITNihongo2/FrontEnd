import axios from './axios'
export const getListBooth = () => axios.get("/booth")
export const deleteBooth = (id) => axios.delete(`/booth/${id}`)
export const editBooth = (id, values) => axios.put(`/booth/${id}`,  values)
export const addBooth = (values) => axios.post(`/booth`, values )


export const getListItem = (id) => axios.get(`/booth/${id}/item`);