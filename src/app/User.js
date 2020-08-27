
class User {

    constructor(username, password, email, age, birthdate) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.age = age;
        this.birthdate = birthdate;
    }

}

module.exports = {
    User: User
}
