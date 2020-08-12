import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';

import { sendMessage } from '../redux/message.actions';
import '../styles/messageform.css';

class MessageForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            message: ''
        };
    };

    sendMessage = (e) => {
        e.preventDefault();
        this.props.sendMessage({
            msgid: uuidv4(),
            msg: this.state.message
        });
        this.refs.message.value = "";
    }

    render(){
        return(
            <form onSubmit={this.sendMessage} className="chatForm" >
                <div className="form-group">
                    <input type="text" placeholder="Enter Message..." 
                    value={this.state.message} className="form-control inputbox"
                    onChange={(e) => this.setState({message: e.target.value})}
                    ref="message"
                />
                </div>
                <button className="button btn-success">Send</button>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        sendMessage: (message) => dispatch(sendMessage(message))
    }
}

export default connect(null,mapDispatchToProps)(MessageForm);