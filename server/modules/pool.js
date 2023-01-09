const pg = require('pg');

const pool = new pg.Pool({
    host: 'localHost',
    port: 5432,
    database: 'shopping_list', 
        // renamed from fs-react-shopping
});

module.exports = pool;
