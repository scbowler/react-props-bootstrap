import React from 'react';

const Header = (props) => {

    const listOfLinks = props.links.map((link, index) => {

        return <li key={index}><a href="#">{link}</a></li>
    });

    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <p className="navbar-brand">{props.brandName}</p>
                </div>
                <div>
                    <ul className="nav navbar-nav">
                        {listOfLinks}
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Header;
