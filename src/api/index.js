import axios from "./axios";

//authorized
export const login = (values) => axios.post("/login", values);

//home
export const getHome = () => axios.get("/home");

// booths
export const getListBooth = () => axios.get("/booth");
export const getBooth = (id) => axios.get(`/booth/${id}`);
export const deleteBooth = (id) => axios.delete(`/booth/${id}`);
export const editBooth = (id, values) => axios.post(`/booth/${id}`, values);
export const addBooth = (values) => axios.post(`/booth`, values);

//products by booth id
export const getListProductsByBoothId = (id) => axios.get(`/booth/${id}/item`);

//products
export const getListProducts = () => axios.get(`/item`);
export const getListProduct = (id) => axios.get(`/item/${id}`);
export const deleteProduct = (id) => axios.delete(`/item/${id}`);
export const editProduct = (id, values) => axios.put(`/item/${id}`, values);
export const addProduct = (values) => axios.post(`/item`, values);
