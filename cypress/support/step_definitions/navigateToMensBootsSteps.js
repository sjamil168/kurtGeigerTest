//imports cypress cucumber preprocessor, will read relevant feature files to retrieve steps
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
//imports page object files, so relevant methods can be called
const MensShoesPage = require("../../page_objects/mensShoesPage");
const HomePage = require("../../page_objects/homePage")


//All steps use functions defined in page object files, this allows for greater re-use and easier maintenance of scripts
Given('I am on the homepage',  ()=>{
    HomePage.navigate()
});

Given('I select men category from the header', ()=> {
    HomePage.closeBanners()
    HomePage.showMensShoesHover()
});

Then('I should see the list of products', ()=> {
    HomePage.checkListofProducts()
});

When('I select boots category', () => {
    HomePage.selectCategory()
});
Then('I should see only boots', ()=> {
    MensShoesPage.assertBootsPage()

});