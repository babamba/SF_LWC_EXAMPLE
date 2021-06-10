import { LightningElement } from 'lwc';
import templateOne from './templateOne.html';
import templateTwo from './templateTwo.html';

export default class MultipleTemplateRender extends LightningElement {
    showTemplateOne = true;

    switchTemplate(){
        this.showTemplateOne = !this.showTemplateOne
    }
    render() {
        return this.showTemplateOne ? templateOne : templateTwo;
    }
}