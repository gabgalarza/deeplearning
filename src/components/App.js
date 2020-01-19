import React from 'react';
import {AppDelegates} from '../delegates/app.delegates';
import ActionButton from './ActionButton';
// import ImageView from "./ImageView";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.AppDelegates = AppDelegates(this);
  }

  componentDidMount(){
    this.AppDelegates.run();
  }

  render() {
    return(
      <div>
        {/* <ImageView src={`../test/img.jpg`} alt={`uploaded img`}/> */}
        <ActionButton
          id={`uploadImg`}
          label={`Upload Image`}
          action={() => console.log("upload Img clicked")} />
        <ActionButton
          id={`predict`}
          label={`Predict`}
          action={() => console.log("Predict clicked")} />
      </div>
    );
  }
}

export default App;