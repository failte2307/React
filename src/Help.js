import React from 'react'
import './about.css'


class Help extends React.Component {
    render() {
        return <div className="yes">
            <h1>FAQ</h1>

            <div className="panel panel-primary">
                <div className="panel-heading">How do I get back to home page?</div>
                <div className="panel-body"> Please tap on the back to home option at the bottom of the screen?</div>
            </div>
            <br></br>
            <div className="panel panel-primary">
                <div className="panel-heading">How do I find out more information?</div>
                <div className="panel-body"> Please tap on the about page option at the bottom of the screen!</div>
            </div>
            <br></br>
            <div className="panel panel-primary">
                <div className="panel-heading">How long do we hold data for?</div>
                <div className="panel-body"> JRI-America holds data on our visitors for a 1 year specific period!</div>
            </div>
            <br></br>
            <div className="panel panel-primary">
                <div className="panel-heading">What departments can I work for?</div>
                <div className="panel-body"> Software Development <br/> Quality Assurance <br/> IT Security <br/> Operations <br/>
                    Production Support <br/> Business Intelligence <br/> Unix and Oracle Administration <br/> Customer Support Centre
                </div>
            </div>
            <br></br>
        </div>;
    }
}
export default Help