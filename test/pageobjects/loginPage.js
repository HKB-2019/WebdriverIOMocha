class LoginPage{


    get myEmail () { return $('#email') }
    get myPassword() { return $('#passwd') }
    get logInBtn () { return $('#SubmitLogin > span') }
    get signOut (){return $('#header > div.nav > div > div > nav > div:nth-child(2) > a')}

    // method declaration

    login (email, password) {
        this.myEmail.setValue(email);
        this.myPassword.setValue(password);
        this.logInBtn.click();
    }



}

module.exports = new LoginPage();
