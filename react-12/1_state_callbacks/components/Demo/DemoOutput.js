import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = props => {
  console.log('DemoOutput RUNNING');

  return <MyParagraph>{props.show ? 'This is new' : ''}</MyParagraph>
};

export default React.memo(DemoOutput);      // It stares the previous pro value and compares it to the new one using this React.memo() function and without it we are having this whle fun reevaluated with its component functins (here it is MyParagraph). So use React.memo() function wisely.