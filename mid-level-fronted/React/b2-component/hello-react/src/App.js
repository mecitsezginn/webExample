
import './App.css';
import Header from "./components/Header";
import User from "./components/User";

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
    <div>
      {/* <h1>
        {isLoggedIn ? ` Benim Adım ${name} ${surname}`
        :!isLoggedIn && "Giriş yapmadınız"}
      </h1>
      <Header /> */}
      <User 
        name="Mehmet" 
        surname="Seven"
        isLoggedIn = {true}
        age={29}
        friends={friends}
      />
    </div>
  );
}

export default App;
