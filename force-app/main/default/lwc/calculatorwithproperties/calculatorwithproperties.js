import { LightningElement, api } from 'lwc';

export default class Calculatorwithproperties extends LightningElement {
    @api title;
    @api fnumber;
    @api snumber;
    result;

    connectedCallback(){
        this.result = parseInt(this.fnumber) + parseInt(this.snumber);
    }
    handleChange(event){
        console.log('event.target.name : ', event)
        if(event.target.name === 'fstNumber'){
            this.fnumber = parseInt(event.target.value);
        } else if(event.target.name === 'scdNumber'){
            this.snumber = parseInt(event.target.value);
        }
        
        this.result = parseInt(this.fnumber) + parseInt(this.snumber);
    }
}