import React from "react";
import { useState } from "react";
import Header from "../../components/Header/Header";
import "./Dashboard.scss";
import { Select, Space, Input, Empty } from "antd";
import CalendarList from "../../components/Calendar/Calendar";
import Footer from "../../components/Footer/Footer";
import { Button, Modal, Form, DatePicker } from "antd";
export default function Dashboard() {
  const [result, setResult] = useState([]);
  const [modal1Open, setModal1Open] = useState(false);
  const { RangePicker } = DatePicker;
  const {TextArea} = Input
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const handleChangeSort = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <Header />
      <div className="container">
        <h4 className="dashboard__heading">Dashboard</h4>
        <div className="dashboard__wrapper">
          <div className="dashboard__filter__search">
            <div className="dashboard__filter">
              <h5 className="mb-4">Timeline</h5>
              <div className="dashboard__filter__item">
                <Space wrap>
                  <Select
                    defaultActiveFirstOption
                    defaultValue="All"
                    style={{
                      width: 150,
                      height: 36,
                    }}
                    onChange={handleChange}
                    options={[
                      {
                        value: "0",
                        label: "All",
                      },
                      {
                        value: "1",
                        label: "next 7 days",
                      },
                      {
                        value: "2",
                        label: "next 30 days",
                      },
                      {
                        value: "3",
                        label: "next 2 months",
                      },
                      {
                        value: "4",
                        label: "next 3 months",
                      },
                    ]}
                  />
                  <Select
                    defaultActiveFirstOption
                    defaultValue="Sort by dates"
                    style={{
                      width: 150,
                      height: 36,
                    }}
                    onChange={handleChangeSort}
                    options={[
                      {
                        value: "0",
                        label: "Sort by dates",
                      },
                      {
                        value: "1",
                        label: "Sort by courses",
                      },
                    ]}
                  />
                </Space>
              </div>
            </div>
            <div className="dashboard__search">
              <Input
                placeholder="Search by activity type or name"
                allowClear
                onPressEnter
                style={{ padding: "5px 20px" }}
              />
            </div>
          </div>
          <hr className="mt-4" />
          <div className="dashboard__content">
            <div className="result__filter__search">
              {result ? <Empty /> : result}
            </div>
            <div className="dashboard__calendar__wrapper">
              <div className="dashboard__calendar__title">
                <h5>Calendar</h5>
                <Button type="primary" onClick={() => setModal1Open(true)}>
                  New Event
                </Button>
                <Modal
                  title="New Event"
                  style={{
                    top: 100,
                  }}
                  open={modal1Open}
                  onOk={() => setModal1Open(false)}
                  onCancel={() => setModal1Open(false)}
                >
                <hr className="p-2"/>
                  <Form>
                    <Form.Item label="Title">
                      <Input
                        placeholder="Enter your event"
                        allowClear
                      />
                    </Form.Item>
                    <Form.Item label="Date">
                        <RangePicker showTime style={{width: "100%"}} showToday />
                    </Form.Item>
                    <Form.Item label="Description">
                      <TextArea
                        placeholder="Enter your description"
                        allowClear
                      />
                    </Form.Item>
                  </Form>
                </Modal>
              </div>
              <div className="dashboard__calendar__main">
                <CalendarList />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
