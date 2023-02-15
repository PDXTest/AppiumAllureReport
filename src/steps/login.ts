import { Given } from "@wdio/cucumber-framework";
import loginpage from '../../screens/loginScreen';


const loginpage1 = new loginpage();

Given('Login app',async () => {

//using class name

    const apiName  = await $('android.widget.TextView');
    let apiText = await (apiName.getText());
    expect(apiText).toEqual("API Demos");

    console.log("Teh Text is displayed: " + apiText);

    await loginpage1.clickAni();
    const button1 = await $('~Cloning');
    await button1.isDisplayed();
    
    driver.pause(2000);

    const event = await $('~Events');
    await event.click();
    
})