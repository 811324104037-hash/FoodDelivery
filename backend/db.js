const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://mdivyabharathi103_db_user:Food1012Db@cluster0.r0dkcvg.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
}

connectDB();