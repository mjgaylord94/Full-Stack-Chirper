import { Query } from "./index";

const all = async () =>
    Query(`SELECT u.image, u.name, c.id, c.chirpText FROM chirps c JOIN users u on c.userid = u.id`);

const one = async (id: string) =>
    Query(`SELECT u.image, u.name, c.id, c.chirpText FROM chirps c JOIN users u on c.userid = u.id WHERE c.id = ?`, [id]);

const add = async (userid: string, chirpText: string) =>
    Query(`INSERT INTO chirps (userid, chirpText) VALUES (?, ?)`, [userid, chirpText]);

const edit = async (id: string, chirpText: string) =>
    Query(`UPDATE chirps SET chirpText = ? WHERE chirps.id = ?`, [chirpText, id]);

const remove = async (id: string) =>
    Query(`DELETE FROM chirps WHERE chirps.id = ?`, [id]);

export default {
    all,
    one,
    add,
    edit,
    remove
}