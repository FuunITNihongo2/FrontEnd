import axios from "./axios";

export const login = (values) => axios.post("/login", values);
export const getHome = () => axios.get("/home");
// booths
export const getListBooth = () => axios.get("/booth");
export const getBooth = (id) => axios.get(`/booth/${id}`);
export const deleteBooth = (id) => axios.delete(`/booth/${id}`);
export const editBooth = (id, values) => axios.put(`/booth/${id}`, values);
export const addBooth = (values) => axios.post(`/booth`, values);

export const getListItem = (id) => axios.get(`/booth/${id}/item`);

export const getListProducts = (id) => axios.get(`/booth/${id}/item`);
export const deleteProduct = (id) => axios.delete(`/item/${id}`);
export const editProduct = (id, values) => axios.put(`/item/${id}`, values);
export const addProduct = (values) => axios.post(`/item`, values);
