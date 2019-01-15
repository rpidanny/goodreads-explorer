import React from 'react'

import Quotes from '../../data/quotes.json'

import './style.css'

const Quote = (props) => {
  const index = Math.floor(Math.random() * Quotes.length)
  const quote = Quotes[index]
  return (
    <div className='quote'>
      <span className='quoteText'>{quote.text}</span>
      <br />
      <span className='quoteAuthorOrTitle'>- {quote.author}</span>
    </div>
  )
}

export default Quote
