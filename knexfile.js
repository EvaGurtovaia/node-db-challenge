module.exports = {
    development: {
        client: "sqlite3",
        connection: {
            filename: "./data/projects.db3"
        },
        useNullAsDefault: true,
        migrations: {
            directory: "./data/migrations"
        },
        seeds: {
            directory: "./data/seeds"
        },
        pool: {
            afterCreate: (conn, done) => {
                conn.run("PRAGMA foreign_keys = ON", done); // turns on the FK enforcement
            }
        }
    }
};
