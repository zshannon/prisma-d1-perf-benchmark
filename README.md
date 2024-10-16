1. `yarn install`
2. `yarn db:migrate:up`
3. `yarn dev`
4. Visit [localhost:3000](http://localhost:3000), see unhandled runtime error:
   ```
   Error: 
   Invalid `prisma.property.count()` invocation:


   Error occurred during query execution:
   ConnectorError(ConnectorError { user_facing_error: None, kind: QueryError(SqliteError { extended_code: 1, message: Some("Cannot read properties of undefined (reading 'prepare')") }), transient: false })
   ```