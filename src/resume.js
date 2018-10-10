import React from 'react';
import {Document, Page} from 'react-pdf';
class Resume extends React.Component{
    constructor(props){
        super(props);
        this.state = {pageNumber:1}
    }
    onDocumentLoad()
    {
        this.setState(this.state)
    }
    render(){
        return (
        <div>
            <Document file="./resume.pdf" onLoadSuccess={this.onDocumentLoad.bind(this)} style ={{borderStyle: "solid"}}>
                <Page pageNumber= {1} />
            </Document>
        </div>
        );
    }
}
export default Resume;