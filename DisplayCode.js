import React from 'react';

function DisplayCode(props) {
  return (
    <pre>
      <code>
        <div>{props.code}</div>
      </code>
    </pre>
  )
}

export default DisplayCode;