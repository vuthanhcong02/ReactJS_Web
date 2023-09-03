import React from 'react'
import './CartCourse.scss'
import { Link } from "react-router-dom";
export default function CartCourse() {
  return (
    <>
        <div className='course d-flex flex-column'>
            <span className="tag">TLU</span>
            <img className="course-img" src="https://picsum.photos/200/300" alt=""/>
           <div className="course-info">
                <Link to="#"><span className="course-name">Java Web</span></Link>
                <p className="course-desc">Khoá học lập trình web từ cơ bản đến nâng cao</p>
            </div>
        </div>
    </>
  )
}
