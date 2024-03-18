import React from "react";

function Pricing() {
    return (
        <div className="pricing6 py-5 bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <h3 className="mb-3">One deal for every customer</h3>
                        <h6 className="subtitle font-weight-normal">We offer 100% satisafaction and Money back Guarantee</h6>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-6">
                        <div className="card card-shadow border-0 mb-4">
                            <div className="card-body p-4">
                                <div className="d-flex align-items-center">
                                    <h5 className="font-weight-medium mb-0">Basic Plan</h5>
                                    <div className="ml-auto">
                                        <span class="badge badge-danger font-weight-normal p-2">Popular</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-5 text-center">
                                        <div className="price-box my-3">
                                            <sup>$</sup>
                                            <span className="text-dark display-5">36</span>
                                            <h6 className="font-weight-light">MONTHLY</h6>
                                            <a
                                                className="btn btn-info-gradiant font-14 border-0 text-white p-3 btn-block mt-3"
                                                href="#">CHOOSE PLAN
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 align-self-center">
                                        <ul className="list-inline pl-3 font-14 font-weight-medium text-dark">
                                            <li className="py-2">
                                                <i className="icon-check text-info mr-2"></i>
                                                <span>One delivery per month
                                                </span>
                                            </li>
                                            <li className="py-2">
                                                <i className="icon-check text-info mr-2"></i>
                                                <span>Dedicated Doctor</span>
                                            </li>
                                            <li className="py-2">
                                                <i className="icon-check text-info mr-2"></i>
                                                <span>Includes the toothbrushes and dental floss
                                                </span>
                                            </li>
                                            <li className="py-2">
                                                <i className="icon-check text-info mr-2"></i>
                                                <span>Fast shipping</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card card-shadow border-0 mb-4">
                            <div className="card-body p-4">
                                <div className="d-flex align-items-center">
                                    <h5 className="font-medium m-b-0">Advanced Plan</h5>
                                </div>
                                <div className="row">
                                    <div className="col-lg-5 text-center">
                                        <div className="price-box my-3">
                                            <sup>$</sup>
                                            <span className="text-dark display-5">368</span>
                                            <h6 className="font-weight-light">YEARLY</h6>
                                            <a
                                                className="btn btn-info-gradiant border-0 font-14 text-white p-3 btn-block mt-3"
                                                href="#">CHOOSE PLAN
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 align-self-center">
                                        <ul className="list-inline pl-3 font-14 font-weight-medium text-dark">
                                            <li className="py-2">
                                                <i className="icon-check text-info mr-2"></i>
                                                <span>Up to two deliveries per month
                                                </span>
                                            </li>
                                            <li className="py-2">
                                                <i className="icon-check text-info mr-2"></i>
                                                <span>Dedicated Doctors</span>
                                            </li>
                                            <li className="py-2">
                                                <i className="icon-check text-info mr-2"></i>
                                                <span>Includes all the dental products
                                                </span>
                                            </li>
                                            <li className="py-2">
                                                <i className="icon-check text-info mr-2"></i>
                                                <span>Immediate shipping</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing;