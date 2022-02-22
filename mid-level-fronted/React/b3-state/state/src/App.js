import { useState } from "react";

function App() {
  const [name, setName] = useState("Mehmet");
  const [age, setAge] = useState(29);
  const [friends, setFriends] = useState(["Ahmet","Murat"])
  const [address,setAddress] = useState({
    title:"İstanbul",
    zip: 34562
  })

  return (
    <div >
      <h1>Merhaba {name}</h1>
      <h2>{age}</h2>
      <button onClick={()=> setName("Ahmet")}>Click</button>
      <button onClick={()=> setAge(333)}>Click</button>
      <hr />
      <br></br>

      <h2>Friends</h2>
      {
        friends.map((friend, index)=>{
          return <div key={index}>{friend}</div>
        })
      }
      <button onClick={()=> setFriends([...friends,"Ayşe"])}>Click</button>
      <hr />
      <br></br>

      <h2>Address</h2>
      <div>
        {address.title} {address.zip}
      </div>

      <button onClick={()=> setAddress({...address,zip:5154})}>Click</button>
    </div>
  );
}

export default App;
