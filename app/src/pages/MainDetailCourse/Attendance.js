import React from 'react'
import './Attendance.scss'
import { Link} from 'react-router-dom';
import { Tabs } from 'antd';
import { Table} from 'antd';
export default function Attendance() {
  const columns_thisCourse = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (text) => <Link>{text}</Link>,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Point',
      dataIndex: 'point',
      key: 'point',
    },
    {
      title: 'Remake',
      dataIndex: 'remake',
      key: 'remake',
    },
  ];
  const data_thisCourse = [
    {
      key: '1',
      date: '2016-10-03',
      description: 'Điểm danh',
      status: 'Có mặt',
      point: 10,
      remake: 'Tự chấm',
    },
    {
      key: '2',
      date: '2016-10-13',
      description: 'Điểm danh',
      status: 'Có mặt',
      point: 10,
      remake: 'Tự chấm',
    },
  ];
  const columns_allCourse = [
    {
      title: 'Course',
      dataIndex: 'course',
      key: 'course',
      render: (text) => <Link to="">{text}</Link>,
    },
    {
      title: 'Attendance',
      dataIndex: 'attendance',
      key: 'attendance',
      render: (text) => <Link>{text}</Link>,
    },
    {
      title: 'Take session',
      dataIndex: 'takeSession',
      key: 'takeSession',
    },
    {
      title: 'Point over taken sessions',
      dataIndex: 'pointOverTakenSession',
      key: 'pointOverTakenSession',
    },
    {
      title: 'Percent over taken sessions',
      dataIndex: 'percentOverTakenSession',
      key: 'percentOverTakenSession',
    },
  ];
  const data_allCourse = [
    {
      key: '1',
      course: 'Khóa học lập trình Java web',
      attendance: 'Khu vực điểm danh 62TH-NB',
      takeSession: 13,
      pointOverTakenSession: '26/26',
      percentOverTakenSession: '100%',
    },
  ];
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: 'This course',
      children: <Table columns={columns_thisCourse} dataSource={data_thisCourse}/>,
    },
    {
      key: '2',
      label: 'All courses',
      children: <Table columns={columns_allCourse} dataSource={data_allCourse}/>,
    },
  ];
  return (
    <>  
      <div className='attendance__wrapper'>
          <div className='attendance__notice'>
              <h6>Chú ý</h6>
              <hr/>
              <ul>
                  <li>Chỉ dành cho SV có username bắt đầu bằng kí tự "e" </li>
                  <li>Sinh viên chỉ sử dụng duy nhất 1 thiết bị để đăng nhập . Nếu sai tự chịu trách nhiệm kết quả điểm danh</li>
                  <li>Không sử dụng VPN :D</li>
              </ul>
          </div>
          <div className='attendance__content mt-4'>
              <Tabs 
                type="card"
                animated
                defaultActiveKey="1"
                items={items}
                onChange={onChange}
              />
              <hr/>
              <div className='mt-4 d-flex flex-column'>
                  <span>Taken sessions : 0</span>
                  <span>Points over taken sessions:	0 / 0  </span>
                  <span>Percentage over taken sessions:	0.0%</span>
              </div>
          </div>
      </div>
    </>
  )
}
