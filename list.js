import { LightningElement } from 'lwc';

export default class SelectBasic extends LightningElement {
    value = '';

    get options() {
        return [
            { label: 'choose one...', value: '' },
            { label: '1', value: '1' },
            { label: '2', value: '2' },
            { label: 'More than 2', value: '3' },
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
    }
}