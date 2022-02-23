import React, { useState } from 'react'
import { User } from "../index";

interface UserProps {
  contacts: User[]
}

interface UserInfo {
  fullname: string
  phone_number: number
}
const List: React.FC<UserProps> = ({ contacts }) => {
  const [filterText, setFilterText] = useState<string>("")

  const filtered = contacts.filter((item: any) => {
    return Object.keys(item).some((key) => {
      return item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    })
  })
  console.log(filtered)

  return (
    <div>
      <input
        placeholder='Filter contact'
        value={filterText}
        onChange={(e) => setFilterText((e.target.value))}
      />
      <ul className='list'>
        {
          filtered.map((contact: { fullname: string, phone_number: number }, index) => {
            return <li key={index}>
                      <span>{contact.fullname}</span>
                      <span>{contact.phone_number}</span>
                   </li>
          })
        }
      </ul>

      <p>Total contacts ({filtered.length})</p>

    </div>
  )
}

export default List