import React from "react";

function VerticalSpacer({ height }) {
  return <div style={{ height: height }} />;
}

function VerticalDivider() {
    return <div className='border-0 border-end border-2 border-dark-subtle my-3'></div>
}

export {VerticalSpacer, VerticalDivider};