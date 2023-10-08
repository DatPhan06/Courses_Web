
const Course = require('../models/Courses');


class SiteController {

    // [GET] /home
    static home  (req, res){

        async function getAllCoures() {
            try {
              const Courses = await Course.findAll();
              console.log(Courses); // In ra danh sách các bản ghi từ bảng "Courses"
            } catch (error) {
              console.error('Lỗi khi lấy dữ liệu:', error);
            }
        getAllCoures();
        res.json({
            Courses,
        })
        // res.render('home');
    }
}

    // [GET] /search
    static search(req, res){
        res.render('search');
    }

}

module.exports = SiteController;
