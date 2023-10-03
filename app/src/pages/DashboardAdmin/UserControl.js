import React ,{ useState, useEffect } from 'react';
import { Table ,Button, Input} from 'antd';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
import UserApi from '../../api/apiUser';
const { Search } = Input;
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        
      }
    ],
    filterSearch: true,
    // sort by a-z
    onFilter: (value, record) => record.name.startsWith(value),
    
    width: '25%',
  },

  {
    title: 'Email',
    dataIndex: 'email',
    width: '30%',
  },
  {
    title: 'Role',
    dataIndex: 'role',
    filters: [
      {
        text: 'Teacher',
        value: 'teacher',
      },
      {
        text: 'Student',
        value: 'student',
      },
    ],
    onFilter: (value, record) => record.role.startsWith(value),
    filterSearch: true,
    width: '20%',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
        <>
            <Button icon={<EditOutlined />} className="m-1"></Button>
            <Button icon={<DeleteOutlined />} danger></Button>
        </>
    )
  }
];
const onChange = (pagination, filters, sorter, extra) => {
  // console.log('params', pagination, filters, sorter, extra);
  if(pagination.pageSize !== 10){
    pagination.pageSize = 5;
    pagination.current = 1;

  }

};
const UserControl = () => {
  const [dataUser, setDataUser] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await UserApi.getAll();
      setDataUser(response.data.users);
      setLoadingData(false);
      console.log(response.data);
    };
    fetchData();
  },[]);
  return (
  <Table columns={columns} dataSource={dataUser} onChange={onChange} pagination={{ pageSize: 4 }} 
          bordered title={() => 'User Control'} size="middle" style={{ width: '100%',textAlign: 'center'
          }} loading={loadingData}>
  </Table>
  )
}
export default UserControl;