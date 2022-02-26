import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useRouteMatch } from "react-router-dom";
import axios from "axios";
import User from "./User";

function Users() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    let { path, url } = useRouteMatch();
    console.log( path, url)

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
            .then(res => setUsers(res.data))
            .finally(() => setLoading(false))
    }, [])
    return (
        <div>
            <h2>Users</h2>
            {loading && <div>Loading...</div>}
            <ul>
                {
                    users.map((user) => {
                        return <li key={users.id}>
                            <Link to={`/user/${user.id}`}>{user.name}</Link>
                        </li>
                    })
                }
            </ul>

            {/* <Routes>
                <Route exact path={path}>
                    <h3>Please select a user.</h3>
                </Route>
                <Route path={`${path}/:id`}  element={<User/>}></Route>
            </Routes> */}
        </div>
    )
}

export default Users