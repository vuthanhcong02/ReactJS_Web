import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './CourseDetail.scss';
import './NavbarTab.scss'
import Sidebar from '../../components/Sidebar/Sidebar';
import InforCourse from '../MainDetailCourse/InforCourse';
import InforNotification from '../MainDetailCourse/InforNotification';
import InforDocument from '../MainDetailCourse/InforDocument';
import { Nav } from "react-bootstrap";
import {useState} from 'react'
export default function CourseDetail() {
    const [toggleTab, setToggleTab] = useState('course');
  return (
   <>
    <Header/>
        <div className='navtab'>
        <Nav defaultActiveKey="/course" variant="underline">
            <Nav.Item>
            <Nav.Link eventKey="/course" activekey="/course" onClick={()=>setToggleTab('course')}>
                    Course
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="/notification" activekey="/notification" onClick={()=>setToggleTab('notification')}>Thông báo chung</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="/document" activekey="/document" onClick={()=>setToggleTab('document')}>Tài liệu</Nav.Link>
            </Nav.Item>
      </Nav>
        </div>
           <div className="wrapper-course-details">
                <div className="sidebar">
                    <Sidebar/>
                </div>
                <div className="main-content">
                    <div className="title-detail">
                        {toggleTab === 'course' && <InforCourse/>}
                        {toggleTab === 'notification' && <InforNotification/>}
                        {toggleTab === 'document' && <InforDocument/>}
                    </div>
                </div>
           </div>
    <Footer/>
   </>
  )
}