import { Given, When, Then } from "@wdio/cucumber-framework";
import loginpage from '../../screens/dialogFlowScreen';

const lgn = new loginpage();


Given('Verify the (.+) is displayed on the screen',async (APIDemos: string) => {
    const apidemo1 = await (await lgn.apiDemos()).getText();
    expect(apidemo1).toEqual(APIDemos);   
})

When('User click on the App link',async () => {
    (await lgn.app()).click();
})

Then('USer should see the (.+) link',async (AlertDialogs: String) => {
   const alerttxt = await ((await lgn.alert()).getText());
   expect(alerttxt).toEqual(AlertDialogs);  
}) 

When('User clicks on Alert Dailog link',async () => {
    (await lgn.alert()).click();
})

When('User clicks on List Dialog Link',async () => {

    (await lgn.listDlg()).click();
})

Then('User should see the dialog  window',async () => {
    const diglow = lgn.dilogwnd();
    (await diglow).isDisplayed();
})

Then('User click on Command One link',async () => {
    const cmdone = lgn.cmdOne();
    (await cmdone).click();
})

