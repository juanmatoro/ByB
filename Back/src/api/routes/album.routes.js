const express = require("express");
const albumRouter = express.Router();
const { createAlbum,
    getAllAlbums,
    getAlbumById,
    updateAlbum,
    deleteAlbum, } = require("../controllers/album.controller");

// Ruta para crear un nuevo álbum
albumRouter.post("/", createAlbum);
albumRouter.get("/", getAllAlbums);
albumRouter.get("/:id", getAlbumById);
albumRouter.put("/:id", updateAlbum);
albumRouter.delete("/:id", deleteAlbum);

module.exports = albumRouter;
