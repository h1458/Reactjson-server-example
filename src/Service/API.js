import axios from 'axios'

const API_URL = "http://localhost:3030/users";

export const getUserApi = async () => {
    try{
        return await axios.get(API_URL)
    }
    catch(error){
        console.log("Error While Getting Get Api", error.message);
    }
}

export const deleteUserApiId = async id => {
    try{
        return await axios.delete(`${API_URL}/${id}`)
    }
    catch(error){
        console.log("Error While Getting ApiId", error.message)
    }
}

export const postUser = async data => {
    try{
        return await axios.post(API_URL, data)
    }
    catch(error){
        console.log("Error While Calling APi Post", error.message)
    }
}

export const getUser = async data => {
    try{
        return await axios.get(`${API_URL}/${data}`)
    }
    catch(error){
        console.log("Error While calling getUser Api", error.message)
    }
}

export const editUSer = async (data, id) => {
    try{
        return await axios.put(`${API_URL}/${id}`, data)
    }
    catch(error){
        console.log("Error While calling edituser Api", error.message)
    }
}