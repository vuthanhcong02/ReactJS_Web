import React from 'react'
import Header from '../../components/Header/Header'
import './Home.scss';
import CartCourse from '../../components/CartCourse/CartCourse';
export default function Home() {
  return (
    <>
        <Header />
        <div className="container mt-4 body-wrapper">
           <div className="row">
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
    </>
  )
}
