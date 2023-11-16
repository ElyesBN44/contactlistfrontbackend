import React, { useEffect } from 'react'
import ContactCard from './ContactCard'
import { useSelector,useDispatch } from 'react-redux';
import {setContact} from '../../store/contactSlice';
import { fetchAllContact } from '../../api/contactapi';

const ContactList = () => {

  const dispatch = useDispatch()
  const contacts = useSelector(state=>state.contactElement)

  const getAllcontact=async()=>{
  try{
    const data= await fetchAllContact()
    console.log('data mel db',data)
   dispatch(setContact(data.contact))
  }catch(err){
    console.log(err)
  }
  }

  useEffect(()=>{
    getAllcontact()
  },[])



  return (
    <div>
{contacts.map((el)=><ContactCard   mini={el}  />)}
   </div>
  )
}


export default ContactList

