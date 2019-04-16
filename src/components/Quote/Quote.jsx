import React from 'react';
import './Quote.css';

class Quote extends React.Component {
  state = {
    renderInitialMessage: true,
    renderFinalMessage: false
  }

  componentDidMount() {
    // gets random quote from selected teacher
    this.props.handleRandomQuote();

    setTimeout(() => {
      this.setState({
        renderInitialMessage: false,
        renderFinalMessage: true
      })
    }, 8000)
  }

  render() {
    return (
      <div>
        { this.state.renderInitialMessage ?
          <h3>focus your energy on this next message.</h3>
          :
          null
        }
        { this.state.renderFinalMessage ?
        <div className="quote-message">
          <p>The wise {this.props.teacher} once said...</p>  
          <p>"{this.props.quote}"</p>
        </div>
          :
          null
        }
      </div>
    )
  }
}

export default Quote;