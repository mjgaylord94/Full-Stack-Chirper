import { Query } from "./index";

const add = (name: string, image: string) => 
    Query(`INSERT INTO users (name, image) VALUES (?, ?)`, [name, image])

export default {
    add
}