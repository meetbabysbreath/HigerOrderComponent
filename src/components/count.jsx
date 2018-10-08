import React,{Component} from 'react';
import WrappedCount from './HOC/wrappedCount.jsx';
import RemoveProps from './HOC/removeProps.jsx';
class Count extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div style={this.props.style}>
                hhhhhh
            </div>
        )
    }
}
export default Count(Count);
// export default WrappedCount()(Count);