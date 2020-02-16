import React from 'react'
import PropTypes from 'prop-types'

const GameTable = ({word, letterDiscovered}) => {
    return word.map((letter,index) => (
        <div className="board-letter" key={index}>
            {letterDiscovered.includes(letter)?letter:"_"}
        </div>
    ))
}

GameTable.propTypes = {
    word: PropTypes.array,
    letterDiscovered: PropTypes.array,
}

export default GameTable