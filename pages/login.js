import Link from 'next/link';
import router from 'next/router';
import { useState } from 'react';

export default function Logout() {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    return (
        <div className="flex items-center h-screen w-full bg-indigo-300">
            <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
                <h2 className="block text-center w-full p-1 mb-2 -mt-1">Log In</h2>
                <form className="mb-4 md:flex md:flex-wrap md:justify-between">
                    <div className="flex flex-col mb-4 md:w-full">
                        <label htmlFor="email" className="mb-2 text-md font-bold">Email</label>
                        <input
                            className="focus:border-blue-300 rounded-sm border-2 py-1 px-2 text-gray-900"
                            type="text"
                            name="email"
                            placeholder="Email"
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col mb-4 md:w-full">
                        <label htmlFor="password" className="mb-2 text-md font-bold">Password</label>
                        <input
                            className="focus:border-blue-300 rounded-sm border-2 py-1 px-2 text-gray-900"
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="block bg-blue-500 hover:bg-blue-800 text-white text-lg mx-auto py-1 px-2 rounded">
                        Log in
                    </button>
                </form>
                <Link href="/signup" passHref>
                    <a className="block w-full text-center no-underline  text-sm text-grey hover:text-gray-900">Don't have an account?</a>
                </Link>
            </div>
        </div>
    );
}