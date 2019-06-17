# react-clock-analog-digital

# Bug Fixes
## Always Use Arrow Functions! (=>)

When creating stateless/functional components during method declaration, the textbook code had a bug where <br />
`const DigitalDisplay = function DigitalDisplay(props) {...}`<br /> 
and:<br /> 
`const AnalogDisplay = function AnalogDisplay(props) {...}` would not be invoked. 

Therefore, the fix is to use<br /> 
`const DigitalDisplay = (props) => {...}` and <br /> 
`const AnalogDisplay = (props) => {...}`
instead. <br /> 

Now the code is much easier to read with arrow functions, thanks to lambdas and ES6. 
Remember: JSX is not browser-native, meaning you still have to compile to regular JavaScript using Babel 6.
