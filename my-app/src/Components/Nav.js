import React from 'react'

const Nav = (props) => {

    return(
        <div className='buttons'>
            <button className='nav-buttons' onClick={props.previous}>&lt; Previous</button>
            <div>
                <button className='blue-buttons'>Edit</button>
                <button className='blue-buttons'>Delete</button>
                <button className='blue-buttons'>New</button>
            </div>
            <button className='nav-buttons' onClick={props.next}>Next &gt;</button>
        </div>
    )
}

export default Nav