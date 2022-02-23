import React,{useState,useEffect} from 'react'

function Form({addContact,contacts}) {
  const [form, setForm] = useState({fullname: "", phone_number:""})

  useEffect(()=>{
    setForm({fullname: "", phone_number:""})
  },[contacts])

  const onChangeInput =(e)=>{
      setForm({...form, [e.target.name]: [e.target.value]})
  }
  const onSubmit = (e) =>{
      e.preventDefault()

      if(form.fullname === "" || form.phone_number === ""){
          return false
      }

      addContact([...contacts, form])
  }
  return (
    <form  onSubmit={onSubmit}>
        <div>
            <input name='fullname' placeholder='Fullname' onChange={onChangeInput} value={form.fullname}/>
        </div>

        <div>
            <input name='phone_number' placeholder='Phone Number' onChange={onChangeInput} value={form.phone_number}/>
        </div>
        
        <div className='btn'>
            <button>Add</button>
        </div>
    </form>
  )
}

export default Form