/* GET Meals View */
const meals = (req, res) => {
    pageTitle = process.env.npm_package_description + " - Meals"; // process.env.npm_package_description can only be accessed if you use 'npm start' *nodemon will not work
    res.render("meals", { title: pageTitle });
};

module.exports = {
    meals,
};
