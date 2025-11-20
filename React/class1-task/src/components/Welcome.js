import React from "react";

const Welcome = ({ modulename, name }) => {
  return (
    <div>
      <h1>
        Welcome to the {modulename}, {name}
      </h1>
      <p>Please perform the necessary actions to get started.</p>
    </div>
  );
};

export default Welcome;
