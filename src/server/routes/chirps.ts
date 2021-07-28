import * as express from "express";
import db from '../db';

let router = express.Router();

router.get('/:id?', async (req, res) => {
    if (req.params.id) {
        try {
            res.json((await db.chirps.one(req.params.id))[0]);
        } catch(e) {
            console.log(e);
            res.sendStatus(500);
        }
    } else {
        try {
            res.json(await db.chirps.all());
        } catch(e) {
            console.log(e);
            res.sendStatus(500);
        }
    }
}
);

router.post('/', async (req, res) => {
    let chirpObj: chirp = req.body

    try {
        const newUser = await db.users.add(chirpObj.name, chirpObj.image);
        
        await db.chirps.add(newUser.insertId, chirpObj.chirpText);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.put('/:id', async (req, res) => {
    let id: string = req.params.id;
    let chirpObj: chirp = req.body

    try {
        res.json(await db.chirps.edit(id, chirpObj.chirpText));
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.delete('/:id', async (req, res) => {
    let id: string = req.params.id

    try {
        res.json(await db.chirps.remove(id));
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

interface chirp {
    id?: string,
    image: string,
    name: string,
    chirpText: string
}

export default router;