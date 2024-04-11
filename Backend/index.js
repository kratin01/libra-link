const express = require("express");
require("dotenv").config();
const cors = require('cors');

const app = express();
const port = 3000;
//middleware
app.use(cors()); //it helps to connect the frontend and backend
app.use(express.json()); //it helps to read the json data that is coming from the frontend

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

//MongoDB Configurations

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = process.env.CLUSTER_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //=======================================================================================================

    //create a database
    const booksCollection = client.db("BookInventory").collection("books");

    //Insert a book into the database using post request
    app.get("/", (req, res) => {
      res.send("Hello World");
    });
    
    app.post("/upload-book", async (req, res) => {
      const data = req.body;
      // data?._id = new ObjectId();
      // console.log(data);
      const result = await booksCollection.insertOne(data); //here data is the object that we want to insert bascially data is coming from the frontend because we are using post request
      res.send(result);
    });

    //get all the books from the database using get request

    // app.get("/get-books", async (req, res) => {
    //   const books = booksCollection.find({}); //here we are finding all the books from the database
    //   const result = await books.toArray(); //here we are converting the books into an array
    //   res.send(result);
    // });

    //Update a book in the database using patch request

    app.patch("/update-book/:id", async (req, res) => {
      const id = req.params.id; //here we are getting the id from the url that is coming from the frontend
      const updateBookData = req.body; //here we are getting the data from the frontend
      const result = { _id: new ObjectId(id) }; //here we are converting the id into an object id
      const options = { upsert: true }; //here we are using upsert:true because if the id is not present in the database then it will insert the data in the database

      const updateBook = {
        $set: {
          ...updateBookData,
        },
      };
      //update
      const updateResult = await booksCollection.updateOne(
        result,
        updateBook,
        options
      ); //here we are updating the book in the database
      res.send(updateResult);
    });

    //Delete a book from the database using delete request

    app.delete("/delete-book/:id", async (req, res) => {
      const id = req.params.id; //here we are getting the id from the url that is coming from the frontend
      const result = { _id: new ObjectId(id) }; //here we are converting the id into an object id
      const deleteResult = await booksCollection.deleteOne(result); //here we are deleting the book from the database
      res.send(deleteResult);
    });

    //Find by category

    app.get("/get-books", async (req, res) => {
      let query = {};
      if (req.query?.category) {
        query = { category: req.query.category };
      }
      const result = await booksCollection.find(query).toArray();
      res.send(result);
    });

    

    app.get("/book/:id", async (req, res) => {
      const id = req.params.id; //here we are getting the id from the url that is coming from the frontend
      const filter = { _id: new ObjectId(id) }; //here we are converting the id into an object id
      const result = await booksCollection.findOne(filter); //here we are finding the book from the database

      res.send(result);
    });

    //========================================================================================================

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
