import auth from '../controller/authController'


export default (app) => {
    app.route('/')
    .get(auth.welcomeData)
    app.route('/login')
    .post(auth.checkAuth)

    app.route('/signup')
    .post(auth.addAuth)
};
