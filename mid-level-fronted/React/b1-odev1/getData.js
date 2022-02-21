import fetch from "node-fetch";
import axios from "axios";

// const myFunc = async (userId) =>{
//     const urlUsers = "https://jsonplaceholder.typicode.com/users/" + userId
//     const users = await (await fetch(urlUsers)).json();

//     const urlUsersId = "https://jsonplaceholder.typicode.com/posts?userId=" + userId
//     const usersId = await (await fetch(urlUsersId)).json();

//     const port = []
//     port.push(usersId[0])

//     users["port"] = port
//     console.log(users)
// }

const myFunc = async (userId) =>{
    const urlUsers = "https://jsonplaceholder.typicode.com/users/" + userId
    const users = await axios(urlUsers);

    const urlUsersId = "https://jsonplaceholder.typicode.com/posts?userId=" + userId
    const usersId = await axios(urlUsersId);

    const arr = usersId.data.filter((item)=>{
        if(item.id === Number(userId))
            return  true
    })
    
    users.data["port"] = arr
    console.log(users.data)
}

export default myFunc;