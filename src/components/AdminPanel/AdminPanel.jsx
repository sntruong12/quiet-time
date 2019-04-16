import React from 'react';
import userService from '../../utils/userService';
import './AdminPanel.css';

class AdminPanel extends React.Component {
  state = {
    users: []
  }

  handleDeleteUser = async (e) => {
    e.preventDefault();
    let email = e.target.id;
    let user = await userService.deleteUser(email);
    console.log(user)
  }
  
  async componentDidMount() {
    let users = await userService.getAllUsers();
    this.setState({
      users
    })
  }

  render() {
    return (
      <div>
      <h3>Manage Users</h3>
      {
        this.state.users.map(user => (
          <div className="user-card">
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.level}</p>
            <button
              id={user.email}
              type="submit"
              onClick={this.handleDeleteUser}
            >
              delete
            </button>
          </div>
        ))
      }
      </div>
    )
  }
}

export default AdminPanel;