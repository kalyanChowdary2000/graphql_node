# GraphQL Node

This repository provides a basic GraphQL setup with an Express server. You can test various GraphQL queries and mutations using the following examples.

## Setup

1. **Clone the repository:**
    ```bash
    git clone <repository_url>
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Start the server:**
    ```bash
    npm run basic
    ```

4. The server will run at:
    ```
    http://localhost:4376/graphql
    ```

---

## Example Queries and Mutations

### 1. Fetch All Users

**Request:**
```json
{
  "query": "query { users { id name salary } }"
}
{
  "query": "query { user(id: \"1\") { id name salary } }"
}
{
  "query": "query { userByName(name: \"Kalyan\") { id name salary } }"
}
{
  "query": "mutation { addUser(input: {name: \"Bobby\", salary: 900000}) { id name salary } }"
}
{
  "query": "mutation { deleteUser(id: \"3\") }"
}
