import Head from 'next/head';
import Link from 'next/link';

export default function Header() {
    return (
        <div className="relative block text-center h-11 border-b-2 border-yellow-400 border-opacity-50">
            <p className="my-3 inline-block font-fancy text-xl text-green-500 ">
                Nous Mangeons
            </p>
            <div className="absolute right-3 top-0 flex space-x-2 my-2 px-2">
                <Link href="/login" passHref>
                    <a  className="bg-green-500 py-0.5 px-1 rounded-md text-white font-sans hover:bg-green-600">
                        Log in
                    </a>
                </Link>
                <Link href="/signup" passHref>
                    <a  className="bg-green-500 py-0.5 px-1 rounded-md text-white font-sans hover:bg-green-600">
                        Sign up
                    </a>
                </Link>
            </div>
        </div>
    );
}