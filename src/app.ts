import "dotenv/config";
import express  from "express";
import cors from "cors";
import { router } from "./routes";
import db from "./config/mongo";

const PORT = process.env.PORT || 3001;


const app = express();

//* Cors es una libreria que nos permite dicirle a la api que puea ser usada desde cualquier dominio
app.use(cors());
app.use(express.json());
app.use(router)

db().then(()=>{
    console.log("++++ CONECTADO ++++");
})

app.listen(PORT, () => console.log(`API en el puerto ${PORT}`));