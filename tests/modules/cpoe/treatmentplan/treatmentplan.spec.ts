import {test,expect} from '@playwright/test'
import { treatmentplan } from './treatmentplan.page'; 
let count=Date.now().toString();
test.describe('All cases for starttreatmentplan ',() => {
    

test("start treatment plan ",async ({page}) => { 
    const starttreatmentplan=new treatmentplan(page);
    await starttreatmentplan.Navigate_To_cpoe('http://backoffice-prelive.andalusiagroup.net:8090/physicianDesktop');
    await starttreatmentplan.starttreatmentplan();
     await expect  (page.getByText('Treatmen plan Started Successfully!')).toBeVisible();


});
test("stop treatment plan ",async ({page}) => { 
    const stoptreatmentplan=new treatmentplan(page);
    await stoptreatmentplan.Navigate_To_cpoe('http://backoffice-prelive.andalusiagroup.net:8090/physicianDesktop');
    await stoptreatmentplan.stoptreatmentplan();
    await expect (page.getByText('Treatmen plan has been stopped successfully!')).toBeVisible();


});
});