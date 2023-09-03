import React from "react";
import "./Sidebar.scss";
import {useState} from "react";
export default function Sidebar() {
    const [showGeneral, setShowGeneral] = useState(false);
    const [showBaiTap, setShowBaiTap] = useState(false);
    const [showKiemTra, setShowKiemTra] = useState(false);
    const handleShow1 = (value) => {
        setShowGeneral(!showGeneral);
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
         <span to="" onClick={()=>handleShow1('General')}>1.General</span>
      </div>
      {showGeneral && (
          <div className="item-sidebar">
          <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
          </ul>
        </div>
      )}
      <div className="name-sidebar">
        <span onClick={() => handleShow2('Bài tập')}>2.Bài tập</span>
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
        <span onClick={() => handleShow3('Kiểm tra')}>3.Kiểm tra</span>
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
    </>
  );
}
