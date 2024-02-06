import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/Navbar/Sidebar/Sidebar'
import {Routes,Route} from 'react-router-dom'
import AddProduct from '../../Components/Navbar/AddProduct/AddProduct'
import ListProduct from '../../Components/Navbar/ListProduct/ListProduct'
 const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar/>
      <Routes>
        <Route path='/AddProduct' element={<AddProduct/>}/>
        <Route path='/ListProduct' element={<ListProduct/>}/>
      </Routes>
        </div>
  )
}
export default Admin