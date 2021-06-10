import { LightningElement } from 'lwc';

export default class ForeachIteratorExample extends LightningElement {

    contacts = [
        {
            Id: 1,
            Name: '진원',
            Title: 'VP of Engineer'
        },
        {
            Id: 2,
            Name: '진순',
            Title: 'VP of PM'
        },
        {
            Id: 3,
            Name: '진',
            Title: 'CEO'
        }
    ]
}