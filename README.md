1. `yarn install`
2. `yarn db:migrate:up`
3. `yarn dev`
4. Visit [localhost:3000](http://localhost:3000)
5. Click 'write properties'
6. See error:
   ```
   Error: 
   Invalid `prisma.parent.create()` invocation:


   Error converting field "value" of expected non-nullable type "String", found incompatible value of "2024-10-16 19:59:23.442 +00:00".
   ```