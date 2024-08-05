const {messagesStorage} = require("../DB/index.db");
const {Types} = require('mongoose');

const getAllMessages = async (req, res) => {
        const messages = await messagesStorage.find({});
        res.status(200).json(messages);
}


const getMessageById = async (req, res) => {
        const id = req.params.id;
        if (!id) throw new Error("ID is NOT valid!");
        const message = await messagesStorage.find({_id : new Types.ObjectId(id)});
        res.status(200).json(message);
}

const createMessage = async (req, res) => {

        const {body} = req;
        await messagesStorage.insert(body);
        res.status(200).send('Message saved successfully');
}



const editMessage = async (req, res) => {

        const {query, data} = req.body;
        await messagesStorage.update(query, data);
        res.status(200).send('Message updated successfully');

}

const deleteMessage = async (req, res) => {
        const {id} = req.body;
        await messagesStorage.remove(id);
        res.status(200).send('Message Deleted successfully');
}

module.exports ={
    getAllMessages,
    getMessageById,
    createMessage,
    editMessage,
    deleteMessage
}