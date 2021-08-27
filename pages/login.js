import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Instance from '../utils/axiosInstance';

export default function Logout() {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {'email': email, 'password': password};
        Instance.post('user/login/', data)
            .then(res => console.log(res))
            .then(router.back())
            .catch(err => console.log(err));
    };

    return (
        <div className="flex items-center h-screen w-full bg-indigo-300">
            <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
                <h2 className="block text-center w-full p-1 mb-2 -mt-1">Log In</h2>
                <form className="mb-4 md:flex md:flex-wrap md:justify-between">
                    <div className="flex flex-col mb-4 md:w-full">
                        <label htmlFor="email" className="mb-2 text-md font-bold text-grey-600">Email</label>
                        <input
                            className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none rounded-sm border border-gray-200 py-1 px-2 text-gray-900"
                            type="text"
                            name="email"
                            placeholder="Email"
                            required
                            autoComplete="email"
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col mb-4 md:w-full">
                        <label htmlFor="password" className="mb-2 text-md font-bold text-grey-600">Password</label>
                        <input
                            className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none rounded-sm border border-gray-200 py-1 px-2 text-gray-900"
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="block bg-blue-500 hover:bg-blue-800 text-white text-lg mx-auto py-1 px-2 rounded">
                        Log in
                    </button>
                </form>
                <Link href="/signup" passHref>
                    <a className="block w-full text-center no-underline  text-sm text-grey hover:text-gray-900">Don&apos;t have an account?</a>
                </Link>
            </div>
        </div>
    );
}