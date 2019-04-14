import React from 'react';
import { Link } from 'react-router-dom';
import teacherService from '../../utils/teacherService';

class Dashboard extends React.Component {
  state = {
    teachers: [],
    teacher: ''
  }

  handleTeacherClick = (e) => {
    this.setState({
      teacher: e.target.innerHTML
    })
  }

  /*----- Lifecycle Methods -----*/
  async componentDidMount() {
    const teachers = await teacherService.getAllTeachers();
    this.setState({
      teachers
    })
  }

  render() {
    return (
      <div>
        <h1>Welcome {this.props.user.username}</h1>
        {this.state.teachers.map(t => (
          <Link
            to={{
              pathname: "/meditation",
              state: { teacher: this.state.teacher }
            }}
            teacher={this.state.teacher}
          >
            <p onClick={this.handleTeacherClick}>{t}</p>
          </Link>
        ))}
      </div>
    )
  }
};

export default Dashboard;