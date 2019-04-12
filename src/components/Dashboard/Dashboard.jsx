import React from 'react';
import teacherService from '../../utils/teacherService';

class Dashboard extends React.Component {
  state = {
    teachers: []
  }

  async componentDidMount() {
    const teachers = await teacherService.getAllTeachers();
    this.setState({
      teachers
    })
  }

  render() {
    return (
      <div>
        <h1>Welcome add user name here</h1>
        {this.state.teachers.map(t => (
          <p>{t}</p>
        ))}
      </div>
    )
  }
};

export default Dashboard;