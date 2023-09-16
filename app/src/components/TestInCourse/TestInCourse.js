import React from 'react'
import './TestInCourse.scss'
import { Button,Space } from 'antd';
export default function TestInCourse() {
  return (
    <div className='container mt-4'>
        <div className='row'>
          <div className='col-md-7 question__wrapper'>
            <label className='container mt-5 fw-bold'>Question 1</label>
            <div className='question__text container mt-3 '>
                <p>lorem ipsum dolor sit amet consectetur adipisicing elit
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
            </div>
            <div className='answer__choose container'>
              <Space direction="vertical" style={{ width: '100%' , marginTop:'10px'}}>
                  <Button block size="large">
                    <label>A</label>
                    lorem ipsum dolor
                  </Button>
                  <Button block size="large">
                    <label>B</label>
                    lorem ipsum dolor
                  </Button>
                  <Button block size="large">
                    <label>C</label>
                    lorem ipsum dolor
                  </Button>
                  <Button block size="large">
                    <label>D</label>
                    lorem ipsum dolor
                  </Button>
              </Space>
            </div>
            <div className='direction__button d-flex justify-content-end align-items-center container mt-5'>
              <Space wrap>
                <Button >Câu trước</Button>
                <Button >Câu tiếp theo</Button>
              </Space>
            </div>
          </div>
          <div className='col-md-5 answer__wrapper'>
              <div className='time__remaining d-flex justify-content-start flex-column align-items-center'>
                <span>Thời gian làm bài</span>
                <span>30 phút</span>
              </div>
              <div>
                  <span className='d-flex justify-content-start flex-column align-items-center mt-4'>
                    <label className='fw-bold mb-2'>Phiếu điền đáp án</label>
                    <p>Bạn có thể ấn chọn vào đáp án trong đề để trả lời</p>
                  </span>
              </div>
              <div className='all__answer__wrapper'>
                <Space wrap style={{display:'contents'}}>
                  <Button icon="1" size='large'/>
                  <Button icon="1" size='large'/>
                  <Button icon="1" size='large'/>
                  <Button icon="1" size='large'/>
                  <Button icon="1" size='large'/>
                  <Button icon="1" size='large'/>
                  <Button icon="1" size='large'/>
                </Space>
              </div>
              <div className='submit__exit__exam p-2'>
                <Space direction="vertical" style={{ width: '100%'}}>
                  <Button block size='large'>Thoát</Button>
                <Button block type="primary" size='large' style={{backgroundColor:'rgb(25, 118, 210)'}}>Nộp bài</Button>
                </Space>
              </div>
          </div>
        </div>
    </div>
  )
}
