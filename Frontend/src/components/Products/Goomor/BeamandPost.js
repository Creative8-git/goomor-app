import BeamNavigation from "./Beam/BeamNavigation";
import PostNavigation from "./Post/PostNavigation";
import React from "react";
import { Routes, Route } from "react-router-dom";

const BeamandPost = () => {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <BeamNavigation />
                    </div>
                    <div class="col-md-6">
                        <PostNavigation />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BeamandPost;