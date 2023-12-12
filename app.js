"use strict";

import express from "express";
 import artist_routes from './routers/artist.js'

const app = express();

// settings
app.set("port", process.env.PORT || 4000);

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/concert/artist", artist_routes);

export default app


