import React, { Component } from 'react';
import {fetchUsers} from '../actions'
import {connect} from 'react-redux'


class UserHeader extends Component {
    componentDidMount(){
        this.props.fetchUsers(this.props.userId)
    }

    render() {
        // console.log(this.props.userId)
        const {user} = this.props

        if(!user) {return null}
        return (
            <div className="header">{user.name}</div>
        )
    }
}
//ownProps is a reference to the props that are about to be sent into the componentDidMount.
const mapStateToProps = (state, ownProps) => {
    return {user: state.users.find(user => user.id === ownProps.userId)}
}


export default connect(mapStateToProps, {fetchUsers})(UserHeader);