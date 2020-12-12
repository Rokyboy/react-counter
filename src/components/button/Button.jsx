import React from 'react'

const Button = ({children, disabled = false, onClick}) => {
    return(
        <button onClick={onClick} disabled={disabled}>
            {
              children 
            }
        </button>
    )
}

export default Button