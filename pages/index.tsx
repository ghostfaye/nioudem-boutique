import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import BottomNavbar from '../components/bottomNavbar'
import BrowseCategories from '../components/browseCategories'
import TopCategories from '../components/topCategories'
import TopProducts from '../components/topProducts'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Grocery App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='relative bg-gray-100 mt-20 mb-20'>
          <Navbar/>
          <main>
            <TopCategories/>
            <BrowseCategories/>
            <TopProducts/>
            <BottomNavbar/>
          </main>
      </div>
    </div>
  )
}

export default Home
