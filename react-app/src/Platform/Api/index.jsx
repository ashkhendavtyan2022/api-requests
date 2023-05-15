import axios from "axios";


const Api = "https://crudcrud.com/api/1009d5bb1a14442dbfc39c5543ae79b2"

export const SetUser = (data) => {
    return axios.post(`${Api}list`, data)
};

export const GetUser = (id) => {
    return axios.get(`${Api}list/${id}`)
}