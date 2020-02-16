import React from 'react'
import PropTypes from 'prop-types'

import Key from './Key'

const ALPHABET = 'AZERTYUIOPQSDFGHJKLMWXCVBN'.split('')

const KeyBoard = ({compare, hasBeenUsed}) => {
    return (
        <div className="keyboard">
            {ALPHABET.map((letter) => (
                <Key 
                    letter={letter} 
                    key={letter}
                    used={hasBeenUsed(letter)} 
                    compare={compare}
                />
            ))}
        </div>
    )
}

KeyBoard.propTypes = {
    compare: PropTypes.func.isRequired,
    hasBeenUsed: PropTypes.func.isRequired
}

export default KeyBoard