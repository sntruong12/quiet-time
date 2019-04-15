import React from 'react';
import { Redirect } from 'react-router-dom';
import Inhale from '../SVG/Inhale';
import Hold from '../SVG/Hold';
import Exhale from '../SVG/Exhale';

class Meditation extends React.Component {
  state = {
    renderInitialMessage: true,
    renderInhale: false,
    renderHold: false,
    renderExhale: false,
    renderFinalMessage: false,
    redirect: false
  }

  /*----- Lifecycle Methods -----*/
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        renderInitialMessage: false,
        renderInhale: true
      })
    }, 8000)
    setTimeout(() => {
      this.setState({
        renderInhale: false,
        renderHold: true
      })
    }, 16000)
    setTimeout(() => {
      this.setState({
        renderHold: false,
        renderExhale: true
      })
    }, 24000)
    setTimeout(() => {
      this.setState({
        renderExhale: false,
        renderFinalMessage: true
      })
    }, 34000)
    setTimeout(() => {
      this.setState({
        renderFinalMessage: false,
        redirect: true
      })
    }, 44000)
  }

  render() {
    return (
      <div>
        { this.state.renderInitialMessage ?
          <h3>let us meditate</h3> 
          :
          null
        }
        { this.state.renderInhale ? <Inhale /> : null }
        { this.state.renderHold ? <Hold /> : null }
        { this.state.renderExhale ? <Exhale /> : null }
        { this.state.renderFinalMessage ?
          <h3>feeling focused grasshopper?</h3> 
          :
          null
        }
        { this.state.redirect ? <Redirect to="/quote"/> : null }
      </div>
    )
  }
}

export default Meditation;