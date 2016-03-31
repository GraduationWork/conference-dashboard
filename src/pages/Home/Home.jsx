import React from 'react';
import Dropzone from 'react-dropzone-es6';

export default class Home extends React.Component {
  
	constructor(props) {
		super(props);
		this.state = {
			files: []
		}
    this.onDrop = this.onDrop.bind(this);
	}

  onDrop(files) {
  	this.setState({files: files});
  		console.log('Received files: ', files);
  }

  render () {
    console.log('Render');
    return (
      <section>
         <Dropzone onDrop={this.onDrop} multiple={false}>
             {this.state.files.length > 0 ? 
            	<div>
                  <div>{this.state.files.map((file) => <img src={file.preview} /> )}</div>
              </div> 
           : <div>Try dropping some files here, or click to select files to upload.</div>}
         </Dropzone>


           <p>test</p>
      </section>
    );
  }
}