const {Schema, model, ObjectId, Types} = require("mongoose");

const messageSchema = (collectionName) => new Schema({
    content: {
        type: String,
        required: [true, 'message content required']
    },
    senderId:{
        type: ObjectId,
        required: [true, 'message senderId required'],
        ref: 'User'
    },
    receiversIds: [{type: ObjectId, ref:'User'}],
    chatRoomId:{
        type:ObjectId,
        // required: [true, 'message chatRoomId required'],
        ref:"chatRooms"
    },
    time:{
        type: Date
    }
},{collection: collectionName, timestamps: true});

const messagesModel = model("messages", messageSchema('messages'));

module.exports ={messagesModel}