import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Navbar from '../components/navbar'
import BottomNavbar from '../components/bottomNavbar'

const Cart: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Grocery App: Your Cart</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="relative flex flex-col mt-20 mb-20 sm:mb-0">
                <Navbar/>
                <main className='max-w-full px-6'>
                    <div className="flex flex-col justify-center items-center">
                        <img className="h-72 w-72 sm:h-80 sm:w-80 mt-1" src="/cart_empty.png"/>
                        <div className='mt-3 mb-4 text-center'>
                            <h4 className='text-black text-xl font-semibold pb-1'>
                                Your bag is empty :(
                            </h4>
                            <p className="text-gray-600">
                                You dont have any products in your cart.
                            </p>
                        </div>
                        <div>
                            <Link href ="/">
                                <button className="py-1 px-2 border border-yellow-600 text-yellow-600 uppercase hover:text-white hover:bg-yellow-600 rounded-full w-64 focus:outline-none">
                                    Continue shopping
                                </button>
                            </Link>
                        </div>
                        <div className='mt-2 pb-2'>
                            <Link href='/login'>
                                <button className="py-1 px-2 border border-gray-600 text-gray-600 uppercase hover:text-white hover:bg-gray-600 rounded-full w-64 focus:outline-none">
                                    Log in
                                </button>
                            </Link>
                        </div>
                    </div>
                </main>
                <BottomNavbar/>
            </div>
        </div>
    )
}

export default Cart