import React from 'react';
import Header from './header';
import Jumbotron from './jumbotron';
import Panel from './panel';
import Button from './button';
import './app.css';

const navLinks = ['Cool Stuff', 'Reviews', 'Blog', 'About Us','Sign In', 'Register'];

const panelObj = {
    color: 'green',
    heading: 'Green panel created from an object',
    body: 'This panel was created from an object refer to app.js to see how the magic was done! Note that since the objects keys match the expected props of the Panel component, you can use the spread operator to add all the props to the panel component.'
}

const btnObj = {
    color: 'yellow',
    label: 'Yellow Btn Created From Obj',
    click: (event) => {
        console.log('The yellow button was clicked. This button was created using an object. Because the keys in the object match the expected props we were able to use the spread operator to add all the props to the Button component... even the click handler. Here is the element that was clicked:', event.target);
    }
}

const App = () => (
    <div className="container">
        {/* Header Example: created in header.js */}
        <Header brandName="Props &amp; Bootstrap" links={navLinks}/>

        {/* Jumbotron Example: created in jumbotron.js */}
        <Jumbotron 
            mainTitle="Welcome to the props and bootstrap demo!"
            subText="An example of using props to create custom dynamic bootstrap styled components that can be reused throughout your app"
        />

        {/* Panel Examples: created in panel.js */}
        <div className="row">
            <div className="col-sm-4 col-xs-12">
                <Panel color="blue" heading="Example of a blue/primary panel" body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa sunt sint maxime necessitatibus optio ratione commodi officia eligendi, dolore suscipit."/>
            </div>
            <div className="col-sm-4 col-xs-12">
                <Panel color="warning" heading="Example of a yellow/warning panel" body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dignissimos aperiam provident, eligendi quidem a ducimus laboriosam pariatur, obcaecati dolor."/>
            </div>
            <div className="col-sm-4 col-xs-12">
                <Panel color="red" heading="Danger! Danger!" body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque hic itaque perspiciatis, cumque architecto excepturi non rerum? Molestiae, iste, cum."/>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-6 col-sm-offset-3 col-xs-12">
                <Panel {...panelObj}/>
            </div>
        </div>

        {/* Button Examples: created in button.js */}
        <div className="row">
            <div className="col-xs-12 text-center">
                <Button color="primary" label="Blue Btn 1" click={() => console.log('Blue Btn 1 clicked')}/>
                <Button color="danger" label="Danger Btn 1" click={() => console.log('Danger Btn 1 clicked')}/>
                <Button {...btnObj} />
                <p><em>Open console to view click event results</em></p>
            </div>
        </div>
    </div>
);

export default App;
