'use strict'

const { makeExecutableSchema } = require('graphql-tools')
const resolvers  = require('./resolvers')
const UserType =  require('./models/UserType')

const typeDefs = [
  UserType
]

module.exports = makeExecutableSchema({ typeDefs, resolvers: [resolvers] })
