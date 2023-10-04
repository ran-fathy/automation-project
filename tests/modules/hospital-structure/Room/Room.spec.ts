import {test,expect} from '@playwright/test'
import { AddRoom } from './Room.page';

test('Add Room', async ({ page }) => {

let count=Date.now().toString();
test.describe('All cases for Add Room',() => {
    
test("Add Room",async ({page}) => { 
    const newRM=new AddRoom(page);
    await newRM.Navigate_To_AddRoom('http://backoffice-prelive.andalusiagroup.net:8090/hospital-structure/operations/hospital-structure-setup/');
    await newRM.AddRoom('NourEn'+count,'NourAr'+count);
    await expect (page.getByText('NourAREn'+count)).toBeVisible();
    

});
test("Reqired 'English Name' Add Room ",async ({page}) => { 
    const newRM= new AddRoom(page);
    await newRM.Navigate_To_AddRoom('http://backoffice-prelive.andalusiagroup.net:8090/hospital-structure/operations/hospital-structure-setup/');
    await newRM.checkRequiredFiled('','NourAr'+count);
    await expect (page.getByText('Required')).toBeVisible();

});

test("Reqired 'Arabic Name' Add Room",async ({page}) => { 
    const newRM= new AddRoom(page);
    await newRM.Navigate_To_AddRoom('http://backoffice-prelive.andalusiagroup.net:8090/hospital-structure/operations/hospital-structure-setup/');
    await newRM.checkRequiredFiled('NourEn'+count,'');
    await expect (page.getByText('Required')).toBeVisible();


});

test("Duplicate 'English Name'Add Room",async ({page}) => { 
    const newRM= new AddRoom(page);
    await newRM.Navigate_To_AddRoom ('http://backoffice-prelive.andalusiagroup.net:8090/hospital-structure/operations/hospital-structure-setup/');
    await newRM.AddRoom('NourEn','NourAr'+count);
    await expect (page.getByText('Duplicated')).toBeVisible();
       
});

test("Duplicate 'Arabic Name' Add Room",async ({page}) => { 
    const newRM=new AddRoom(page);
    await newRM.Navigate_To_AddRoom ('http://backoffice-prelive.andalusiagroup.net:8090/hospital-structure/operations/hospital-structure-setup/');
    await newRM.AddRoom('NourEn'+count,'NourAr');
    await expect (page.getByText('Duplicated')).toBeVisible();
       
});

});