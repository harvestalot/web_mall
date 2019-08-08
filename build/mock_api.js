// import users from '../mock/api/users.js'
const users = require('../mock/api/users')//用户
const home_page = require('../mock/api/home_page.js')

exports.service_api = function(mock){
    users.usersApi(mock)
    home_page.homePageApi(mock)
};