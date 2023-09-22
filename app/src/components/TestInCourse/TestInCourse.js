import React from 'react'
import { useState } from 'react';
import './TestInCourse.scss'
import { Button,Space } from 'antd';
import questions from './questions';
import Timer from './Timer';
export default function TestInCourse() {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const handleOptionClick = (option,id) => {
    if (selectedOptions[id] === option) {
      // Nếu đáp án đã được chọn mà lại được nhấp lần nữa, hãy bỏ active nó
      setSelectedOptions({
        ...selectedOptions,
        [id]: null
      });
    } else {
      // Nếu đáp án khác được chọn, hãy chọn đáp án mới và bỏ active đáp án trước đó (nếu có)
      setSelectedOptions({
        ...selectedOptions,
        [id]: option
      });
    }
  };
  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  }
  const handlePrevQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  }
  const handleClicktoQuestion = (id) => {
    setCurrentQuestion(id-1);
  }
  console.log(selectedOptions);
  return (
    <div className='container test__wrapper'>
        <div className='row'>
          <div className='col-md-7 question__wrapper'>
            <label className='container mt-5 fw-bold'>Question {currentQuestion+1}</label>
            <div className='question__text container mt-3 '>
                <p>
                    {questions[currentQuestion].questionText}
                </p>
            </div>
            <div className='answer__choose container'>
              <Space direction="vertical" style={{ width: '100%' , marginTop:'10px'}}>
                      { questions[currentQuestion].answerOptions.map((answer,index) =>(
                         <Button block size="large"
                         key={index}
                         className={selectedOptions[questions[currentQuestion].id]===answer.option ? 'activeChooseOption' : ''}
                         onClick={() => handleOptionClick(answer.option, questions[currentQuestion].id)}>
                         <label>{answer.option}</label>
                          {answer.answerText}
                        </Button>
                      ))
                      }
              </Space>
            </div>
            <div className='direction__button d-flex justify-content-end align-items-center container mt-5'>
              <Space wrap>
                <Button onClick={handlePrevQuestion} disabled={currentQuestion === 0}>Câu trước</Button>
                <Button onClick={handleNextQuestion} disabled={currentQuestion === questions.length-1}>Câu tiếp theo</Button>
              </Space>
            </div>
          </div>
          <div className='col-md-5 answer__wrapper'>
              <div className='time__remaining d-flex justify-content-start flex-column align-items-center'>
                <span>Thời gian làm bài</span>
                <span><Timer/></span>
              </div>
              <div>
                  <span className='d-flex justify-content-start flex-column align-items-center mt-4'>
                    <label className='fw-bold mb-2'>Phiếu điền đáp án</label>
                    <p>Bạn có thể ấn chọn vào đáp án trong đề để trả lời</p>
                  </span>
              </div>
              <div className='all__answer__wrapper'>
                <Space wrap style={{display:'contents'}}>
                  {
                    questions.map((question,index) => (
                      <Button key={index} icon={index+1} size='large'
                      onClick={() => handleClicktoQuestion(question.id)}
                      >- {selectedOptions[question.id] && selectedOptions[question.id]}</Button>
                  ))}
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
