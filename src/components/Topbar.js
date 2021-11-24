import React from 'react'
import { css } from '@emotion/core'

// const Topbar = () => {
//   const handleChange = e => {
//     props.handleChange(e)
//   }

//   return (
//     <div
//       className="Topbar"
//       css={css`
//         position: absolute;
//         top: 0;
//         height: 50px;
//         background: #070707;
//         left: 200px;
//         width: calc(100% - 200px);
//         padding: 20px;
//       `}
//     >
//       <input
//         type="search"
//         placeholder="Search songs, artists"
//         css={css`
//           width: 300px;
//           height: 40px;
//           margin-top: -8px;
//         `}
//         onChange={e => handleChange(e)}
//       />
//     </div>
//   )
// }

const Topbar = props => (
  <div
    className="Topbar"
    css={css`
      position: absolute;
      top: 0;
      height: 50px;
      background: #070707;
      left: 200px;
      width: calc(100% - 200px);
      padding: 20px;
    `}
  >
    <input
      type="search"
      css={css`
        width: 300px;
        height: 40px;
        margin-top: -8px;
      `}
      placeholder="Search songs, artists"
      onChange={e => console.log(e.target.value)}
    />
  </div>
)

export default Topbar
