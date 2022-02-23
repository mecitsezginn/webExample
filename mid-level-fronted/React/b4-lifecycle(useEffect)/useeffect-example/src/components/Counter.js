import { useState, useEffect } from "react";

function Counter() {

    const [number, setNumber] = useState(0);
    const [name, setName] = useState("Mehmet");

    //başlangıçta bir kez çalışır
    useEffect(() => {
        console.log("Component mount edildi")

        // 1000 ms de bir number değerini arttır
        const interval = setInterval(()=>{
          setNumber((n)=> n+1);
        },1000)


        //component yok olduğunda return komutu çalışır
        return () => {
            console.log("Component unmount edildi")
            clearInterval(interval)
        }
    }, [])

    // //başlangıçta bir kez ve herhangi bir state güncellendiğinde çalışır
    // useEffect(()=>{
    //   console.log("state guncellendi")
    // })

    // //başlangıçta bir kez ve number state ti güncellendiğinde çalışır
    // useEffect(()=>{
    //   console.log("number state guncellendi")
    // },[number])

    // //başlangıçta bir kez ve number, name state ti güncellendiğinde çalışır
    // useEffect(()=>{
    //   console.log("number veya name state guncellendi")
    // },[number,name])

    return (
        <div >
            <div>
                <h1>{number}</h1>
                <button onClick={() => setNumber(number + 1)}>Click</button>
                <hr></hr>

                <h1>{name}</h1>
                <button onClick={() => setName("Mecit")}>Click</button>
            </div>

        </div>
    );
}

export default Counter;
