import React,{Component} from 'react';
function refsHOC (WrappedComponent) {
    return class HOCComponent extends Component {
        constructor() {
            super(...arguments);
            this.linkRef = this.linkRef.bind(this);
        }
        linkRef(wrappedInstance) {
            this._root = wrappedInstance;
        }
        render() {
            const props = {...this.props,refs : this.linkRef};
            console.log('refsProps',props);
            return <WrappedComponent {...props}/>
        }
    }
}
export default refsHOC;