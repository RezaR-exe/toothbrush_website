import React from "react";


function Features() {
    return (
        <div className="container px-4 py-5">
            <h2 className="pb-2 border-bottom">Features</h2>

            <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
                <div className="col d-flex flex-column align-items-start gap-2">
                    <h2 className="fw-bold text-body-emphasis">Have a look at some of the awesome features that come with your subscription</h2>
                    <p className="text-body-secondary">With these awesome features, you will never need to think about manually choosing dental products again!</p>
                </div>

                <div className="row">
                    <div className="row row-cols-1 row-cols-sm-2 g-4">
                        <div className="col d-flex flex-column gap-2">
                            <div
                                className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                                <svg className="bi" width="1em" height="1em">
                                </svg>
                            </div>
                            <h4 className="fw-semibold mb-0 text-body-emphasis">Customized Product Selection</h4>
                            <p className="text-body-secondary">The toothbrush subscription service offers a personalized experience by allowing customers to choose from a range of dental products tailored to their needs. This could include various types of toothbrushes (e.g., electric, manual, eco-friendly), toothpaste (with different flavors and formulations), floss, mouthwash, and additional items such as tongue scrapers or dental whitening products.</p>
                        </div>

                        <div className="col d-flex flex-column gap-2">
                            <div
                                className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                                <svg className="bi" width="1em" height="1em">
                                </svg>
                            </div>
                            <h4 className="fw-semibold mb-0 text-body-emphasis">Flexible Delivery Frequency</h4>
                            <p className="text-body-secondary">Customers have the flexibility to customize their delivery schedule based on their usage and preferences. They can opt for monthly, bi-monthly, or quarterly deliveries, ensuring they always have an adequate supply of dental products without overstocking or running out unexpectedly.</p>
                        </div>

                        <div className="col d-flex flex-column gap-2">
                            <div
                                className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                                <svg className="bi" width="1em" height="1em">
                                </svg>
                            </div>
                            <h4 className="fw-semibold mb-0 text-body-emphasis">Expert Recommendations and Education</h4>
                            <p className="text-body-secondary">The subscription service provides expert guidance and educational resources to help customers optimize their oral hygiene routine. This could include tips on proper brushing and flossing techniques, advice on selecting the right products for specific dental concerns, and information on oral health best practices.</p>
                        </div>

                        <div className="col d-flex flex-column gap-2">
                            <div
                                className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                                <svg className="bi" width="1em" height="1em">
                                </svg>
                            </div>
                            <h4 className="fw-semibold mb-0 text-body-emphasis">Environmentally Conscious Packaging and Product Options</h4>
                            <p className="text-body-secondary">The subscription service prioritizes sustainability by offering eco-friendly packaging options and environmentally conscious product choices. This could involve recyclable or biodegradable packaging materials, refillable toothpaste containers, and products made from sustainable materials such as bamboo or recycled plastics. Additionally, the service may partner with dental product manufacturers committed to reducing their environmental footprint.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;