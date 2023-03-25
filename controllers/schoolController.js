const data = require('../models/data.json')

exports.getAllSchools = async (req, res) => {
  try {
    console.log("asasasa");
    const getAllSchools = data;
    res.status(200).json(
     getAllSchools,

    );
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err,
    });
  }
};


exports.getAllSchoolsPaginated = async (req, res) => {
  try {
    console.log("here");
    const itemsPerPage = 10;
    const currentPage = req.params.id;
    const info = data

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = info.slice(startIndex, endIndex);

    res.status(200).json({
      status: "sucess",
      schools: paginatedData,

    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err,
    });
  }
};

exports.getSchoolInfo = async (req, res) => {
  try {

    const getSchoolInfo = data.find(info => info.dbn===req.body.school_id.toString())
    res.status(200).json({
      status: "sucess",
      data: {
        user: getSchoolInfo,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err,
    });
  }
};
