'use strict'

const {User, } = use('App/Models/User')
const { allUsers, fetchUser } = require("./queries/user/userQuery");

const resolvers = {

  Query: {
    allUsers,
    fetchUser,
  }
}

module.exports = resolvers
