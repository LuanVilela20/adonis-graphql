'use strict'

const UserType = `
  type User {
    id: Int!
    username: String!
    password: String
    email: String!
  }

  type Query {
    allUsers: [User]
    fetchUser(id: Int!): User
  }
`

module.exports = UserType

