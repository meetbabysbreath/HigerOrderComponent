import React,{Component} from 'react';
function removeProps(WrappedComponent) {
    return function newRender(props) {
        return <WrappedComponent {...props}/>
    }
}
export default removeProps;