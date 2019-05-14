import React from 'react'
import './about.css'


class About extends React.Component {
    render() {
        return (
<div className="yes">
    <h1>About The Company</h1>
            <div className="panel panel-primary">
                <div className="panel-heading">Who are JRI-America</div>
                <div className="panel-body">
                    JRI-America (JRI-A) provides IT services for Sumitomo Mitsui Financial Group ("SMFG") and its entities from our offices in the Kerry Technology Park, Tralee,
                    as part of a global IT team with centres also in New York and London. We support Sumitomo Mitsui Banking Corporation (SMBC); SMBC is Japan's second-largest bank
                    and a Fortune Global 200 company which offers a broad range of financial services both within Japan and internationally. JRI-A provides the IT services for the bank
                    and wider group supporting operations across the Western Hemisphere (including the Americas, Europe, Middle East and Africa), while it's parent (JRI) provides the
                    same in Japan and across Asia.
                </div>

            </div>
    <div className="panel panel-primary">
        <div className="panel-heading">What do we do</div>
        <div className="panel-body"> Many different stuff and things, I'll tell ya now it's a fierce amount of stuff. </div>
    </div>
</div>
        );
    }
}
export default About