import React from 'react';
import {Button} from "antd";

const Header = () => {
    const loginHandler = () => {

    }
    return (
        <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                <a className="navbar-brand brand-logo" href="#"><img
                    src={require("../assets/images/logo.svg")} alt="logo"/></a>
                <a className="navbar-brand brand-logo-mini" href="#"><img
                    src={require("../assets/images/logo-mini.svg")}
                    alt="logo"/></a>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-stretch">
                <div className="search-field d-none d-md-block">
                    <form className="d-flex align-items-center h-100" action="#">
                        <div className="input-group">
                            <div className="input-group-prepend bg-transparent">
                                <i className="input-group-text border-0 mdi mdi-magnify"/>
                            </div>
                            <input type="text" className="form-control bg-transparent border-0"
                                   placeholder="Search projects"/>
                        </div>
                    </form>
                </div>
                <ul className="navbar-nav navbar-nav-right">
                    <li className="nav-item nav-profile dropdown">
                        <a className="nav-link dropdown-toggle" id="profileDropdown" href="#" data-toggle="dropdown"
                           aria-expanded="false">
                            <div className="nav-profile-img">
                                <img src={require("../assets/images/faces/face1.jpg")} alt="image"/>
                                <span className="availability-status online"/>
                            </div>
                            <div className="nav-profile-text">
                                <p className="mb-1 text-black">David Greymaax</p>
                            </div>
                        </a>
                        <div className="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">
                            <a className="dropdown-item" href="#">
                                <i className="mdi mdi-cached mr-2 text-success"/> Activity Log </a>
                            <div className="dropdown-divider"/>
                            <a className="dropdown-item" href="#">
                                <i className="mdi mdi-logout mr-2 text-primary"/> Signout </a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="#"
                           data-toggle="dropdown" aria-expanded="false">
                            <i className="mdi mdi-email-outline"/>
                            <span className="count-symbol bg-warning"/>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                             aria-labelledby="messageDropdown">
                            <h6 className="p-3 mb-0">Messages</h6>
                            <div className="dropdown-divider"/>
                            <a className="dropdown-item preview-item">
                                <div className="preview-thumbnail">
                                    <img src={require("../assets/images/faces/face4.jpg")} alt="image"
                                         className="profile-pic"/>
                                </div>
                                <div
                                    className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                    <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Mark send you a
                                        message</h6>
                                    <p className="text-gray mb-0"> 1 Minutes ago </p>
                                </div>
                            </a>
                            <div className="dropdown-divider"/>
                            <a className="dropdown-item preview-item">
                                <div className="preview-thumbnail">
                                    <img src={require("../assets/images/faces/face2.jpg")} alt="image"
                                         className="profile-pic"/>
                                </div>
                                <div
                                    className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                    <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Cregh send you
                                        a
                                        message</h6>
                                    <p className="text-gray mb-0"> 15 Minutes ago </p>
                                </div>
                            </a>
                            <div className="dropdown-divider"/>
                            <a className="dropdown-item preview-item">
                                <div className="preview-thumbnail">
                                    <img src={require("../assets/images/faces/face3.jpg")} alt="image"
                                         className="profile-pic"/>
                                </div>
                                <div
                                    className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                    <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Profile picture
                                        updated</h6>
                                    <p className="text-gray mb-0"> 18 Minutes ago </p>
                                </div>
                            </a>
                            <div className="dropdown-divider"/>
                            <h6 className="p-3 mb-0 text-center">4 new messages</h6>
                        </div>
                    </li>
                    <li className="nav-item nav-logout d-none d-lg-block">
                        <Button type="link" className="nav-link" onClick={loginHandler}>
                            <i className={localStorage.isLoggedin ? "mdi mdi-power" : "mdi mdi-login"}/>
                        </Button>
                    </li>
                </ul>
                <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button"
                        data-toggle="offcanvas">
                    <span className="mdi mdi-menu"/>
                </button>
            </div>
        </nav>
    )
};
export default Header;