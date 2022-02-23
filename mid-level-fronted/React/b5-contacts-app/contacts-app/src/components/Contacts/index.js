import React,{useState,useEffect} from 'react'
import List from "./List";
import Form from "./Form";
import "./style.css"

function Contacts() {
  const [contacts, setContacts] = useState([
    {fullname: "Mehmet", phone_number: 2345345},
    {fullname: "Ahmet", phone_number: 5634534}
    ])

//   useEffect(()=>{
//     console.log(contacts)
//   },[contacts])
  return (
    <div id='container'>
        <h2>Contacts</h2>
      <List contacts={contacts}/>
      <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts
