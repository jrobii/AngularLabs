var bodyParser = require('body-parser');


module.exports = function(app, path) {
    app.use(bodyParser.json());
    app.post('/api/auth', function(req, res){
        u = req.body.username;
        p = req.body.password;
        console.log(u);
        console.log(p);
        accounts= [
            {"username": "jye", "password": "abc123", "age": 20, "email": "jye@jrobi.co"},
            {"username": "bob", "password": "123abc", "age": 40, "email": "bob@jrobi.co"},
            {"username": "sam", "password": "sam123", "age": 55, "email": "sam@jrobi.co"}];
        
        if (!req.body) {
            return res.sendStatus(400);
        }
        for (var i = 0; i < accounts.length; i++) {
            if (accounts[i].username == u && accounts[i].password == p) {
              res.send({"ok": true});
            } else {
                res.send({"ok": false})
            }
        //console.log(req.body)
       //var customer = {};
        //customer.email = req.body.email;
        //customer.passwd = req.body.passwd;
        //if (req.body.email == "jye@jrobi.co" && req.body.passwd == "jye") {
            //customer.valid = true;
        //} else if (req.body.email == "bob@bob.co" && req.body.passwd == "abc") {
            //customer.valid = true;
        //} else if (req.body.email == "jane@bob.co" && req.body.passwd == "123") {
            //customer.valid = true;
        //}else {
            //customer.valid = false;  
        //}
        //res.send(customer); 
        }
    });
}
