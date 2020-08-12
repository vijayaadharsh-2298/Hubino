const initialMessage = [
    {messageId: 1, message: 'Hello!'}
]

export default (state=initialMessage,action) => {
    switch(action.type){
        case 'ADD_MSG':
            return[
                ...state,
                {
                    messageId: action.messageid,
                    message: action.message
                }
            ]
        default:
            return state;
    }
}