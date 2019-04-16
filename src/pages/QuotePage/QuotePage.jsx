import React from 'react';
import Quote from '../../components/Quote/Quote';

const QuotePage = (props) => (
  <div>
    <Quote 
      user={props.user}
      quote={props.quote}
      teacher={props.teacher}
      handleRandomQuote={props.handleRandomQuote}
    />
  </div>
)

export default QuotePage;