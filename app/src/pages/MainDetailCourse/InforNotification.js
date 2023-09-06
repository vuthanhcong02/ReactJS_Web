import React from 'react'
import './InforNotification.scss'
import { faMinus , faPlus} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBell} from '@fortawesome/free-solid-svg-icons'
import { useCollapse } from '../../hook/useCollapse'
export default function InforNotification() {
  const {isCollapsed,toggleCollapse} = useCollapse()
  return (
    <>
      <div className="contain-notification">
        <div className="contain-notification__icon">
          <FontAwesomeIcon icon={faBell} shake className="bell__icon" />
          </div>
        <div className="contain-notification__title">
            <span>FORUM</span>
            <span>Thông báo</span>
        </div>
      </div>
        <div className="notification__content">
           {
             isCollapsed ? (<>
              <span>General news and announcements</span>
            <span>(No announcements have been posted yet.)</span>
             </> 
             ):(
              <><div>General news and announcements</div></>
             )
           }
            <FontAwesomeIcon icon={isCollapsed ? faMinus : faPlus} className="minus__icon" onClick={toggleCollapse}/>
        </div>
    </>
  )
}
