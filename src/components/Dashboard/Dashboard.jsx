import React from 'react';
import { Link } from 'react-router-dom';
import teacherService from '../../utils/teacherService';

class Dashboard extends React.Component {
  state = {
    teachers: []
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
          <Link to="/meditation">
            <p onClick={this.props.handleTeacherClick}>{t}</p>
          </Link>
        ))}
      </div>
    )
  }
};

export default Dashboard;