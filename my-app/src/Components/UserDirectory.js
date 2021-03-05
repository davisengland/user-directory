import React, {Component} from 'react'
import UserCard from './UserCard'
import Nav from './Nav'
import data from '../data'

class UserDirectory extends Component {
    constructor() {
        super()
        this.state = {
            data,
            index: 0
        }
    }

    previous = () => {
        if(this.state.index > 0) {
            this.setState({index: this.state.index - 1})
        }
    }

    next = () => {
        if(this.state.index < this.state.data.length - 1) {
            this.setState({index: this.state.index + 1})
        }
    }

    render() {
        return(
            <div className='user-directory'>
                <UserCard data={this.state.data} index={this.state.index}/>
                <Nav previous={this.previous} next={this.next}/>
            </div>
        )
    }
}

export default UserDirectory