import React from 'react'
import Mounting from './Mounting'
import Updating from './Updating'

 function Notes() {
  return (
    <div>
    <h1>React Lifecycle </h1>
    <h3>React component Lifecycle  consists of four Lifecycle phases</h3>
   <h4> 1. Intialization phase , 2. Mounting phase , 3.Updating Phase , 4.Unmounting Phase</h4>
    <div>
<h4>Initialization phase</h4>
 1.In this phase we initialise all the state variable and all the props which your component might be receiving will also get assigned with the proper values.
</div>
<div>
   <h4>Mounting Phase</h4> 
  <p>1.In this phase your component will be mounted on the screen for the very first time .</p>
  <p> 2. This contains functions 1. constructor, 2. render , c. componentDidMount.</p>
  <p> a.constructor : In this function we can create the state variable also if we want access the props before the component gets mounted so we can access in the constructor function.</p>
  <p>-- Before ES6 we also used to bind the functions in this function to access them throughout the component.</p>
   <p> b.render : This function is the most important one, since it is responsible to return the HTML and styling part of the component.</p> 
   <p> --In this we do not write normal HTML instead we will be writing JSX in the component, which is writing HTML inside JS.</p>
   <p> -- This JSX gets transpiled using babel to convert it from ES6 to ES5 so that your browser can understand.</p>
<p>c.componentDidMount : This function will be running just what render function.</p>
<p>-- We dont have to call this function, we just need to define it, it will be called automatically.</p>
<p>--  This function is the place where we should write all the server calls. So that your html from render function will be loaded first and then the data will be coming from the server and will be rendered on the screen.</p>
  <Mounting/>    
</div>
<div>
 <h4>Updating phase</h4> 
 <p>1. This phase comes when the component gets updated because of any changes made by user like any click on any button, or if user is giving any input or any event which we want to handle. So in that case the component has to be updated.</p>
    <p> 2. In react, we do not update the Real DOM directly instead we use Virtual DOM to update the component, this makes react component efficient.</p>
<p>a.render :-- This function is the most important one, since it is responsible to return the HTML and styling part of the component. </p>
    <p>--In this we do not write normal HTML instead we will be writing JSX in the component, which is writing HTML inside JS.</p>
    <p>-- This JSX gets transpiled using babel to convert it from ES6 to ES5 so that your browser can understand.</p>
        <p>b.componentDidUpdate :-- This function will be called after the component is updated. </p>
        <Updating/>
      </div>
  <div>
        <h4>Unmounting phase</h4> 
        <p>1.In this phase  componentWillUnmount will be called, because over here we are removing the component from the DOM so no render and constructor function will be called.</p>
        <p>a.componentWillUnmount :-- This function will be called after the removing ths component from the DOM </p>
  </div>
    </div>
  )
}
export default Notes;