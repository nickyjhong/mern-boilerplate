import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: "test",
    lastName: "me",
    username: "test",
    password: "password",
  },
  {
    _id: userIds[1],
    firstName: "Steve",
    lastName: "Ralph",
    username: "thataaa@gmail.com",
    password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",

  },
  {
    _id: userIds[2],
    firstName: "Some",
    lastName: "Guy",
    username: "someguy@gmail.com",
    password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",

  },
  {
    _id: userIds[3],
    firstName: "Whatcha",
    lastName: "Doing",
    username: "whatchadoing@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",

  },
  {
    _id: userIds[4],
    firstName: "Jane",
    lastName: "Doe",
    username: "janedoe@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
  },
  {
    _id: userIds[5],
    firstName: "Harvey",
    lastName: "Dunn",
    username: "harveydunn@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",

  },
  {
    _id: userIds[6],
    firstName: "Carly",
    lastName: "Vowel",
    username: "carlyvowel@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",

  },
  {
    _id: userIds[7],
    firstName: "Jessica",
    lastName: "Dunn",
    username: "jessicadunn@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",

  },
];

export const things = [
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Test1',
  }, 
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Test2',
  }, 
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Test3',
  }, 
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Test4',
  }
]