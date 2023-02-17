export default class loginpage{

async apiDemos(){
    const apiDemos =  $('//android.widget.TextView[@text = "API Demos"]');
     return apiDemos;

    }

async app(){
    const app =  $('~App');
   return app;

}

async alert(){
    const alert =  $('~Alert Dialogs');
   return alert;

}

async listDlg(){
    const listDlg =  $('~List dialog');
   return listDlg;

}


async cmdOne(){
    const cmdOne =  $('//android.widget.TextView[@text = "Command one"]');
    return cmdOne;

    }

    async dilogwnd(){
        const dilogwnd =  $('//android.widget.LinearLayout[@text = "LIST DIALOG"]');
        return dilogwnd;
    
        }
    


}