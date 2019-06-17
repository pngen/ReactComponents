# react-clock-analog-digital

# Bug Fixes
## Always use fat-arrow functions (=>)

When creating stateless/functional components during method declaration, the textbook code had a bug where `const DigitalDisplay = function DigitalDisplay(props) {...}` and `const AnalogDisplay = function AnalogDisplay(props) {...}` would not be invoked I think. 

Therefore, the fix is to use `const DigitalDisplay = props => {...}` and `const AnalogDisplay = props => {...}` instead. Much easier to read with arrow functions, thanks to lambdas and ES6!

Remember: JSX is not browser-native, meaning you still have to compile to regular JavaScript using Babel 6.
