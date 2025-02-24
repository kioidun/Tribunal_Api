const models = require("../models");


function save(req, res) {
  const service = {
    phoneNumber: req.body.phoneNumber,
    tribunalName: req.body.tribunalName,
    tribunalService: req.body.tribunalService
    
  
  };

// validation
//   const schema = {
//     requestorPhoneNumber:{type:"string",optional:false,max:"10"},
//     requestTime:{type:"string", optional:false,max:"8"},
//     requestDate:{type:"string", optional:false,max:"10"} ,
//   }

//   const v = new validator()
//   const validationResponse=v.validate(service,schema)

//   if(validationResponse !== true){
//     return res.status(400).json({
//         message:"validation failed",
//         error:validationResponse
//     })
//   }

  //create

  models.ServicesInput
    .create(service)
    .then((result) => {
      res.status(201).json({
        message: "Services created successfully",
        service: result,
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

//   models.ServicesInput
//     .findByPk()
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

function index(req, res) {
  models.ServicesInput
    .findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json({
        message: "something went wrong",
      });
    });
}

function update(req, res) {
  const id = req.params.id;
  const updateService = {
    phoneNumber: req.body.phoneNumber,
    tribunalName: req.body.tribunalName,
    tribunalService: req.body.tribunalService
    
   
  };

  //  const tribunalServiceID = 3;
  //  const tribunalsNameID = 3;

  // const schema = {
  //   requestorPhoneNumber:{type:"string",optional:false,max:"10"},
  //   requestTime:{type:"string", optional:false,max:"8"},
  //   requestDate:{type:"string", optional:false,max:"10"} ,
  // }

  // const v = new validator()
  // const validationResponse=v.validate(updateService,schema)

  // if(validationResponse !== true){
  //   return res.status(400).json({
  //       message:"validation failed",
  //       error:validationResponse
  //   })
  // }

  models.ServicesInput
    .update(updateService, {
      where: {
        id: id,
      },
    })
    .then((result) => {
      res
        .status(200)
        .json({
          message: "post updated",
          service: updateService,
        })
        .catch((error) => {
          res.status(500).json({
            message: "something went wrong",
            error: error,
          });
        });
    });
}

function destroy(req, res) {
  const id = req.params.id;

  models.ServicesInput
    .destroy({
      where: {
        id: id,
      },
    })
    .then((result) => {
      res
        .status(200)
        .json({
          message: "post delete succesfully",
          service: result,
        })
        .catch((error) => {
          res.status(500).json({
            message: "something went wrong",
            error: error,
          });
        });
    });
}

module.exports = {
  save: save,
//    show: show,
   index: index,
   update: update,
   destroy: destroy,
};
