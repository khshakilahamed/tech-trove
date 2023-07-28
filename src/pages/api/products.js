import { MongoClient, ServerApiVersion } from "mongodb";
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lujialn.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");

    const database = client.db("tech-trove");
    const productsCollection = database.collection("products");

    // get API
    if (req.method === "GET") {
      const products = await productsCollection.find({}).toArray();

      res.send({ message: "success", status: 200, data: products });
    }
  } finally {
    // await client.close();
  }
}
// run().catch(console.dir);

export default run;
