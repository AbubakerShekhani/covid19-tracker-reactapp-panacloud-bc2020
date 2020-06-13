import React from 'react'

const Cards = ({summaryData}) => {

  const { confirmed } = summaryData;

  if (!confirmed) {
    return 'Loading...';
  }

  return (
    <div>
    <h1>Cards</h1>
    { console.log( confirmed.value ) }
    <p>{confirmed.value}</p>
    </div>
  )
}

export default Cards