const {usersStorage} = require("../DB/index.db");
const {Types} = require('mongoose');

const getAllUsers = async (req, res) => {
    const user = await usersStorage.find({});
    res.status(200).json(user);
}


const getUserById = async (req, res) => {
    const id = req.params.id;
    if (!id) throw new Error("ID is NOT valid!");
    const user = await usersStorage.find({_id : new Types.ObjectId(id)});
    res.status(200).json(user);
}

const createUser = async (req, res) => {

    const {body} = req;
    try {
        await usersStorage.insert(body);
        res.status(200).send('User saved successfully');
    }
    catch(err)
    {
        res.status(300).send(err);
    }
}



const editUser = async (req, res) => {
    const {query, data} = req.body;
    await usersStorage.update(query, data);
    res.status(200).send('User updated successfully');

}

const deleteUser = async (req, res) => {
    const {id} = req.body;
    await usersStorage.remove(id);
    res.status(200).send('User Deleted successfully');
}

module.exports ={
    getAllUsers,
    getUserById,
    createUser,
    editUser,
    deleteUser
}