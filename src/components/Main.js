import React,{Component} from 'react';

import Count from './count';
import Summary from './summary';//总计
import store from 'stores';
import wrappedCount from './HOC/wrappedCount.jsx';
import refsComponent from './HOC/refsHOC.jsx';
const FirstCount = wrappedCount(Count,{title : 'first'});
const SecondCount = wrappedCount(Count,{title : 'second'});
const ThirdCount = refsComponent(Count);
class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count : store.getState().count
    }
  }
  
  render() {
    let {count} = this.state;
    return (
      <div>
        <FirstCount/>
        <SecondCount/>
        <ThirdCount/>
        {/* <Count captionType = 'first' style={{color:'#000'}} count={count} />
        <Count captionType = 'second' style={{color:'#030'}} count={count}/>
        <Count captionType = 'third' style={{color:'#090'}} count={count}/> */}
        <Summary  count={count}/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
