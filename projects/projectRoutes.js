const express = require("express");
const router = express.Router();
const projectDB = require("../data/helpers/projectModel");

/////ROUTE HANDLERS

//GET ALL PROJECTS
router.get("/", (req, res) => {
  projectDB
    .get()
    .then(projects => {
      if (projects) {
        res.status(200).json(projects);
      }
    })
    .catch(err => {
      res.status(500).json({ error: `An unknown error has occurred` });
    });
});

//GET PROJECT AT ID
router.get("/:id", (req, res) => {
  const { id } = req.params;

  projectDB
    .get(id)
    .then(project => {
      if (project) {
        res.status(200).json(project);
      } else {
        res.status(404).json({ error: `That project does not exist` });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(404).json({ error: `Project does not exist at that id` });
    });
});

//GET PROJECT ACTIONS AT ID
router.get("/:id/actions", (req, res) => {
  const { id } = req.params;

  projectDB
    .getProjectActions(id)
    .then(actions => {
      if (actions) {
        res.status(200).json(actions);
      } else {
        res.status(404).json({ error: `That project does not exist` });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(404).json({ error: `Project does not exist at that id` });
    });
});
//ADD PROJECT
router.post("/", (req, res) => {
  const { name, description } = req.body;
  const newProject = { name, description };

  projectDB
    .insert(newProject)
    .then(project => {
      if (project) {
        res.status(201).json(project);
      } else {
        res
          .status(400)
          .json({
            error: `make sure you include name and description in project add request`
          });
      }
    })
    .catch(err => {
      res.staus(500).json({ error: `${err}` });
    });
});

//UPDATE PROJECT
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const updatedProject = { name, description };
  projectDB
    .update(id, updatedProject)
    .then(project => {
      res.status(200).send(project);
    })
    .catch(err => {
      res.status(500).json({ error: `Something hit the fan` });
    });
});

//DELETE PROJECT
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  projectDB
    .remove(id)
    .then(project => {
      if (project) {
        res.status(200).json({ message: `Gone from the internet forever` });
      } else {
        res.status(404).json({ error: `That project does not exist` });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(404).json({ error: `Project does not exist at that id` });
    });
});

module.exports = router;
