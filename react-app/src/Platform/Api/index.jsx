import axios from "axios";


const Api = "https://crudcrud.com/api/f387e721807144bdbc6805ed70d4f562/"

export const SetUser = (data) => {
    return axios.post(`${Api}list`, data)
};

export const GetUser = (id) => {
    return axios.get(`${Api}list/${id}`)
}