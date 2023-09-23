import React from "react";
import {Link} from "react-router-dom";
import { SmileOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';
export default function ShowResult() {
    return (
    <div className='result__wrapper'>
        <Result
            icon={<SmileOutlined />}
            title="Bạn đã hoàn thành bài kiểm tra!"
          />
        <div className="d-flex justify-content-center align-items-center flex-column">
                <h6 className="mb-4 fs-3">Điểm của bạn : 100</h6>
                <Link to="/course/view/1">
                    <Button type="primary">Quay lại khóa học</Button>
                </Link>
        </div>
    </div>
    )
}