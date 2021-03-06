import { LightningElement } from 'lwc';

export default class CalcExample extends LightningElement {
    firstNumber;
    secondNumber;
    result;
    handleAddition(){
        this.result = parseInt(this.firstNumber) + parseInt(this.secondNumber);
    }
    handleChange(event){
        if(event.target.name === 'fNumber'){
            this.firstNumber = event.target.value;
        }else if(event.target.name === 'sNumber'){
            this.secondNumber = event.target.value;
        }
    }
}