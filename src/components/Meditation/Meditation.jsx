import React from 'react';
import quotesService from '../../utils/quotesService';
import Inhale from '../SVG/Inhale';
import Hold from '../SVG/Hold';
import Exhale from '../SVG/Exhale';

class Meditation extends React.Component {
  state = {
    quotes: []
  }

  /*----- Lifecycle Methods -----*/
  async componentDidMount() {
    const quotes = await quotesService.getQuotes('SonYungMoon');
    this.setState({
      quotes,
    })
  }

  render() {
    return (
      <div>
        <Inhale />
        <Hold />
        <Exhale />
      </div>
    )
  }
}

export default Meditation;