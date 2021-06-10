import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContactList';

export default class WireApexMethodToFunction extends LightningElement {
    contacts;
    errorMessage;
    @wire(getContacts) retrieveContacts({error, data}) {
        if(data){
            this.contacts = data;
            this.errorMessage = undefined;
        } else if(error) {
            this.contacts = undefined;
            this.errorMessage = error;
        }
    }
}