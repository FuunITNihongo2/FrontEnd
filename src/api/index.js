import axios from './axios'

// booths
export const getListBooth = () => axios.get("/booth")
export const deleteBooth = (id) => axios.delete(`/booth/${id}`)
export const editBooth = (id, values) => axios.put(`/booth/${id}`,  values)
export const addBooth = (values) => axios.post(`/booth`, values )

//products
export const getListProducts = (id) => axios.get(`/booth/${id}/item`)
export const deleteProduct = (id) => axios.delete(`/item/${id}`)
export const editProduct = (id, values) => axios.put(`/item/${id}`,  values)
export const addProduct = (values) => axios.post(`/item`, values )
