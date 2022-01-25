import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'

const Login: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Grocery App: Log in or Sign up</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='max-w-full'>
                <div className="pt-10 flex justify-center">
                    <div className="w-full mx-4 sm:m-0 md:w-3/4 lg:w-1/2 xl:w-1/3">
                        <div className="inline-block">
                            <Link href='/'>
                                <div className="flex items-center gap-1 text-sm font-bold text-gray-500 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                                    </svg>
                                    <p>Home</p>
                                </div>
                            </Link>
                        </div>
                        <div className="bg-white border border-gray-300 px-6 py-4 w-full">
                            <h3 className="mt-1 text-center font-semibold uppercase">
                                Sign in
                            </h3>
                            <form className="mt-6 w-full flex flex-col w-full">
                                <div className="mb-4 flex-grow-1">
                                    <p className="text-sm font-medium text-gray-800">Email</p>
                                    <div className="mt-2">
                                        <input type="email" name="email" className="textfield focus:outline-none" placeholder="Email" required/>
                                    </div>
                                </div>
                                <div className="mb-4 flex-grow-1">
                                    <div className="flex justify-between items-end">
                                        <div className="text-sm font-medium text-gray-800">Password</div>
                                    </div>
                                    <div className="mt-2">
                                        <input type="password" name="password" className="textfield focus:outline-none" placeholder="Password" required/>
                                    </div>
                                </div>
                                <div className="mt-3 mb-3 flex-grow-1">
                                    <button type="submit" className="bg-gray-700 text-sm sm:text-base text-white p-2 rounded-full uppercase w-full">
                                        Log in 
                                    </button>
                                </div>
                                <div className="flex items-center justify-center gap-1 pb-1 text-sm text-center text-gray-500 font-medium">
                                    {"Don't have an account?"} <div className="hover:underline text-gray-500 font-semibold">
                                        <Link href="/register">Register</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Login