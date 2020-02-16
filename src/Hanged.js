import React from 'react'
import PropTypes from 'prop-types'

const Hanged = ({attempts}) => {
    return (
        <div className="hanged">
            {(attempts >= 1)?<img alt="hanged" src={require(`./images/${attempts}.png`)}/>:''}
        </div>
    )
}

Hanged.propTypes = {
    attempts: PropTypes.number
}

export default Hanged