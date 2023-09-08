import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './MyCourse.scss'
import Form from 'react-bootstrap/Form';
import CardCourse from '../../components/CardCourse/CardCourse';
export default function MyCourse() {
  const [allCourse, setAllCourse] = React.useState('');
  const [sortBy, setSortBy] = React.useState('');
  const handleChange = (event) => {
    setAllCourse(event.target.value);
  };
  const handleChangeSort = (event) => {
    setSortBy(event.target.value);
  }
  return (
    <>
      <Header/>
      <div className="container my__course__wrapper">
          <span className="my__course__title">Course overview</span>
          <hr/>
          <div className='my__course__filter__options'>
          <FormControl sx={{ m: 0, minWidth: 80 }} size="small">
            <InputLabel id="demo-select-small-label">Time</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={allCourse}
                label="Time"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>All</em>
                </MenuItem>
                <hr/>
                <MenuItem value={10}>In progress</MenuItem>
                <MenuItem value={20}>Future</MenuItem>
                <MenuItem value={30}>Last</MenuItem>
                <MenuItem value={40}>Completed</MenuItem>
              </Select>
          </FormControl>
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              style={{width: '16%',border: '#6a737b 1px solid', margin: '0 10px'}}
            />
            <FormControl sx={{ m: 0, minWidth: 100 }} size="small">
              <InputLabel id="demo-select-small-label">Sort by</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={sortBy}
                label="Sort by"
                onChange={handleChangeSort}
              >
                <MenuItem value="default">
                  Sort by course name
                </MenuItem>
                <MenuItem value={10}>Sort by last accessed</MenuItem>
              </Select>
            </FormControl>

          </div>
          <div className="my__course__list">
              <div className="my__course__item">
                  <CardCourse moreBtn={true}/>             
              </div>
          </div>
      </div>
      <Footer/>
    </>
  )
}
