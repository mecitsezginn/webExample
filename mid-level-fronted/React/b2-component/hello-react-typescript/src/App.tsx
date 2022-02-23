import React from 'react';
import Header from "./components/Header";
import UserList from "./components/UserList";

export interface User{
  name: string
  surname: string
  age: number
  isLoggedIn: boolean
  friends: Array<Type>
}

interface Type{
  id: number
  name: string
}

const friends = [
  {
    id:1,
    name:"Ahmet"
  },
  {
    id:2,
    name:"Ayşe"
  },
  {
    id:3,
    name:"Fatma"
  },
  {
    id:4,
    name:"Gökhan"
  },
]
function App() {
  return (
    <div >
      <Header />
      <UserList 
        name={"Mecit"}
        surname={"Sezgin"}
        age={27}
        isLoggedIn={true}
        friends={friends}
      />
    </div>
  );
}

export default App;
