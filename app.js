"use strict";

import express from "express";
import artist_routes from './routers/artist.js'
import city_routes from './routers/city.js'
import place_routes from './routers/place.js'
import concert_routes from './routers/concert.js'

const app = express();

// settings
app.set("port", process.env.PORT || 4000);

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/concert_page/artist", artist_routes);
app.use("/concert_page/city", city_routes);
app.use("/concert_page/place", place_routes);
app.use("/concert_page/concert", concert_routes);

export default app


