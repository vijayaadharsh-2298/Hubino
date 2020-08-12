import React, { Component } from 'react';
import { connect } from 'react-redux';

class MessageDisplay extends Component{

    style = {
        backgroundColor: 'green',
        padding: '10px',
        color: 'white',
        textAlign: 'right',
        borderRadius: '10px'
    }

    styleTwo = {
        backgroundColor: 'green',
        padding: '10px',
        color: 'white',
        marginBotton: '2px',
        borderRadius: '10px'
    }
    
    render() {
        console.log(this.props.messages);
        return (
                <div>
                    {
                        this.props.messages ?
                        this.props.messages.map((msg,index) => {
                            return(
                            <div key={msg.messageId}>
                                <div style={(index%2 === 0) ? this.styleTwo : this.style}
                                className="m-4">
                                    {msg.message}
                                </div>
                            </div>
                        )}): null
                    }
                </div>
    );
    }
}

const mapStateToProps = state => {
    return{
        messages: state.messages
    }
}

export default connect(mapStateToProps)(MessageDisplay);