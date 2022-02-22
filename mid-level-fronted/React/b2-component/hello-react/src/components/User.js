import React from 'react'
import PropTypes from "prop-types";

function User({name,surname,isLoggedIn,age,friends}) {
  return (
    <div>
        { isLoggedIn ? `${name} ${surname} ${age}`
        : "Giriş yapmadınız"}
        
        {
            friends.map((friend) =>{
                return <div key={friend.id}>{friend.name}</div>
            })
        }
    </div>
  )
}

User.propTypes={
    name: PropTypes.string
}

export default User