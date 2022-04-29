module.exports = app => {
  const Controller = require("../controller/videocontroller.js");

  var router = require("express").Router();

  // Retrieve all Tutorials by userId(string)
  router.get("/videototalsize", Controller.getTotalSize);

  // Get video data by it's id
  router.get("/getvideometadatabyid", Controller.getVideoMetadata);

  // Update video's metadata.
  router.patch("/updatevideometadata", Controller.updateVideoMetadata);
  app.use("/", router);
};
