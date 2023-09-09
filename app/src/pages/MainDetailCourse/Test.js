import React from 'react'
import {Button,Modal} from 'antd'
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
export default function Test({data}) {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };
  const handleOk = () => {
    navigate('/course/view/1/test/{part}'.replace('{part}',data));  
  }
  return (
    <> 
      <h5>Bài kiểm tra online-{data}</h5>
      <div className="card__test">
          <span>Ấn vào nút để tiến hành kiểm tra</span>
          <Button type="link" onClick={showModal}>
        Kiểm tra
      </Button>
      <Modal
        title="Xác nhận"
        open={open}
        onOk={handleOk}
        onCancel={hideModal}
        okText="Ok"
        cancelText="Hủy"
      >
        <p>Bạn có chắc chắn muốn vào chế độ kiểm tra ?</p>
      </Modal>
      </div>
    </>
  )
}
