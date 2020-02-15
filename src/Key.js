import React from 'react'
import PorpTypes from 'prop-types'


const Key = ({letter, compare}) => (
    <div className={`key__${letter}`} onClick={() => compare(letter)}>
        {letter}
    </div>
)

Key.propTypes = {
    letter: PorpTypes.string.isRequired,
    compare: PorpTypes.func.isRequired
}

export default Key