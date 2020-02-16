import React from 'react'
import PorpTypes from 'prop-types'


const Key = ({letter, compare, used}) => (
    <div className={`case key_${letter} ${used?'used':''}`} onClick={() => compare(letter)}>
        {letter}
    </div>
)

Key.propTypes = {
    letter: PorpTypes.string.isRequired,
    compare: PorpTypes.func.isRequired
}

export default Key