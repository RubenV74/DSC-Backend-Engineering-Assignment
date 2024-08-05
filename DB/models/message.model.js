const {Schema, model, ObjectId} = require("mongoose");

const messageSchema = (collectionName) => new Schema({
    content: {
        type: String,
        required: [true, 'message content required']
    },
    senderId:{
        type: ObjectId,
        required: [true, 'message senderId required'],
        ref: 'users'
    },
    receiversIds: [{type: ObjectId, ref:'users'}],
    chatRoomId:{
        type:ObjectId,
        required: [true, 'message chatRoomId required'],
        ref:"chatRooms"
    }
},{collection: collectionName, timestamps: true});

const messagesModel = model("messages", messageSchema('messages'));

module.exports ={messagesModel}