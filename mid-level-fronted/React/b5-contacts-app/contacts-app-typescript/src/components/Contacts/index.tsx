import React,{useState,useEffect} from 'react'
import List from "./List";
import Form from "./Form";
import "./style.css"

export interface User{
  fullname: string
  phone_number: number
}
function Contacts() {
    const[contacts, setContacts] = useState<User[]>([
        {fullname:"Mehmet", phone_number: 345334},
        {fullname:"Ayşe", phone_number: 56539},
    ])
    // const [contacts, setContacts] = useState(
    //   {fullname:"Mehmet", phone_number: 345334}
  
  return (
    <div id='container'>
        <h2>Contacts</h2>
        <List contacts={contacts}/>
        <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts