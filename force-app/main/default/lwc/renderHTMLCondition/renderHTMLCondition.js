import { LightningElement } from 'lwc';

export default class RenderHTMLCondition extends LightningElement {
    areaDetailVisible = false;
    handleChange(event){
        this.areaDetailVisible = event.target.checked;
    }
}