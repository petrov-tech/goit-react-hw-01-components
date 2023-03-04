import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// import './index.css';

import { Profile } from 'components/Profile/Profile';
import user from './components/Profile/user.json';

// import user from './components/Profile/user.json';
// import data from './components/Statistics/data.json';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// const a = user;
// const b = data;

// console.log('🚀 -> a:', a);

// function Test(props) {
//   console.log(props);
//   return (
//     <div class="profile">
//       <div class="description">
//         <img src={props.avatar} alt="User avatar" class="avatar" />
//         <p class="name">{props.username}</p>
//         <p class="tag">{props.tag}</p>
//         <p class="location">{props.location}</p>
//       </div>

//       <ul class="stats">
//         <li>
//           <span class="label">Followers</span>
//           <span class="quantity">{props.folow}</span>
//         </li>
//         <li>
//           <span class="label">Views</span>
//           <span class="quantity">{props.views}</span>
//         </li>
//         <li>
//           <span class="label">Likes</span>
//           <span class="quantity">{props.likes}</span>
//         </li>
//       </ul>
//     </div>
//   );
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
      <Profile
        username={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
    </App>
  </React.StrictMode>
);
