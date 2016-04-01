import React from 'react';
import Dropzone from 'react-dropzone-es6';
import request from 'superagent'

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
      var req = request.post('http://localhost:8083/image-uploader/upload');
      files.forEach((file)=> {
            req.attach('file', file);
        });
        req.end(function(err, res) {
          console.log('err', err,'res',res);
        });
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