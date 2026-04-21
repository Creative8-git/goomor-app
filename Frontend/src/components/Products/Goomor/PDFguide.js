import React from 'react';
import { getAssetUrl } from '../../../utils/assetUrl';

export const Guides = [
    {
        name: "Flat Roof Attached",
        link: "/goomorproductimage/Goomor/PDF/Flat+Roof+-+Attached.pdf",
        image: "https://versiclad.com.au/wp-content/uploads/2023/01/Attached-Skillion-Roof-Example-scaled.jpg",
    },
    {
        name: "Flat Roof Free Standing",
        link: "/goomorproductimage/Goomor/PDF/Flat+Roof+-+Free+Standing.pdf",
        image: "https://versiclad.com.au/wp-content/uploads/2023/01/Free-Standing-Roof-Example-scaled.jpg",
    },
]

const PDFguide = () => {
    const items = Guides.map(guide => ({
        name: guide.name,
        link: guide.link,
        image: guide.image,
    }));

    return (
        <div className="container-fluid service bg-light pb-5 Post">
            <div className="container pb-5">
                <div className="d-flex align-items-center mb-2">
                    <h1 className="m-0" style={{ fontSize: "40px", lineHeight: "40px" }}>Ideas for your next project</h1>
                </div>
                <hr
                    className="mt-1 mb-4"
                    style={{
                        border: "0",
                        height: "1px",
                        backgroundImage:
                            "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))",
                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                        position: "relative",
                        overflow: "visible",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        left: "50%",
                        transform: "translateX(-50%)",
                        top: "-2px",
                        height: "6px",
                        width: "40px",
                        backgroundColor: "rgba(0, 0, 0, 0.75)",
                        borderRadius: "3px",
                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                    }}
                ></div>
                {/* Grid Layout */}
                <div className="row g-4">
                    {items.map((item, index) => (
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
                            <div className="wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                                <div
                                    className="service-item"
                                    style={{
                                        borderRadius: "10px",
                                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                                        overflow: "hidden",
                                    }}
                                >
                                    <div className="service-img">
                                        <img
                                            src={getAssetUrl(item.image)}
                                            className="img-fluid w-100"
                                            alt={item.name}
                                            style={{ height: '200px', objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div className="service-content text-center p-3">
                                        <a
                                            href={getAssetUrl(item.link)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="d-block h-100 text-light fs-5 my-2 text-decoration-none"
                                        >
                                            {item.name}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PDFguide;
