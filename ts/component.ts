import { $selector } from './utils';

/**
 * IComponent Interface
 */
interface IComponent {
    name?: string;
    selector: string;
    code: string;
}

/**
 * Component class
 */
class Component implements IComponent {

    //Properties
    public name: string;
    public selector: string;
    public code: string;

    /**
     * Constructor of Component
     * @param componentObj IComponent Interface
     */
    constructor(componentObj: IComponent){
        this.name = componentObj.name;
        this.selector = componentObj.selector;
        this.code = componentObj.code;
    }

    /**
     * Render function
     */
    render() : boolean {
        if(this.selector && this.code){
            let element = $selector(this.selector);

            if(element && element.innerHTML){
                element.innerHTML = this.code;
            } else {
                return false;
            }

            return true;
        } else {
            return false;
        }
    }

    destroy() : boolean {
        return false;
    }
}