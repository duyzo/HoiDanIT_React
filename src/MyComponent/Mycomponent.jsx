// React.Fragment
import './style.css'
let sayHi = "Hello Duy Dz"
let age = 19
let MyComponent = () => {
    return (
        <> 
        <div>MyComponent Import</div>
        <div className="JSX">Test {sayHi} {age}</div>
        <div>{console.log("Hello Duy Dz")}</div>
        </>
    )
  }
  
export default MyComponent;  
