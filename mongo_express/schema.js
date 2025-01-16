const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type User {
    id:ID!
    name:String!
    salary:Float!
    }
    input UserInput {
        name: String!
        salary: Float!
    }
    type Query {
    users:[User!]!
    user(id:ID!):User!
    userByName(name:String!):User!
    userBelowSalary(salary:Float!):User!
    }
    type Mutation {
    addUser(input:UserInput!):User!
    deleteUser(id:ID!):Boolean!
    }
    `);

module.exports = schema;
