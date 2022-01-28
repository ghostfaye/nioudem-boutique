import { useState, useContext, SyntheticEvent, FormEvent } from 'react'
import { useRouter } from "next/router"
import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'

interface Notification{
    message?: string,
    success?: boolean
}

const Register: NextPage = () => {
    const router = useRouter();
    const { _setAuth, _setUsername } = useContext(AuthContext) 
    const [ name, setName ] = useState<string>('')
    const [ email, setEmail ] = useState<string>('')
    const [ password, setPassword ] = useState<string>('')
    const [ notif, setNotif ] = useState<Notification>()
    const [ isLoading, setIsLoading ] = useState<boolean>(false)

    const validateEmail = (email: string) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    }

    const validatePassword = (password: string) => {
        return password.length >= 6
        // add other conditions here
    }

    const registerWithEmail = (e: SyntheticEvent) => {
        e.preventDefault()
        if(!email || !password || !name){
            setNotif({
                message:'Please enter all fields',
                success: false
            })
            return
        }
        if(!validateEmail(email)){
            setNotif({
                message:'Invalid email',
                success: false
            })
            return
        }
        if(!validatePassword(password)){
            setNotif({
                message:'Password must be at least 6 chars',
                success: false
            })
            return
        }
        setIsLoading(true);
        axios.post('/api/user/register', { email, password, name })
            .then(res => res.data)
            .then(data => {
                const { name } = data
                _setAuth!(true)
                _setUsername!(name)
                setIsLoading(false)
                setNotif({ success:true, message:'You have been registered. Welcome!' })
                // redirect user to home page
                setTimeout(() => {
                    router.push('/')
                }, 2000)
            }).catch(err => {
                console.error(err)
                setIsLoading(false)
                if(err.response?.status === 401){
                    setNotif({
                        success: false,
                        message: 'That email is already taken'
                    })
                    return
                }
                setNotif({
                    success: false,
                    message: 'Server error'
                })
            })
    }

    return (
        <div>
            <Head>
                <title>Grocery App: Log in or Sign up</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="max-w-full">
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
                        <div className="bg-white border border-gray-300 px-6 py-4">
                            <h3 className="mt-1 text-center font-semibold uppercase">
                                Sign Up
                            </h3>
                            <form className="mt-6 w-full flex flex-col" onSubmit={registerWithEmail}>
                            <div className="mb-4 flex-grow-1">
                                <p className="text-sm font-medium text-gray-800">Full Name</p>
                                <div className="mt-2">
                                    <input 
                                        type="text" 
                                        className="textfield focus:outline-none" 
                                        placeholder="Full Name" 
                                        required
                                        onChange={(e: FormEvent<HTMLInputElement>) => setName(e.currentTarget.value)}
                                    />
                                </div>
                            </div>
                            <div className="mb-4 flex-grow-1">
                                <p className="text-sm font-medium text-gray-800">Email</p>
                                <div className="mt-2">
                                    <input 
                                        type="email" 
                                        className="textfield focus:outline-none" 
                                        placeholder="Email" 
                                        required
                                        onChange={(e: FormEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)}
                                    />
                                </div>
                            </div>
                            <div className="mb-4 flex-grow-1">
                                <p className="text-sm font-medium text-gray-800">Password</p>
                                <div className="mt-2">
                                    <input 
                                        type="password" 
                                        className="textfield focus:outline-none" 
                                        placeholder="Password" 
                                        required
                                        onChange={(e: FormEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)}
                                    />
                                </div>
                                {notif && !notif.success && <div className="text-sm text-red-600 font-semibold">{notif.message}</div>}
                                {notif && notif.success && <div className="text-sm text-green-600 font-semibold">{notif.message}</div>}
                            </div>
                            <div className="mt-3 mb-3 flex-grow-1">
                                {isLoading 
                                ? <button className="bg-gray-700 opacity-50 text-sm sm:text-base text-white p-2 rounded-full uppercase w-full" disabled>
                                    Loading...
                                    </button> 
                                : <button type="submit" className="bg-gray-700 text-sm sm:text-base text-white p-2 rounded-full uppercase w-full">
                                    Register
                                  </button>}
                            </div>
                            <div className="flex items-center justify-center gap-1 pb-1 text-sm text-center text-gray-500 font-medium">
                                {"Have an account?"} <div className="hover:underline text-gray-500 font-semibold">
                                    <Link href="/login">Log in</Link>
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

export default Register