/*import { LightningElement } from 'lwc';

export default class ActiveTabExample extends LightningElement {
    showTabFour;

    tabContent = '';

    handleActive(event) {
        const tab = event.target;
        this.tabContent = `Tab ${
            event.target.value
        }`;

    }
    toggleOptionalTab() {
        this.showTabFour = !this.showTabFour;
    }
}*/

import { LightningElement } from 'lwc';

const NUM_OF_TABS = 3;

export default class TabsetOnActive extends LightningElement {
    activeValueMessage = '';

    get tabs() {
        const tabs = [];
        for (let i = 0; i < NUM_OF_TABS; i++) {
            tabs.push({
                value: `${i}`,
                label: `Item ${i}`,
                content: `Tab Content ${i}`,
            });
        }
        return tabs;
    }
    /*
    get tabs() {
        return [
            { label: '1', value: '' },
            { label: '1', value: '1' },
            { label: '2', value: '2' },
            { label: 'More than 2', value: '3' },
        ];
    }
    
    */

    handleActive(event) {
        switch (event.target.value){
            case '0':
                this.activeValueMessage = `Tab with value 0 is now active`;
        break;
            case '1':
                this.activeValueMessage = `Tab with value 1 is now active`;
        break;
            case '2':
                this.activeValueMessage = `Tab with value 2 is now active`;
        break;
        default:

        }
        
       // this.activeValueMessage = `Tab with value ${event.target.value} is now active`;
    }
}


