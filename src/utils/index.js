import React from 'react';


export function nl2br(content) {
  return content.split('\n').map((line, i) => {
    return (
      <span key={i}>
        {line}
        <br />
      </span>
    );
  });
}
