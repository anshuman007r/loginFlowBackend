import auth from '../Model/authModel';

exports.checkAuth = (req, res) => {
    if(req.body.email && req.body.password){
        auth.find({
            email : req.body.email
        }, (err, auth) => {
            if(auth && auth.length > 0){
                if(auth[0].password == req.body.password){
                    let data = {}
                    data.email =auth[0].email
                    data.mobileNo = auth[0].mobileNo
                    data.name = auth[0].name
                    data.userId = auth[0].userId
                    res.json(data)
                }else{
                    res.status(400).json({message :`The password entered is invsalid`})
                }
            }else{
                res.status(400).json({ message :`The email Id ${req.body.email} is invalid`})
            }
        });
    }else{
        res.status(400).json({message:`bad request`})
    }

};

exports.addAuth = (req, res) => {
    if(req.body && req.body.email && req.body.name && req.body.mobileNo, req.body.password){
        auth.find({
            email : req.body.email
        }, (err, authData) => {
            if(authData && authData.length > 0){
                res.status(400).json({message :`The email id ${req.body.email} already exist`})
            }else{
                const newAuth = new auth(req.body)
                newAuth.save((err, auth) => {
                    if (err) {
                        res.json(err);
                    }
                    let data ={}
                    data.email =auth.email
                    data.mobileNo = auth.mobileNo
                    data.name = auth.name
                    data.userId = auth.userId
                    res.json(data);
                });
            }
        });
    }else{
        res.status(400).json({message:`bad request`})
    }

};

exports.welcomeData = (req,res) =>{
    res.json('welcome to login signup api')
}
