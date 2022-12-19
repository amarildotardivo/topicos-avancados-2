import express, { Router } from "express";

import { criaControllerFactory } from "./factories/factories";

const app = express();

const route = Router();
const dadosController = criaControllerFactory();

route.get("/dados", dadosController.listar_dados);

app.use(express.json());
app.use(route);

app.listen(3000, () => {
    console.log('conectado em 3000');
})

