import React from 'react';
import Dropzone from 'react-dropzone-es6';

export default class ImageDragAndDrop extends React.Component {

	constructor(props) {
		super(props);
	}

	onDrop(files) {
	  	this.state = {
	        files: files
	    };
  		console.log('Received files: ', files);
  	}

	render() {
		return (
			<div>
				<Dropzone onDrop={this.onDrop} multiple={false}>
            		<div>Try dropping some files here, or click to select files to upload.</div>
		             {this.state.files.length > 0 ? 
		          	<div>
		               	<h2>Uploading {this.state.files.length} files...</h2>
		                <div>{this.state.files.map((file) => <img src={file.preview} /> )}</div>
		            </div> 
		           : null}
         		</Dropzone>
			</div>
		);
	}

}