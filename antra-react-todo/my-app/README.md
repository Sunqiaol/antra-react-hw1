How do you decide when to split a component into subcomponents?

    We can decide to split a component int oa subcomponents when a component become too big or complex by dividing them it would increase the readability, Also if a part of the component could be reused in other component. It will also be better when we are testing them.         
What is the difference between state and props?

    A state is manage inside a component and can be mutable and changed

    A props is passed into a component and it immutable and it use to pass data from one component to another
How to trigger rerender in a component?

    1. State change when the value of a state is changed
    2. Prop change
    3. When the parent component changed
Why do you like react over other front-end libraries and frameworks?

    1.React is Faster and more light weight with Virtual DOM
    2. Use of Component and JSX and Hook making the code more orgianze and readiable

What’s the difference between controlled components and uncontrolled components?


    A Controlled component is a components that the state is controlled by React using a state and a onChange Handler 

    A uncontrolled components is manage by DOM itself
How to prevent components from unnecessary rerendering?

    To Prvent Components from unnecessary rerendering we can use memo and callback function when the props and state didnt change


Why are props needed to be immutable?

    Props needed to be immutable because when you change the prop in your component it would also affect the parent component which make it harder to organze 

 


Explain the Virtual DOM and how React uses it to improve performance.

    Virtual Dom is a A feature in React where everytime some change are made it would crate another DOM that compares it with the perivous DOM, and it would have look for the difference and rerender only the changed part which save a lot of time


Can you explain the useMemo and useCallback hooks and provide examples of when you might 
use them?

    UseMemo memoize the result of a calculation so we can have to calculate it every rendering

    UseCallback memoize a function should we dont have to redefining it everytime we rerender


Explain the concept of Higher-Order Components (HOCs) and provide an example use case.



    HOCs are function that take a component and return a new component with additional props or behavior

Discuss the differences between React's class components and functional components. Which one do you prefer and why?
    
    
    React Class component has lifecycle methods and use this key word and it require render method that retusn JSX

    while Functional component is defined as a function and it useState Hooks and it use Effect and making it readble 

    I perfer to use Functional component because I think it more easier to implnment and easier to read with all the hook function 


How do you ensure your code is maintainable and scalable?

    To ensure maintainable and scalable code we were create reusable component, breaking down large components to smaller comonent and meaningful naming conversion 


