What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
answer: getElementById select the id attribute,getElementsByClassName select all class attribute and querySelector select one id or one class and querySelectorAll select all same id or same class or other tags.
How do you create and insert a new element into the DOM?
answer: 
const newDiv = document.createElement("div");  
newElement.innerHtml = "Hi!";      
document.body.appendChild(newDiv);    

What is Event Bubbling and how does it work?
answer: Event bubbling is the  behavior where an click event triggered on a child element with its parent elements.
What is Event Delegation in JavaScript? Why is it useful?
What is the difference between preventDefault() and stopPropagation() methods?
preventDefault() stops the auto submission and browser reload.
stopPropagation() uses for solve the event bubbling problem.
