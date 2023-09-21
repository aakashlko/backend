const RecData = require("../models/recModel");

module.exports.insertRec = async (req, res, next) => {
  try {
    const { email, recId, recType } = req.body;
    const recording = await RecData.create({ email, recId, recType });

    res.status(201).json({ recording: recording._id, created: true });
  } catch (err) {
    console.log(err);
    const errors = handleErrors(err);
    res.json({ errors, created: false });
  }
};
