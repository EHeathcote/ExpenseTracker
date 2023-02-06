# ExpenseTracker

##Learning React.js basics by building an Expense Tracker app##
###Skills/concepts learned:###
*Building custom React components
  *component is a function that returns JSX
  *React calls app.js function and then any custom components in the JSX will be called and so on when application is intially rendered
  *evaluates overall result and translates into DOM instructions 
*Outputting dynamic data and working with expressions in JSX
*Passing data via props
*Adding JS logic to components
*Splitting one component into multiple
*Composition- building a UI from smaller building blocks (children props)
*Listening to events and workign with event handlers
  *pass a "pointer" at the to-be-executed function as a value to onClick prop-this function gets executed "on your behalf" by React when the event occurs
*Working with state (react.useState(pointer at managed value, function to change value))
  *named import from react library
  *change in state tells react to reevaluate component function
  *useState must only be called directly in react component function
  *use the "function form" of the state updating function when relying on a previous state for state update
*Two-way binding
*Child-to-parent component communication (bottom-up)
*Lifting the state up
*Rendering lists and conditional content
  *keys are required by react to properly update lists
