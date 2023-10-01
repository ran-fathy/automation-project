import { Page,Locator } from "@playwright/test";
export class treatmentplan{

    readonly page:Page;
    readonly orders:Locator;
    readonly TreatmentPlan:Locator;
    readonly assignto:Locator;
    readonly filterbtn:Locator;
    readonly selectedtreatmentplan:Locator;
    readonly startbtn:Locator;
    readonly diagnosissklp:Locator;
    readonly savebtn:Locator;
    readonly viewpatienttreatmentplan :Locator;
    readonly startedfilter:Locator;
    readonly startedtreatmentplan:Locator;
    readonly stopbtn:Locator;
    readonly reasonsklp:Locator;
    readonly stopaction:Locator;


    constructor(page:Page){
        this.page=page;
        this.orders=page.getByText('Orders', { exact: true });
        this.TreatmentPlan=page.getByText('TreatmentPlan');
        this.assignto=page.locator('[class="k-checkbox k-custom-checkbox mr-3"]');
        this.filterbtn=page.locator('[class="bo-cta-bg bo-white-txt pl-4 pr-4 mx-2 float-right"]');
        this.selectedtreatmentplan=page.locator('[class="trimspan treatmentplanname long"]');
        this .startbtn=page.locator('[class="no-bg cursor-pointer k-grid-startTreatmentPlan start-plan plan-btns no-border no-shadow btn-txt-green-dark-hover fa-1x d-inline-block"]');;
        this .diagnosissklp=page.locator('[class="k-multiselect-wrap k-floatwrap"]');
        this .savebtn=page.locator('[class="btn pull-right btn-primary"]');
        this. viewpatienttreatmentplan =page.locator('[class="k-link pr-4 pl-4 pl-4 k-item k-state-default k-last"]');
        this. startedfilter=page.locator(('[class="bo-cta-bg bo-white-txt pl-4 pr-4 mx-2 float-right"]'));
        this. startedtreatmentplan=page.locator(('[class="trimspan startdatetime dashed k-state-border-down"]'));
        this. stopbtn=page.locator(('[class="no-bg k-grid-stopTreatmentPlan d-inline-block stop-plan plan-btns no-border no-shadow btn-txt-green-dark-hover fa-1x cursor-pointer"]'));
        this. reasonsklp=page.locator(('class="k-dropdown-wrap k-state-default"]'));
        this. stopaction=page.locator(('class="btn pull-right btn-primary"]'));

    }
    async  Navigate_To_cpoe(url:string) {
        await this.page.goto(url);
        
    }
    async starttreatmentplan (){
        await this.orders.click();
        await this.TreatmentPlan.click();
        await this.assignto.setChecked;
        await this.filterbtn.click();
        await this.selectedtreatmentplan.selectOption({label:'alaa cpg'});
        await this.startbtn.click();
        await this.diagnosissklp.selectOption({label:'Dementia in Alzheimer s disease with early onset (G30.0+)'});
        await this.savebtn.click();
   
    }
    async stoptreatmentplan(){
        await this.orders.click();
        await this.TreatmentPlan.click();
        await this.viewpatienttreatmentplan.click();
        await this.startedfilter.click();
        await this.stopbtn.click();
        await this.reasonsklp.selectOption({label:'Reason 2'});
        await this.stopaction.click();

    }

};
