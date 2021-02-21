import { Component } from "react";

class Greeting extends Component{

    render() {
        return <div>
            <h3>Hello, {this.props.greeter}</h3>
    </div>;
    }
}

export default Greeting;