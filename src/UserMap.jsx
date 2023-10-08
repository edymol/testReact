import React, { useState, useEffect } from 'react';

const UserMap = () => {
    const [user, setUser] = useState([]); // Initialize user as an empty array

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const json = await res.json();
            setUser(json);
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>Users Map</h1>
            {
                user.map(userItem => ( // Rename the parameter to avoid variable shadowing
                    <div key={userItem.id}>
                        <h1>{userItem.name}</h1>
                        <h2>{userItem.email}</h2>
                    </div>
                ))
            }
        </div>
    )
};

export default UserMap;
