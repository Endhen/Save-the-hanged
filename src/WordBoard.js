import React from 'react'
import PropTypes from 'prop-types'

const WordBoard = ({word, letterDiscovered}) => {
    return (
        <div className="wordboard">
            {word.map((letter,index) => (
            <div className="case board-letter" key={index}>
                {letterDiscovered.includes(letter)?letter:"_"}
            </div>
            ))}
        </div>
    )
}

WordBoard.propTypes = {
    word: PropTypes.array,
    letterDiscovered: PropTypes.array,
}

export default WordBoard