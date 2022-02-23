import React,{useState} from 'react';

interface AddresList{
  title: string
  zip: number
}
function App() {
  const [name,setName]= useState<string>("Mehmet")
  const [age,setAge]= useState<number>(27)

  const [friends,setFriends]= useState<string[]>(["Ahmet","Recep"])
  const [address,setAddress] = useState<AddresList>({
    title:"İstanbul",
    zip: 34562
  })

  return (
    <div >
      <h1>mehaba {name}</h1>
      <h2>{age}</h2>
      <button onClick={()=>setName("Mecit")}>İsim</button>
      <button onClick={()=>setAge(333)}>Yaş</button>
      <hr />
      <br></br>

      <h2>Friends</h2>
      {
        friends.map((friend, index)=>{
          return <div key={index}>{friend}</div>
        })
      }
      <button onClick={()=>setFriends([...friends,"Ayşe"])}>İsim Ekle</button>
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
