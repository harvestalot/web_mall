const posts = require('../data/posts.json') // 文章列表数据源
exports.homePageApi = function(mock){
    mock.get('/mallrest/posts', (req, res) => {
        res.json(posts)
    })
}