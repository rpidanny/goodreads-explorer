import React from 'react'

import Quotes from '../../data/quotes.json'

import './style.css'

const Quote = (props) => {
  const quoteCount = Quotes.length
  const index = Math.floor(Math.random() * quoteCount)
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
