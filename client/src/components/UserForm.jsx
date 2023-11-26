import React, {useState} from 'react'
import { Link } from "react-router-dom";


function UserForm () {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [problem, setProblem] = useState("")



    return (
        <div>
            <form class="w-full max-w-lg">
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
                    value={problem}
                    onChange={(e)=> setProblem(e.target.value)}/>
                </div>
            </div>
            </form>

            <div>
                <Link to= '/admin'> Not a user? Click here for admin</Link>
            </div>
        </div>    
        
    )
}

export default UserForm 
