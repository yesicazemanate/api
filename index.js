"use strict";

import mongoose from "mongoose";
import app from './app.js';
const port = 4000;
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://127.0.0.1:27017/Concert_page")
  .then(() => {
    console.log("conexion a la base de datos exitosa");
    app.listen(app.get('port'), () => {
      console.log("servidor funciona correctamente");
      console.log()
    });
  })
  .catch((err) => console.log(err));
