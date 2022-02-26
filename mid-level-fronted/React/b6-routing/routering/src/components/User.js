import React,{useEffect,useState} from 'react'
import {BrowserRouter as Router, useParams ,Link} from "react-router-dom";
import axios from "axios";

function User() {
    const {id} = useParams()
    const[user, setUser] = useState({});
    const[loading, setLoading] = useState(true);

    useEffect(() =>{
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => setUser(res.data))
            .finally(() => setLoading(false))
    },[id])

    return (
        <div>
            <h2>User Detail</h2>
            {loading && <div>Loading...</div>}
            <code>{JSON.stringify(user)}</code>

            <br></br>
            <br></br>

            <Link to={`/user/${Number(id) + 1}`}>Next User ({Number(id)+1})</Link>
        </div>
    )
}

export default User