import React from 'react'
import { User } from "../App";

interface UserProps{
  name: User["name"]
  surname: User["surname"]
  isLoggedIn: User["isLoggedIn"]
  age: User["age"]
  friends: User["friends"]
}


const UserList: React.FunctionComponent<UserProps> = function({name,surname,isLoggedIn,age,friends}) {
  return (
    <div>
        {
            isLoggedIn ? `${name} ${surname} ${age}`
                       : "Giriş yapmadınız"
        }

        {
          friends.map((friend)=>{
            return <div key={friend.id}>{friend.name}</div>
          })
        }
    </div>
  )
}

export default UserList