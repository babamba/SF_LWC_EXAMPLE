import { LightningElement } from 'lwc';

export default class DataBindingExample extends LightningElement {
    message='Sample Web Component'   
    handleChange(event){
        this.message = event.target.value;
    }
}