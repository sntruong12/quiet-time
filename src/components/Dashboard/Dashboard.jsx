import React from 'react';
import { Link } from 'react-router-dom';
import teacherService from '../../utils/teacherService';
import Tooltip from '@material-ui/core/Tooltip';
import './Dashboard.css'

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
      <div className="dashboard-div">
        <h1>
          welcome <Tooltip title={`He/She/Non-Binary-Pronoun who goes by ${this.props.user.username}`} placement="top"><span>grasshopper</span></Tooltip>
        </h1>
        <hr/>
        <h5>select a sensei below to learn from</h5>
        {this.state.teachers.map(t => (
          <div>
            <Link className="dashboard-link" to="/meditation">
              <h3 onClick={this.props.handleTeacherClick}>{t}</h3>
            </Link>
          </div>
        ))}
      </div>
    )
  }
};

export default Dashboard;