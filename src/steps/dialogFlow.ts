import { Given, When, Then } from "@wdio/cucumber-framework";
import loginpage from '../../screens/dialogFlowScreen';

const lgn = new loginpage();


Given(/^Verify the (.+) is displayed on the screen$/, async (APIDemos) => {
    const apidemo1 = await (await lgn.apiDemos()).getText();
    expect(apidemo1).toEqual(APIDemos);
})

When('User click on the App link',async () => {
    (await lgn.app()).click();
})

Then(/^USer should see the (.+) link$/,async (AlertDialogs) => {
   const alerttxt = await ((await lgn.alert()).getText());
   expect(alerttxt).toEqual(AlertDialogs);  

   (await lgn.apiDemos()).waitForDisplayed({timeout: 10000})
   expect(lgn.apiDemos()).toBeDisabled();

}) 

Then('User clicks on Alert Dailog link',async () => {
    (await lgn.alert()).click();
})

Then('User clicks on List Dialog Link',async () => {

    (await lgn.listDlg()).click();
})

Then('User should see the dialog  window',async () => {
   // const diglow = lgn.dilogwnd();
   // await expect(diglow).toBeDisplayed();
})

Then('User click on Command One link',async () => {
    const cmdone = lgn.cmdOne();
    (await cmdone).click();
})

