import React,{Component} from 'react';
const count = (WrappedComponent,newProps) => class extends Component{
    render() {
        let {style} = this.props;
        return (
            //把组件用div包起来，也可以组合做个react组件
            <div style={ style || {} }>
                <WrappedComponent {...this.props}
                    {...newProps}//添加新属性
                    handleClick = {()=>{this.handleClick()}}//添加事件
                ></WrappedComponent>
            </div>
        )
    }
    handleClick(){

    }
}
export default count;
// export default function count(){
//     return function(WrappedComponent) {
//         class cc extends Component {
//             render() {
//                 return <WrappedComponent {...this.props}/>
//             }
//         }
//         return cc;
//     }
// }