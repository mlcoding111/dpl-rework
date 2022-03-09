import React from 'react'

export default function Separator({text}) {

  const noTextStyle = text == undefined ? "mt-0" : "x"

  return (
    <div id="separator">
      <h3 className={noTextStyle}>&nbsp;{text} </h3> {/* Add whitespace so even text props is empty it will display still */} 
    </div>
  )
}
