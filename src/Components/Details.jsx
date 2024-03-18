import React from "react";


function Details() {
    return (
        <div className="container-fluid px-4 py-5 my-5 text-center">
            <div className="lc-block">
                <div editable="rich">
                    <h2 className="display-5 fw-bold">One thing, for many things</h2>
                </div>
            </div>
            <div className="lc-block col-lg-6 mx-auto mb-4">
                <div editable="rich">

                    <p className="lead ">With a single subscription, you get your entire dental products that you will ever need, and more!</p>
                </div>
            </div>

            <div className="lc-block d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                <a className="btn btn-primary btn-lg px-4 gap-3" href="#" role="button">Find out more!</a>
                <a className="btn btn-outline-secondary btn-lg px-4" href="#" role="button">Pricing</a>
            </div>
            <div className="lc-block d-grid gap-2 d-sm-flex justify-content-sm-center">
                <div className="overflow-hidden" style={{maxHeight: "30vh"}}>
                    <div className="container px-5">
                        <img
                            className="img-fluid border rounded-3 shadow-lg mb-4"
                            src="https://images.unsplash.com/photo-1530435460869-d13625c69bbf?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8MTB8fHdlYnNpdGV8ZW58MHwwfHx8MTYyMTQ0NjkyNg&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080&amp;h=768"
                            alt="Photo by Pankaj Patel"/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Details;