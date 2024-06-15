import React from 'react'

import Banner from '../components/ui/Banner';
import Footer from '../components/ui/Footer';
import SearchAppBar from '@/components/ui/matbar';

function Home() {
  return (
   <>
   <SearchAppBar/>
   <Banner/>
   <Footer/>

   </>
  )
}

export default Home;