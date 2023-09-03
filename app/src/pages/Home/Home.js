import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './Home.scss';
import { useState } from 'react';
import CartCourse from '../../components/CardCourse/CardCourse';
export default function Home() {
  const [login, setLogin] = useState(true);
  return (
    <>
        <Header />
        <div className="container mt-4 body-wrapper">
           <div className="row">
             {!login ? (
             <>
                <div className="title">
                  <h4>Các khóa học có sẵn</h4>
                </div>
              <div className="card-course">
                  <CartCourse/>
                  <CartCourse/>
                  <CartCourse/>
                  <CartCourse/>
                  <CartCourse/>
                  <CartCourse/>
              </div>
             </> ): (
               <>
                <div className="title">
                  <h4>Các khoá học của bạn</h4>
                </div>
                <div className="card-course">
                  <CartCourse/> 
                </div>
               </>
             )
             }
           </div>
        </div>
        <Footer/>
    </>
  )
}
