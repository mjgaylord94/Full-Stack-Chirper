import * as mysql from 'mysql';
import chirps from './chirps';
import users from './users';

const Connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'chirprapp',
    password: 'chirpchirp',
    database: 'chirperdb'
});

export const Query = (query: string, values?: Array<string | number>) => {
    return new Promise<{insertId: string}>((resolve, reject) => {
        Connection.query(query, values, (err, results) => {
            if(err) return reject(err);
            return resolve(results);
        });
    });
};

export default {
    chirps,
    users
}