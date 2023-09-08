import React from 'react'
import './CardCourse.scss'
import { Link } from "react-router-dom";
import MoreButton from '../MoreButton/MoreButton';
export default function CardCourse({moreBtn}) {
  console.log(moreBtn)
  const [moreButton, setMoreButton] = React.useState(moreBtn);
  return (
    <>
        <div className='course d-flex flex-column'>
            <span className="tag">TLU</span>
            <img className="course-img" src="https://picsum.photos/200/300" alt=""/>
           <div className="course-info">
                <Link to="/course/view/1"><span className="course-name">Java Web</span></Link>
                <p className="course-desc">Khoá học lập trình web từ cơ bản đến nâng cao</p>
            </div>
            {
                moreButton && <>
                  <div className="more__course__button">
                    <MoreButton/>
                  </div>
                </>
            }
        </div>
    </>
  )
}
