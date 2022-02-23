import React,{useState,useEffect} from 'react'
import { User } from "../index";

interface UserProps {
  addContact: React.Dispatch<React.SetStateAction<User[]>>
  contacts: User[]
}

interface UserInfo {
  fullname: string
  phone_number: number
}

const Form:React.FC<UserProps> = ({addContact, contacts }) => {
  const[form, setForm] = useState<UserInfo>({fullname:"", phone_number:0})
  
  useEffect(()=>{
    setForm({fullname:"", phone_number:0})
  },[contacts])

  const onChangeInput = (e: { target: { name: any; value: any; }; }) =>{
    setForm({...form,[e.target.name]: [e.target.value]})
  }
  
  const onSubmit = (e: { preventDefault: () => void; }) =>{
    e.preventDefault()

    if(form.fullname === "" || form.phone_number === 0){
      return false
    }

    addContact([...contacts, form])
  }
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input 
          type="text" name='fullname'
          placeholder='Full name'
          onChange={onChangeInput}
          value={form.fullname}
        />
      </div>

      <div>
        <input 
          type="number" name='phone_number'
          placeholder='Phone Number'
          onChange={onChangeInput}
          value={
            form.phone_number === 0 ? "" : form.phone_number
          }
          // value={form.phone_number}
        />
      </div>

      <div className='btn'>
        <button>Add</button>
      </div>
    </form>
  )
}

export default Form