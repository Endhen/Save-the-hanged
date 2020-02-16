import React from 'react'

const InfoBar = ({trials, attempts}) => {
    return (
        <div className="infobar">
            <h1>Save the hanged</h1>
            <span>Trials : {trials-attempts} / {trials}</span>
        </div>
    )
}

export default InfoBar