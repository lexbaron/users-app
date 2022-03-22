import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UsersForm = ({getUsers, userSelected, setUserSelected}) => {
    const[firstName, setFirstName] = useState("")
    const[lastName, setLastName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[birthDay, setBirthDay] = useState("")

    
    useEffect(() =>{
        if(userSelected){
        setFirstName(userSelected.first_name)
        setLastName(userSelected.last_name)
        setEmail(userSelected.email)
        setPassword(userSelected.password)
        setBirthDay(userSelected.birthday)
        }
        
    }, [userSelected])

    const addNewUser = e => {
        e.preventDefault()
        const NewUser = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            birthday: birthDay
        }
        if(userSelected !== null){
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, NewUser)
            .then(() => {
                getUsers()
                setUserSelected(null)
                setFirstName("")
                setLastName("")
                setEmail("")
                setPassword("")
                setBirthDay("")
            })
        } else {
            axios.post("https://users-crud1.herokuapp.com/users/", NewUser)
            .then(() => {
                 getUsers()
                 setFirstName("")
                 setLastName("")
                 setEmail("")
                 setPassword("")
                 setBirthDay("")
                }) 
        }   
    }

    return (
        <section className='inputs-section'>
            <div className='inputs animate__animated animate__fadeInDown'>
                {userSelected !== null ? <h1>Edit user</h1> : <h1>New user</h1> }
                <form onSubmit={addNewUser} className ="users-form">
                    <div  className='input-container'>
                        <label htmlFor="">First name</label>
                        <input 
                        type ="text"
                        onChange ={ e => setFirstName(e.target.value)}
                        value = {firstName}  />
                    </div>
                    <div className='input-container'>
                        <label htmlFor="">Last name</label>
                        <input 
                        type ="text"
                        onChange ={ e => setLastName(e.target.value)}
                        value = {lastName}  />
                    </div>
                    <div className='input-container'>
                        <label htmlFor="">Email</label>
                        <input 
                        type ="text"
                        onChange ={ e => setEmail(e.target.value)}
                        value = {email}  />
                    </div>
                    <div className='input-container'>
                        <label htmlFor="">Password</label>
                        <input 
                        type ="text"
                        onChange ={ e => setPassword(e.target.value)}
                        value = {password}  />
                    </div>
                    <div className='input-container'>
                        <label htmlFor="">Birth day</label>
                        <input 
                        type ="date"
                        onChange ={ e => setBirthDay(e.target.value)}
                        value = {birthDay}  />
                    </div>
                    {userSelected !== null ? <button >update user</button> : <button>add new user</button> } 
                    
                </form>
                
        </div>
        </section>
        
    );
};

export default UsersForm;