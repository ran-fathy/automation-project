import { Page,Locator } from "@playwright/test";
export class AddRoom{

    readonly page:Page;
    readonly newRMBtn:Locator;
    readonly RoomEnName:Locator;
    readonly RoomArName:Locator;
    readonly RoomType:Locator;
    readonly RoomGroup:Locator;
    readonly Classification:Locator;
    readonly saveBtn:Locator;
    readonly cancelBtn:Locator;
    readonly requiredText:Locator;
    PrefixCode: any;


    constructor(page:Page){
        this.page=page;
        this.newRMBtn=page.locator('[class="blue-btn k-button k-button-icontext k-grid-add"]');
        this.RoomEnName=page.locator('[class="form-control only-left-text">"]');
        this.RoomArName=page.locator('[class="form-control only-right-text">"]');
        this.RoomType=page.getByTitle('id="Medical');
        this.RoomGroup=page.locator('class="k-input form-control"');
        this.Classification=page.getByPlaceholder('placeholder="Select Classification');
        this.saveBtn=page.locator('[class="k-button btn mx-2 saveBtn"]');
        this.cancelBtn=page.locator('[class="btn btn-txt-cancel"]');
        this.requiredText=page.getByText('Required');
    }

    async  Navigate_To_AddRoom(url:string) {
        await this.page.goto(url);
    }
    async AddRoom (EnName:string,ArName:string){
        await this.newRMBtn.click();
        await this.RoomEnName.click();
        await this.RoomEnName.fill(EnName);
        await this.RoomArName.click();
        await this.RoomArName.fill(ArName);
       // await this.RoomType.click();
        await this.RoomGroup.click();
        await this.Classification.click();
        await this.saveBtn.click();

    }

    //Check English and Arabic name and Classification and Room group
    async checkRequiredFiled (RoomEnName:string,RoomArName:string){
        await this.newRMBtn.click();
        await this.RoomEnName.click();
        await this.RoomEnName.fill(RoomEnName);
        await this.RoomArName.click();
        await this.RoomArName.fill(RoomArName);
        await this.RoomGroup.selectOption({label:'Nurse station'});
        await this.Classification.selectOption({label:'ER'});
        await this.saveBtn.click();
        await this.requiredText.isVisible(); 
    }
     async checkEmptyClassification (RoomEnName:string,RoomArName:string,_RoomGroup:Locator){
        await this.newRMBtn.click();
        await this.RoomEnName.click();
        await this.RoomEnName.fill(RoomEnName);
        await this.RoomArName.click();
        await this.RoomArName.fill(RoomArName);
        await this.RoomGroup.click();
        await this.saveBtn.click();
        await this.requiredText.isVisible(); 

    }
}
  


