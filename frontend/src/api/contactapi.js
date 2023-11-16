import axios from 'axios';

export const fetchAllContact=async()=>{
    const {data} =await axios.get('http://localhost:5002/contact/getall')
    return data
}
export const postContact=async(values)=>{
    const addContact= await axios.post('http://localhost:5002/contact/addcontact',{...values})
}   
export const UpdateContact=async(id,values)=>{
    const updateContact = await axios.put(`http://localhost:5002/contact/update/${id}`,values)
}
export const deleteContact=async(id)=>{
    const deleteContact =await axios.delete(`http://localhost:5002/contact/delete/${id}`)
}
export const uniqueContact=async(id)=>{
    const uniqueContact =await axios.get(`http://localhost:5002/contact/getunique/${id}`)
    return {uniqueContact}
}