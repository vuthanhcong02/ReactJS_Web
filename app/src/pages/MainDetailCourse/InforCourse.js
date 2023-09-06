import React from 'react'
import './InforCourse.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBookOpen, faMinus,faPlus} from '@fortawesome/free-solid-svg-icons'
import { useCollapse } from '../../hook/useCollapse'
export default function InforCourse() {
  const {isCollapsed,toggleCollapse} = useCollapse()
  return (
    <>
      <div className="contain__information__course__name">
        <div className="contain__information__course__wrapper__icon">
          <FontAwesomeIcon icon={faBookOpen} bounce className="bookopen__icon" />
          </div>
        <div className="contain__notification__title">
          <span>Khóa học cơ bản Java Core</span>
        </div>
      </div>
      <div>
        <div className="contain__information__course__description">
         {
            isCollapsed ? (
             <p>Khóa học Java Web là một nền tảng tốt để bắt đầu học lập trình bằng Java.
               Nó cung cấp cho học viên kiến thức cơ bản và kỹ năng lập trình để xây dựng ứng dụng Java đơn giản và hiểu sâu hơn về ngôn ngữ lập trình này.
                Sau khi hoàn thành khóa học, học viên có thể tiếp tục nghiên cứu và phát triển kiến thức Java của họ để xây dựng các ứng dụng phức tạp hơn.</p>
              ):(
                <span>Chi tiết khóa học Java Web</span>
              )
            }
          <FontAwesomeIcon icon={isCollapsed ? faMinus : faPlus} className="minus__icon" onClick={toggleCollapse}/>
        </div>
      </div>
    </>
  )
}
