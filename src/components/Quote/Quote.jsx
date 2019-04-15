import React from 'react';

class Quote extends React.Component {
  constructor() {
    super();
    this.state = {
      renderInitialMessage: true,
      renderFinalMessage: false
    }
    
    this.interval = null
  }

  componentDidMount() {
    this.props.handleRandomQuote();
  }

  render() {
    return (
      <div>
        Quotes!
      </div>
    )
  }
}

export default Quote;