import React from "react";
import "./Sidebar.scss";
import {useState} from "react";
export default function Sidebar() {
    const [showAttendance, setShowAttendance] = useState(false);
    const [showBaiTap, setShowBaiTap] = useState(false);
    const [showKiemTra, setShowKiemTra] = useState(false);
    const handleShow1 = (value) => {
        setShowAttendance(!showAttendance);
    }
    const handleShow2 = (value) => {
        setShowBaiTap(!showBaiTap);
    }
    const handleShow3 = (value) => {
        setShowKiemTra(!showKiemTra);
    }
  return (
    <>
      <div className="name-sidebar">
        <span onClick={() => handleShow2('Bài tập')}>1.Bài tập</span>
      </div>
      {showBaiTap && (
          <div className="item-sidebar">
          <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
          </ul>
        </div>
      )}
      <div className="name-sidebar">
        <span onClick={() => handleShow3('Kiểm tra')}>2.Kiểm tra</span>
      </div>
    {showKiemTra && (
          <div className="item-sidebar">
          <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
          </ul>
        </div>
    )}
     <div className="name-sidebar">
        <span onClick={() => handleShow1('Điểm danh')}>3.Điểm danh</span>
      </div>
      {showAttendance && (
          <div className="item-sidebar">
          <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
          </ul>
        </div>
      )}
    </>
  );
}
