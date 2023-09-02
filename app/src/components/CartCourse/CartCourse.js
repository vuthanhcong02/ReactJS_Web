import React from 'react'
import './CartCourse.scss'
export default function CartCourse() {
  return (
    <>
        <div className='course d-flex flex-column'>
            <span className="tag">TLU</span>
            <img className="course-img" src="https://picsum.photos/200/300" alt=""/>
           <div className="course-info">
                <span className="course-name">Java Web</span>
                <p className="course-desc">Khoá học lập trình web từ cơ bản đến nâng cao</p>
            </div>
        </div>
    </>
  )
}
