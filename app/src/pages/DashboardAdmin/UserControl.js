import React ,{ useState, useEffect } from 'react';
import { Table ,Button, Input} from 'antd';
import {EditOutlined, DeleteOutlined , SearchOutlined} from '@ant-design/icons';
import UserApi from '../../api/apiUser';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filterDropdown : ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => {
      return (
        <div style={{ padding: 8 ,display: 'flex', flexDirection: 'column'}}>
          <Input
            autoFocus
            placeholder="Search name"
            style={{ width: 200 }}
            onChange={(event)=>{
              setSelectedKeys(event.target.value ? [event.target.value] :[]);
              confirm({clearFilters: false});
            }}
            value={selectedKeys[0]}
            onPressEnter={()=>{
              confirm();
            }}
            onBlur={()=>{
              confirm();
            }}
            >
          </Input>
          <div>
            <Button type="primary" style={{ width: 50 ,alignSelf: 'end',padding: 5 ,margin: 5}}
              onClick={() => {
                confirm();
                clearFilters();
              }}
              >Search</Button>
            <Button style={{ width: 50 ,alignSelf: 'end',padding: 5 ,marginTop: 5}} 
              onClick={() => clearFilters()}>
              Clear</Button>
          </div>
        </div>
      );
    },
    filterIcon: (filtered) => {
      return <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />;
    },
    // filterSearch: true,
    // sort by a-z
    onFilter: (value, record) => {
    return record.name.toLowerCase().includes(value.toLowerCase());
    },
    width: '25%',

  },

  {
    title: 'Email',
    dataIndex: 'email',
    filterDropdown : ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => {
      return (
        <div style={{ padding: 8 ,display: 'flex', flexDirection: 'column'}}>
          <Input
            autoFocus
            placeholder="Search by email"
            style={{ width: 200 }}
            onChange={(event)=>{
              setSelectedKeys(event.target.value ? [event.target.value] :[]);
              confirm({clearFilters: false});
            }}
            value={selectedKeys[0]}
            onPressEnter={()=>{
              confirm();
            }}
            onBlur={()=>{
              confirm();
            }}
            >
          </Input>
          <div>
            <Button type="primary" style={{ width: 50 ,alignSelf: 'end',padding: 5 ,margin: 5}}
              onClick={() => {
                confirm();
                clearFilters();
              }}
              >Search</Button>
            <Button style={{ width: 50 ,alignSelf: 'end',padding: 5 ,marginTop: 5}} 
              onClick={() => clearFilters()}>
              Clear</Button>
          </div>
        </div>
      );
    },
    filterIcon: (filtered) => {
      return <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />;
    },
    // filterSearch: true,
    // sort by a-z
    onFilter: (value, record) => {
    return record.email.toLowerCase().includes(value.toLowerCase());
    },
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
  <Table columns={columns} dataSource={dataUser}  pagination={{ pageSize: 4 }} 
          bordered title={() => 'User Control'} size="middle" style={{ width: '100%',textAlign: 'center'
          }} loading={loadingData}>
  </Table>
  )
}
export default UserControl;