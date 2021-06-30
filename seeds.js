// this file will not so this file will will not be required by or be requiring index.js because we don't want our db to be seeded each time we run index.js.

// need to require mongoose and have the mongoose setup to connect to the database since we aren't getting that setup from any other required files (products model file is being required by index.js, not the other way around, so we don't have to worry about index.js spilling over into this file)

// having said that, we will need to require our model since everything going into the database is compared to the schema.