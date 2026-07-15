const Mobile = require('../models/Mobile');

const getMobiles = async (req, res) => {
    let mobile = await Mobile.find({});
    res.send(mobile);
}

const getMobileById = async (req, res) => {
    try {
        let mobileId = req.params.mobileId;
        let mobile = await Mobile.findOne({ mobileId: mobileId });
        res.send(mobile);
    } catch (err) {
        console.log(err)
    }
}

const addMobile = async (req, res) => {
    try {
        console.log("Adding Mobile..");
        console.log(req.body);
        let mobile = new Mobile(req.body);
        await mobile.save();
        res.send("New Mobile has been added Successfully..")
    } catch (err) {
        console.log(err);
    }
}

const editMobile = async (req, res) => {
    try {
        let mobileId = req.params.mobileId;
        let mobile = await Mobile.findOne({mobileId: mobileId});
        if(mobile) {
            mobile.price = "35000";
            await mobile.save();
            res.end("Mobile have been Updated Successfully...")
        } else {
            res.end("Mobile Not Found...");
        }
    } catch (err) {
        console.log(err)
    }
}

const deleteMobile = async (req, res) => {
    try {
        let mobileId = req.params.mobileId;
        let mobile = await Mobile.deleteOne({mobileId: mobileId});
        res.send(mobile);
       // res.send("Mobile Deleted Successfully...");
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    getMobiles,
    getMobileById,
    addMobile,
    editMobile,
    deleteMobile
}