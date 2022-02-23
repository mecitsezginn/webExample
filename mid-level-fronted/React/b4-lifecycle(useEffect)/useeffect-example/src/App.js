import { useState, useEffect } from "react";
import Counter from "./components/Counter";

function App() {
  const[visible, setVisible] = useState(true)

  
  return (
    <div >

      {
        visible ? <Counter />
        : null
      }

      <br></br>

      <button onClick={()=> setVisible(!visible)}>Click</button>
    </div>
  );
}

export default App;
