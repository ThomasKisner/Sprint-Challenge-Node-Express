//YOU'RE IN ACTION ROUTES

const express = require("express");

const router = express.Router();

const actionDB = require("../data/helpers/actionModel");

///////MIDDLEWARE///////////////

//////ROUTE HANDLERS////////////

//GET ALL ACTIONS
router.get("/", (req, res) => {
  actionDB
    .get()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

//GET ALL ACTION AT ID
router.get("/:id", (req, res) => {
  const { id } = req.params;

  actionDB
    .get(id)
    .then(action => {
      if (id) {
        res.status(200).json(action);
      }
    })
    .catch(err => {
      res.status(404).json({ error: `There is no action at that ID: ${err}` });
    });
});

//POST AN ACTION
router.post("/", (req, res) => {
  const { project_id, description, notes } = req.body;
  const newAction = { project_id, description, notes };

  actionDB
    .insert(newAction)
    .then(response => {
      if (response.id) {
        console.log(response);
        res.status(201).json({ response });
      } else {
        res
          .status(404)
          .json({ error: `There was no action with that project id` });
      }
    })
    .catch(err => {
      res.status(500).json({ error: `${err}` });
    });
});

//CHANGE AN ACTION
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { description, notes } = req.body;
  const updatedAction = { description, notes };

  actionDB
    .update(id, updatedAction)
    .then(action => {
        if(action){
      res.status(200).send(action);
        } else {
            res.status(404).json({error: `Nothing exists at that id`})
        }
    })

    .catch(err => {
      res.status(500).json({err: `${err}`})
    });
});

//DELETE AN ACTION
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  actionDB
    .remove(id)
    .then(response => {
      if (response) {
        res.status(200).json({ response });
      } else {
        res.status(404).json({ error: `There is no action at that id` });
      }
    })
    .catch(err => {
      res.status(500).json({ error: `You encountered an error due to ${err}` });
    });
});

module.exports = router;
