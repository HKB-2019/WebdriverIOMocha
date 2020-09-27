class homePage {

     get signInBtn () {return $('#header > div.nav > div > div > nav > div.header_user_info > a')}

     // method to interact with sign in button

     signIn () {
         this.signInBtn.click();


     }

}

module.exports = new homePage ();