import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContactList';

export default class WireMethodToProperty extends LightningElement {
    @wire(getContacts) contacts;
}