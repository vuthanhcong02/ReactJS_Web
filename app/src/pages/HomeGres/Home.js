import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './Home.scss';
import CartCourse from '../../components/CardCourse/CartCourse';
export default function Home() {
  return (
    <>
        <Header />
        <div className="container mt-4 body-wrapper">
           <div className="row">
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
           </div>
        </div>
        <Footer/>
    </>
  )
}
