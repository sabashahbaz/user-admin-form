import React, {useState} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'


function UserForm () {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [description, setDescription] = useState("")

    //submit user info 
    function submitUserForm(e) {
        e.preventDefault()
        console.log("did we make it?")
        axios.post('/submit_user_form', {
            first_name: firstName,
            last_name: lastName,
            email: email,
            description: description
        })
        .then(response => console.log(response))
    }

    return (
        <div>
            <form class="w-full max-w-lg" onSubmit={submitUserForm}>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    First Name
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-grah\y-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                    id="grid-first-name" 
                    type="text" 
                    placeholder="Jane"
                    value={firstName}
                    onChange={(e)=> setFirstName(e.target.value)} />
                </div>

                <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                    Last Name
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-last-name" 
                    type="text" 
                    placeholder="Doe"
                    value={lastName} 
                    onChange={(e)=> setLastName(e.target.value)} />
                </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
                    Email Address
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-password" 
                    type="email" 
                    placeholder="email@example.com"
                    value={email} 
                    onChange={(e)=> setEmail(e.target.value)}/>
                </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-description">
                    Please enter your complaint 
                </label>
                <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-password" 
                    type="text" 
                    placeholder="enter description there"
                    value={description}
                    onChange={(e)=> setDescription(e.target.value)}/>
                </div>
            </div>

            <div class="items-center">
                <button class="shadow w-full bg-purple-500 hover:bg-purple-400 focus:shadow-outline-purple text-white font-bold py-2 px-4 rounded" 
                    type="submit">
                    Submit Complaint
                </button>
            </div>
            </form>

            <div class="mt-3 underline">
                <Link to= '/admin'> Not a user? Click here to view Admin Page</Link>
            </div>
        </div>    
        
    )
}

export default UserForm 
