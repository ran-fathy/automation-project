import {test,expect, Page, Browser, Locator} from '@playwright/test'
import { treatmentplan } from './treatmentplan.page'; 
import { capturePatientPage} from '@tests/shared/components/capture-patient/capture-patient.page';
import { capturePatient } from '@tests/shared/components/capture-patient/capture-patient.spec';

let page : Page;
let count=Date.now().toString();
test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await capturePatient(page);
  });




test.describe('All cases for starttreatmentplan ',() => {
    
test("start treatment plan ",async () => { 
    const starttreatmentplan=new treatmentplan(page);
        

    
      await starttreatmentplan.starttreatmentplan();
   

    // class="k-notification-wrap"
   
//  const scuccessToaster=   await page.locator[".k-animation-container .k-notification .k-notification-content p"];
//  console.log(scuccessToaster);
// console.log(scuccessToaster.textContent());
 
 //await expect( page.locator[".k-animation-container .k-notification .k-notification-content p"] ).toBeVisible();


    // class="k-icon k-i-success"
    // class="k-widget k-popup k-notification k-notification-success k-state-border-up"


});
test("stop treatment plan ",async () => { 
    const stoptreatmentplan=new treatmentplan(page);
    await stoptreatmentplan.stoptreatmentplan();
    await expect (page.getByText('Treatmen plan has been stopped successfully!')).toBeVisible();


});
});