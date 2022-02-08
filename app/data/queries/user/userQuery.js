'use strict'

const User = use('App/Models/User')

const UserQuery = {
  async allUsers(obj, args, ctx){
    const users = await User.all()
    return users.toJSON()
  },
  async fetchUser(_,{ id }) {
    const user = await User.find(id)
    return user.toJSON()
  },
}

module.exports = UserQuery
