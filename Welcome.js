import { Component } from "react";

class Welcome extends Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(<div><h3>Welcome {this.props.nm} : <i>{this.props.batch}</i></h3></div>);    
    }
}

export default Welcome;