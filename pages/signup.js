import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Instance from '../utils/axiosInstance';

export default function Signup() {

    const [ email, setEmail ] = useState('');
    const [ passwordOne, setPasswordOne ] = useState('');
    const [ passwordTwo, setPasswordTwo ] = useState('');
    const [ passwordsDiffError, setPasswordsDiffError ] = useState(false);

    const router = useRouter();

    console.log("Email, Pass1, Pass2: ", email, " | ", passwordOne, " | ", passwordTwo);

    useEffect(() => {
        if ( passwordOne == '' || passwordTwo == '' ) {
            setPasswordsDiffError(false);
        }
        if ( passwordTwo !== passwordOne) {
            setPasswordsDiffError(true);
        }
    }, [passwordOne ,passwordTwo])

    const validateForm = () => {
        if ( passwordOne !== passwordTwo ){
            setPasswordsDiffError(true);
        };
    //        if (){} // email already exists

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validateForm();
        const data= {'email': email, 'password': passwordOne};
        Instance.post('user/signup/', data)
            .then(res => console.log(res))
            .then(router.back())
            .catch(err => console.log(err))
    };

    return (
        <div className="flex items-center h-screen w-full bg-indigo-300">
            <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
                <h2 className="block text-center w-full p-1 mb-2 -mt-1">Sign Up</h2>
                <form className="mb-4 md:flex md:flex-wrap md:justify-between">
                    <div className="flex flex-col mb-4 md:w-full">
                        <label htmlFor="email" className="mb-2 text-md font-semibold text-gray-700">Email</label>
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
                        <label htmlFor="email" className="mb-2 text-md font-semibold text-gray-700">Password</label>
                        <input
                            className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none rounded-sm border border-gray-200 py-1 px-2 text-gray-900"
                            type="password"
                            name="passwordOne"
                            placeholder="Password"
                            required
                            onChange={(e)=>setPasswordOne(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col mb-4 md:w-full">
                        <label htmlFor="email" className="mb-2 text-md font-semibold text-gray-700">Re-type Password</label>
                        <input
                            className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none rounded-sm border border-gray-200 py-1 px-2 text-gray-900"
                            type="password"
                            name="passwordTwo"
                            placeholder="Confirm Password"
                            required
                            onChange={(e)=>setPasswordTwo(e.target.value)}
                        />
                    </div>
                    { passwordsDiffError ? (
                        <p className="text-red-600 font-medium text-sm mb-3 mx-auto min-w-full text-center">
                            Passwords do not match!
                        </p>
                    ) : null }
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="block bg-blue-500 hover:bg-blue-800 text-white text-lg mx-auto py-1 px-2 rounded">
                        Sign Up
                    </button>
                </form>
                <Link href="/login" passHref>
                    <a className="block w-full text-center no-underline  text-sm text-grey hover:text-gray-900">
                        Already have an account?
                    </a>
                </Link>
            </div>
        </div>
    );
}