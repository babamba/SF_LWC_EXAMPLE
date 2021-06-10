import getContacts from '@salesforce/apex/ContactController.getContactList';
import { LightningElement, track } from 'lwc';

export default class Invokeapexmethodimperatively extends LightningElement {
    @track contacts;
    @track error;    
    handleLoad() {
        getContacts()
        .then(result=>{
            this.contacts = result;
        })
        .catch(error=>{
            this.error=error;
        });
    }
}