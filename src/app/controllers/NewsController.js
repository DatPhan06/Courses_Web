class NewsController {

    // [GET] /news
    static index(req, res){
        res.render('news');
    }

    // [GET] /news/:slug
    static show (req, res){
        res.send('New detail');
    }

}

module.exports = NewsController;
