import React from 'react';

const Footer = props => {
    return (
        <footer className="footer">
            <div className="d-sm-flex justify-content-center justify-content-sm-between">
            <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2019 <a
                href="#" target="_blank">MERN Dashboard</a>. All rights reserved.</span>
                {/*<span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted & made with <i*/}
                    {/*className="mdi mdi-heart text-danger"/></span>*/}
            </div>
        </footer>
    )
};

export default Footer;