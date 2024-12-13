# IMS-Backend

Command to run server:\
`npm run dev`

To start the MongoDB server:\
Mac: `brew services start mongodb-community`\
WSL: `sudo service mongod start`

Check status: \
Mac: `brew services list`\
WSL: `sudo service mongod start`


---
Initalising/dependencies installed:
- `npm init -y`
- `npm install mongoose express`
- `npm install --save-dev nodemon`

---
Database connection:\
To seed database:\
`npm run seed`

To check db has connected in the terminal:

Open MongoDB shell:\
`mongosh`\
See databases available:\
`show dbs`\
Switch to database being used:\
`use ims-backend`\
Show products listed in db from seed function:\
`db.products.find()`