const {get} = require("../../config")
const objectId = require("mongodb").ObjectId

module.exports = {
    getAll: (req, res) => {
        get()
            .collection("subjects")
            .find({})
            .toArray()
            .then(result => {
                res.send({message : "Get all datas", data: result})
            })
            .catch(error => {
                console.log(error);
            })
    },
    deleteOne: (req, res) => {
        const { id } = req.params;
        get()
            .collection("subjects")
            .deleteOne({ _id: objectId(id) })
            .then(result => {
                res.send({message : `Data successfully delete with id ${id}`, data: result})
            })
            .catch(error => {
                console.log(error);
            })
    },
    addOne: (req, res) => {
        get()
            .collection("subjects")
            .insertOne(req.body)
            .then(result => {
                res.send({message : "Data successfully added", data: result})
            })
            .catch(error => {
                console.log(error);
            })
    },
    updateOne: (req, res) => {
        const {id} = req.params;
        get()
            .collection("subjects")
            .updateOne({ _id : objectId(id) }, {$set : (req.body)})
            .then(result => {
                res.send({message : `Data successfully update with id ${id}`, data: result})
            })
            .catch(error => {
                console.log(error);
            })
    },
    getOne: (req, res) => {
        const {id} = req.params;
        get()
            .collection("subjects")
            .updateOne({ _id : objectId(id) })
            .then(result => {
                res.send({message : "Data successfully show", data: result})
            })
            .catch(error => {
                console.log(error);
            })
    },
    getByEmail: (req, res) => {
        get()
            .collection("subjects")
            .find({ email: req.params.email })
            .toArray()
            .then(result => {
                res.send({ message: "Get all datas by email", data: result });
            })
            .catch(error => {
                console.log(error);
            });
    }
};
