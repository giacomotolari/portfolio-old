/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */


const Images = {
webdeveloper: require('./webdeveloper.jpg'),
flexbox: require('./flexbox.png'),
changegame: require('./changegame.png'),
reactiontester: require('./reactiontester.png')
}

export default Images;





// import React from 'react'

// const requestImageFile = require.context('./styles/images', true, /.png$/);
// const IMAGES = ['webdeveloper', 'flexbox', 'changegame','reactiontester']
// export default () => (
//   <ul>
//     {
//       IMAGES.map(image => (
//         <li>
//           <p>{image}</p>
//           <img src={requestImageFile(`./styles/images/${image}.png`)} alt={image}/>
//         </li>
//       ))
//     }
//   </ul>
// )