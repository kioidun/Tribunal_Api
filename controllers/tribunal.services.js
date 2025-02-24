const models = require("../models");

function save(req, res) {
    const tribunalsServices = {
     name: req.body.name
      
    };

  
    models.TribunalsServices
      .create(tribunalsServices)
      .then((result) => {
        res.status(201).json({
          message: "Tribunal Services created successfully",
          tribunalsServices: result,
        });
      })
      .catch((error) => {
        res.status(500).json({
          message: "Services not created",
          error: error,
        });
      });
  }
  // function show(req, res) {
  //   const id = req.params.id;
  
  //   models.TribunalsServices
  //     .findByPk(id, {include:[models.Tribunals]})
  //     .then((result) => {
  //         if(result){
  //             res.status(200).json(result);
  //         }else{
  //             res.status(404).json({
  //                 message:"post not found"
  //             })
  //         }
       
  //     })
  //     .catch((error) => {
  //       res.status(500).json({
  //         message: "something went wrong",
  //       });
  //     });
  // }

  // function index(req, res) {
  //   models.TribunalsServices
  //     .findAll()
  //     .then((result) => {
  //       res.status(200).json(result);
  //     })
  //     .catch((error) => {
  //       res.status(500).json({
  //         message: "something went wrong",
  //       });
  //     });
  // }

  module.exports = {
    save:save,
    // show:show,
    // index,index
  }