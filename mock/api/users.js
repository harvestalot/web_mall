const users = require('../data/users.json') // 用户列表数据源/

exports.usersApi = function (mock){
    mock.get('/mallrest/users', (req, res) => {
        res.json(users)
    })
}