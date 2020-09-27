class forgotpasswordPage {

    get forgotPasswordl () {return $('#login_form > div > p.lost_password.form-group > a')}
    get myEmail () {return $('#email')}
    get retrievePassBtn(){return $ ('#form_forgotpassword > fieldset > p > button > span')}

    // method declaration
     forgotpassword (email) {
        this.forgotPasswordl.click();
        this.myEmail.setValue(email);
        this.retrievePassBtn.click();



     }


}

module.exports = new forgotpasswordPage();



