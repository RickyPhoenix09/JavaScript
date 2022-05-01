async connectionLazyInit(port) {
    return {
        testQueries: async (queries, fixture) => {
            const conn = mysql.createConnection({
                host: 'localhost',
                port,
                user: 'root',
                database: 'mysql',
                password: this.password()
            });
            const connect = promisify(conn.connect.bind(conn));

            conn.execute = promisify(conn.query.bind(conn));

            await connect();

            try {
                await this.prepareFixture(conn, fixture);
                return await queries
                    .map(query => async () => JSON.parse(JSON.stringify(await conn.execute(query[0], query[1]))))
                    .reduce((a, b) => a.then(b), Promise.resolve());
            } finally {
                await promisify(conn.end.bind(conn))();
            }
        }
    };
}