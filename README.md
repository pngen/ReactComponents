# clock-analog-digital (React)
# Demo
![Real-Time React Clock](demogif/clock-analog-digital.gif)

# Bug Fixes
## Always Use Arrow Functions (=>)

When creating stateless/functional components during method declaration, the textbook code had a bug where:<br />
`const DigitalDisplay = function DigitalDisplay(props) {...}`<br /> 
and:<br /> 
`const AnalogDisplay = function AnalogDisplay(props) {...}`<br />
would not be invoked. 

Instead, use modern JavaScript/ES6 like:<br /> 
`const DigitalDisplay = (props) => {...}`<br /> 
and:<br /> 
`const AnalogDisplay = (props) => {...}`
<br /> 

Now the code is much easier to read with arrow functions, thanks to lambdas and ES6. 
Remember: JSX is not browser-native, meaning you still have to compile to regular JavaScript using Babel 6.
