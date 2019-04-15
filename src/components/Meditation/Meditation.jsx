import React from 'react';
import Inhale from '../SVG/Inhale';
import Hold from '../SVG/Hold';
import Exhale from '../SVG/Exhale';

class Meditation extends React.Component {
  constructor() {
    super();
    this.state = {
      renderInitialMessage: true,
      renderInhale: false,
      renderHold: false,
      renderExhale: false,
      renderFinalMessage: false
    }
    
    this.interval = null
  }

  /*----- Lifecycle Methods -----*/
  async componentDidMount() {
    this.interval = setTimeout(() => {
      this.setState({
        renderInitialMessage: false,
        renderInhale: true
      })
    }, 8000)
    this.interval = setTimeout(() => {
      this.setState({
        renderInhale: false,
        renderHold: true
      })
    }, 16500)
    this.interval = setTimeout(() => {
      this.setState({
        renderHold: false,
        renderExhale: true
      })
    }, 24500)
    this.interval = setTimeout(() => {
      this.setState({
        renderExhale: false,
        renderFinalMessage: true
      })
    }, 34500)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        { this.state.renderInitialMessage ?
          <h3>let's meditate</h3> 
          :
          null
        }
        { this.state.renderInhale ? <Inhale /> : null }
        { this.state.renderHold ? <Hold /> : null }
        { this.state.renderExhale ? <Exhale /> : null }
        { this.state.renderFinalMessage ?
          <h3>feel focus grasshopper?</h3> 
          :
          null
        }
      </div>
    )
  }
}

export default Meditation;