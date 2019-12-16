const db = require("../models");

module.exports ={
    findAll: function(req,res){
        db.Employee
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err =>res.status(422).json(err))
    },
    findById: function(req, res) {
        db.Employee
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      create: function(req, res) {
        db.Employee
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      update: function(req, res) {
        db.Employee
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      remove: function(req, res) {
        db.Employee
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      findAllDevices: function(req,res){
        db.Device
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err =>res.status(422).json(err))
    },
    findDeviceById: function(req, res) {
        db.Device
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      createDevice: function(req, res) {
        db.Device
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      updateDevice: function(req, res) {
        db.Device
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      removeDevice: function(req, res) {
        db.Device
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
}