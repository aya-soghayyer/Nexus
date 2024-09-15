import React from 'react'
import {  Navbarr, Top } from '../Components'
import Footer from '../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Routes() {
  return (
<>
<Navbarr/>
<Outlet/>
<Footer/>
<div className='position-fixed bottom-0 end-0 p-4'>
                <Top />
            </div>
</> 
 )
}

export default Routes