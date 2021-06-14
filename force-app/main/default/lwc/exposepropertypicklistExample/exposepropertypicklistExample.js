import { LightningElement, api ,wire } from 'lwc';
import getRecords from '@salesforce/apex/Utilitycls.getRecords';
export default class ExposepropertypicklistExample extends LightningElement {
    @api objectName;
    @wire(getRecords, { objName: '$sobjectName'}) records;

    get recordsname(){
        if(this.objectName){
            this.sobjectName = this.objectName;
            return this.objectName+ 'Records';
        }
    }
}