import React from 'react'

const Letter = (props) => {
  const {myWord} = props;

  const letterList = myWord.map(letter => {

    return (
        <div key={letter.letterID}>
          <h1 className='words'>{letter.letter}</h1>
        </div>
    )
  });

  return (
      <div className='words-frame'>
        {letterList}
      </div>
  )
};

export default Letter
