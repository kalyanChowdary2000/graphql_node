const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type User {
    id:ID!
    name:String!
    salary:Float!
    }
    input UserInput {
    name:String!
    salary:Float!
    }
    type Query {
    users:[User!]!
    user(id:ID!):User
    userByName(name:String!):[User!]!
    userBelowSalary(salary:Float!):[User!]!
    }
    type Mutation {
    addUser(input:UserInput!):User
    deleteUser(id:ID!):Boolean
    }
    `);

let users = [
    { id: '1', name: 'Kalyan', salary: 100000 },
    { id: '2', name: 'Karthik', salary: 200000 },
];

const root = {
    users: () => users,
    user: ({ id }) => users.find((user) => user.id === id),
    userByName: ({ name }) => users.filter((user) => user.name === name),
    userBelowSalary: ({ salary }) => users.filter((user) => salary > user.salary),
    addUser: ({ input }) => {
        console.log("Input received:", input); 
        const newUser = { 
            id: String(users.length + 1), 
            name: input.name, 
            salary: input.salary 
        };
        console.log("New User:", newUser); 
        users.push(newUser);
        return newUser;
    },
    
    deleteUser: ({ id }) => {
        users = users.filter((user) => user.id !== id);
        return true;
    }
}

const app = express();
app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(4376, () => {
    console.log('Server listening on port 4376');
})

