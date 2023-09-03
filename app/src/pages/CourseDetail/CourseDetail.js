import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './CourseDetail.scss';
import NavbarTab from '../../components/NavbarTab/NavbarTab';
import Sidebar from '../../components/Sidebar/Sidebar';
export default function CourseDetail() {
  return (
   <>
    <Header/>
        <div className='navtab'>
            <NavbarTab/>
        </div>
           <div className="wrapper-course-details">
                <div className="sidebar">
                    <Sidebar/>
                </div>
                <div className="main-content">
                    <div className="title-detail">
                        <h4 >Khoá học Java Web</h4>
                    </div>
                </div>
           </div>
    <Footer/>
   </>
  )
}
