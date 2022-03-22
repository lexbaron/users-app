import React from 'react';

const UsersList = ({users,setUserSelected, eliminateUser, }) => {
    return (
        
        <section>
            <h1>Users</h1>
            <ul className='card-container'>
                {users.map(user => (
                    <li key={user.id} className="card">
                            <h4 className='text-left-card'>{user.first_name} {user.last_name}</h4>
                            <p className='text-left-card'>{user.email}</p>
                            <p className='text-left-card' typeof='date'> {user.birthday}</p>
                            <button className='text-right-card' id='delete-img' onClick={ () => eliminateUser(user.id)} ><i class="fa-solid fa-trash-can"></i></button>
                            <button className='text-right-card' id='edit-img'  onClick={() => setUserSelected(user) }><i class="fa-solid fa-pen"></i></button> 
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default UsersList;