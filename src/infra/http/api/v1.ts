import express, {Router, Request, Response} from "express";
import {identityUserRouter} from "../../../modules/identityUser/infra/http/routes";
import {traderRouter} from "../../../modules/trader/infra/http/routes";
import {cardRouter} from "../../../modules/card/infra/http/routes";
import {cardOrderingRouter} from "../../../modules/cardOrdering/infra/http/routes";

const v1Router: Router = express.Router();

v1Router.use('/', cardOrderingRouter);
v1Router.use('/identity', identityUserRouter);
v1Router.use('/trader', traderRouter);
v1Router.use('/card', cardRouter);
v1Router.get('/', (req: Request, res: Response) => {
    res.send('<h1>Card Platform App</h1>' +
        ' <h4>Message: Success</h4>' +
        ' <p>Version 1.0.1</p>')
});


export {v1Router}