class registerPage {

    get creatEmail() {return $('input#email_create')}
    get creatAccountBtn (){return $('button#SubmitCreate > span')}
    get firstName () {return $('#customer_firstname')}
    get lastName () {return $('input#customer_lastname')}
    get password () {return $('input#passwd')}
    get daysBtn () {return $ ('#days')}
    get monthsBtn (){return $('#months')}
    get yearsBtn (){return $ ('#years')}
    get company () {return $('input#company')}
    get address1() {return $('#address1')}
    get city () {return $('input#city')}
    get state () {return $('select#id_state')}
    get postcode(){return $('input#postcode')}
    get country (){return $('#id_country')}
    get phoneNumber (){return $('input#phone')}
    get submitBtn (){return $('#submitAccount > span')}



    // method declaration
    createanAccount (email,firstName,lastName,password,daysBtn,monthsBtn,yearsBtn,company,address1,city,state,postcode,country, phoneNumber) {
        this.creatEmail.setValue(email);
        this.creatAccountBtn.click();
        this.firstName.setValue(firstName);
        this.lastName.setValue(lastName);
        this.password.setValue(password,);
        this.daysBtn.selectByIndex(daysBtn);
        this.monthsBtn.selectByIndex(monthsBtn);
        this.yearsBtn.selectByIndex(yearsBtn);
        this.company.setValue(company);
        this.address1.setValue(address1);
        this.city.setValue(city);
        this.state.selectByIndex(state);
        this.postcode.setValue(postcode);
        this.country.selectByIndex(country);
        this.phoneNumber.setValue(phoneNumber);
        this.submitBtn.click();



    }


}

module.exports = new registerPage();