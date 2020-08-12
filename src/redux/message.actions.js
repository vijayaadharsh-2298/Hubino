export const sendMessage = (message) => {
    return{
        type: 'ADD_MSG',
        messageid: message.msgid,
        message: message.msg
    }
}