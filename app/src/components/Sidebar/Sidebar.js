import React from "react";
import "./Sidebar.scss";
import {useState} from "react";
export default function Sidebar({handleToggleItem}) {
  const [sidebarState, setSidebarState] = useState({
    showAttendance: false,
    showBaiTap: false,
    showKiemTra: false,
  });

  const [activeItemSidebar, setActiveItemSidebar] = useState(null);
  const [activeItemOption, setActiveItemOption] = useState(null);
  const handleShow = (name) => {
    const updatedState = { ...sidebarState };
    if (name === 'showBaiTap') {
      updatedState.showKiemTra = false;
      updatedState.showAttendance = false;
    }
    if (name === 'showKiemTra') {
      updatedState.showBaiTap = false;
      updatedState.showAttendance = false;
    }
    if (name === 'showAttendance') {
      updatedState.showBaiTap = false;
      updatedState.showKiemTra = false;
    }
    updatedState[name] = !updatedState[name];
    setSidebarState(updatedState);
    setActiveItemSidebar(name);
  };
  const handleClickItem = (name) => {
    setActiveItemOption(name);
    handleToggleItem(name);
  }
  return (
    <>
      <div className={`name-sidebar ${activeItemSidebar === 'showBaiTap' ? 'active-name-sidebar' : ''}`}>
        <span onClick={() => handleShow('showBaiTap')}>1.Bài tập</span>
      </div>
      {sidebarState.showBaiTap && (
        <div className="item-sidebar">
          <ul>
            <li onClick={() => handleClickItem('BaiTap1')} className={activeItemOption === 'BaiTap1' ? 'active-item-sidebar' : ''}>Bài tập 1</li>
            <li onClick={() => handleClickItem('BaiTap2')} className={activeItemOption === 'BaiTap2' ? 'active-item-sidebar' : ''}>Bài tập 2</li>
            <li onClick={() => handleClickItem('BaiTap3')} className={activeItemOption === 'BaiTap3' ? 'active-item-sidebar' : ''}>Bài tập 3</li>
          </ul>
        </div>
      )}
      <div className={`name-sidebar ${activeItemSidebar === 'showKiemTra' ? 'active-name-sidebar' : ''}`}>
        <span onClick={() => handleShow('showKiemTra')}>2.Kiểm tra</span>
      </div>
      {sidebarState.showKiemTra && (
        <div className="item-sidebar">
          <ul>
            <li onClick={() => handleClickItem('KiemTra1')} className={activeItemOption === 'KiemTra1' ? 'active-item-sidebar' : ''}>Bài kiểm tra 1</li>
            <li onClick={() => handleClickItem('KiemTra2')} className={activeItemOption === 'KiemTra2' ? 'active-item-sidebar' : ''}>Bài kiểm tra 2</li>
            <li onClick={() => handleClickItem('KiemTra3')} className={activeItemOption === 'KiemTra3' ? 'active-item-sidebar' : ''}>Bài kiểm tra 3</li>
          </ul>
        </div>
      )}
      <div className={`name-sidebar ${activeItemSidebar === 'showAttendance' ? 'active-name-sidebar' : ''}`}>
        <span onClick={() => handleShow('showAttendance')}>3.Điểm danh</span>
      </div>
      {sidebarState.showAttendance && (
        <div className="item-sidebar">
          <ul>
            <li onClick={() => handleClickItem('DiemDanh')} className={activeItemOption === 'DiemDanh' ? 'active-item-sidebar' : ''}>Điểm danh</li>
          </ul>
        </div>
      )}
    </>
  );
}
