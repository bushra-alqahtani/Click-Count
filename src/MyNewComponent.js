import React,{useState} from 'react';

const StatfulCount = props => {
    const [state,setState] = useState({
        clickCount: 0
    });
            
    const clickHandler= () => {
        
        setState({
            clickCount: state.clickCount + 1   
        });
    }
   
    return(
        <div>
            

           <button class="glow-on-hover" type="button" onClick={clickHandler}>you clicked {state.clickCount} times</button>
        </div>
        
    );
}
 export default StatfulCount;
