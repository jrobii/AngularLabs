var bodyParser = require('body-parser');
let user = require('../../src/app/User');
let User = user.User;

module.exports = function(app, path) {
    app.use(bodyParser.json());
    app.post('/api/auth', function(req, res){
        u = req.body.username;
        p = req.body.password;

        accounts= [
            new User("jye", "abc123", "jye@jrobi.co", 20, "13/10/1999"),
            new User("bob", "123abc", "bob@jrobi.co", 40, "29/04/1979"),
            new User("sam", "sam123", "sam@jrobi.co", 55, "08/11/1965")]

        if (!req.body) {
            return res.sendStatus(400);
        }
        let i = accounts.find(use =>
            ((use.username == u) && (use.password == p)));
        if (i) {
            i.ok = true
            res.send(i);
        } else {
            res.send({"ok": false});
        }
    });
}
