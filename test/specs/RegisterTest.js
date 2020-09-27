
const homepage = require ('..\\pageobjects\\homePage');
const registerpage = require ('..\\pageobjects\\registerPage');

var faker = require('faker');
const expectChai = require('chai').expect;

describe('Register', () => {
    var randomFirstName = faker.name.firstName(); // Rowan
    var randomLastName = faker.name.lastName(); // Nikolaus
    var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz


    it('verify user can register', () => {
        browser.url('/index.php')
        expect(browser).toHaveTitle('My Store');
        homepage.signIn();
        browser.pause(3000)
        registerpage.createanAccount(randomEmail,randomFirstName,randomLastName,'Bold22', '2','6', '5',  'Walmart','1023 Brandon Street, P.O. Box 1023', 'Baltimore', '20', '23504','1','+1423490323002')
        browser.pause(2000)


    })
})