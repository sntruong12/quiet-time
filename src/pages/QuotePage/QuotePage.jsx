import React from 'react';
import Quote from '../../components/Quote/Quote';

const QuotePage = (props) => (
  <div>
    <Quote 
      user={props.user}
      handleRandomQuote={props.handleRandomQuote}
    />
  </div>
)

export default QuotePage;