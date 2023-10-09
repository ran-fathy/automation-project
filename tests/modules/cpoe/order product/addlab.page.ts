import { Page,Locator } from "@playwright/test";
export class addlab{

    readonly page:Page;
    readonly orders:Locator;
    readonly orderentry:Locator;
    readonly productclassificationfiled:Locator;
    readonly laboratory:Locator;
    readonly searchfield:Locator;
    readonly selectedprouct:Locator;
    readonly physicainsearch:Locator;
    readonly selectedphysicain:Locator;
    readonly orderbtn:Locator;
    readonly required:Locator;


    constructor(page:Page){
        this.page=page;
        this.orders=page.getByText('Orders', { exact: true });
        this.orderentry=page.getByText('Order Entry');
        this.productclassificationfiled=page.getByLabel('select').nth(2);
        this.laboratory=page.getByRole('option', { name: 'Laboratory' }).locator('span');
        this.searchfield=page.getByPlaceholder('Add new laboratory using the investigation code or name');
        this.selectedprouct=page.locator('#ClassificationGridId td .ClassificationItem');
        this.physicainsearch=page.getByPlaceholder('Requesting Physician *');
        this.selectedphysicain=page.getByRole('option', { name: 'Abdel Ghafar Ahmed Selim' });
        this.orderbtn=page.getByRole('button', { name: 'Order', exact: true });
        this.required=page.locator('[class="control-label has-error validationMessage"]');

    }

    async  Navigate_To_cpoe(url:string) {
        await this.page.goto(url);
        
    }
    async addlaborder(searchfield:string,selectedphysicain:string){
        await this.orders.click();
        await this.orderentry.click();
        await this.productclassificationfiled.click;
        await this.laboratory.click();
        await this.searchfield.click();
        await this.searchfield.fill('cbc');
        await this.selectedprouct.hover();
        await this.selectedprouct.click();
        await this.physicainsearch.click();
        await this.physicainsearch.fill('ahmed');
        await this.selectedphysicain.click();
        await this.orderbtn.click();
    }
    async checkRequiredFiled(searchfield:string,selectedphysicain:string){
        await this.orders.click();
        await this.orderentry.click();
        await this.productclassificationfiled.click;
        await this.laboratory.click();
        await this.searchfield.click();
        await this.searchfield.fill('cbc');
        await this.selectedprouct.hover();
        await this.selectedprouct.click();
        await this.physicainsearch.click();
        await this.physicainsearch.fill('ahmed');
        await this.selectedphysicain.click();
        await this.orderbtn.click();
        await this.required.isVisible();

    }

};