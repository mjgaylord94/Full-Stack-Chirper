import * as express from "express";
import db from '../db';

let router = express.Router();

router.get('/:id?', async (req, res) => {
    if (req.params.id) {
        try {
            res.json((await db.chirperdb.one(req.params.id))[0]);
        } catch(e) {
            console.log(e);
            res.sendStatus(500);
        }
    } else {
        try {
            res.json(await db.chirperdb.all());
        } catch(e) {
            console.log(e);
            res.sendStatus(500);
        }
    }
}
);

interface chirp {
    id?: string,
    image: string,
    username: string,
    chirpText: string
}

export default router;