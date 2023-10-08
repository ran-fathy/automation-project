import {test,expect} from '@playwright/test'
import { addlab } from './addlab.page'; 
let count=Date.now().toString();
test.describe('All cases for add lab',() => {
    

test("add lab order",async ({page}) => { 
    const addlaboorder=new addlab(page);
    await addlaboorder.Navigate_To_cpoe('http://backoffice-prelive.andalusiagroup.net:8090/physicianDesktop');
    await addlaboorder.addlaborder('cbc'+count,'Ahmed'+count);
     await expect  (page.getByText('Ordered Successfully!')).toBeVisible();


});
test("check reuired field",async ({page}) => { 
    const checkRequiredFiled=new addlab(page);
    await checkRequiredFiled.Navigate_To_cpoe('http://backoffice-prelive.andalusiagroup.net:8090/physicianDesktop');
    await checkRequiredFiled.checkRequiredFiled(''+count,''+count);
    await expect (page.getByText('Required')).toBeVisible();


});
});