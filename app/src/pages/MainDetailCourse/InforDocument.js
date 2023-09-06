import React from 'react'
import './InforDocument.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFile, faMinus,faPlus} from '@fortawesome/free-solid-svg-icons'
import { useCollapse } from '../../hook/useCollapse'
export default function InforDocument() {
  const{isCollapsed,toggleCollapse} = useCollapse()
  return (
    <>
        <div className="contain__information__document__name">
          <div className="contain__information__document__wrapper__icon">
          <FontAwesomeIcon icon={faFile} className="file__icon"/>
          </div>
          <div className="contain__document__title">
            <span>Tài liệu khóa học</span>
          </div>
        </div>
        <div className="contain__information__document__description">
         {
            isCollapsed ? (
             <p>Hiện tại chưa có tài liệu nào !</p>
              ):(
                <span>Tài liệu cho khóa học</span>
              )
            }
          <FontAwesomeIcon icon={isCollapsed ? faMinus : faPlus} className="minus__icon" onClick={toggleCollapse}/>
        </div>
    </>
  )
}
