import React from 'react';
import './card-list.styles.css';
import Card from '../card/card.component';

export const CardList = props => (
    <div className='card-list'>
        {props.usersList.map(user => (
        <Card key={user.id} user={user} />
        ))}
    </div>)


// ==================================================

// export const CardList = props => (
//     <div className='card-list'>
//         {props.usersList.map(user => (
//               <h1 key={user.id}>
//                 {user.name}
//               </h1>
//         ))}
//     </div>)

// ==================================================

// export const CardList = (props) => {
//     console.log(props)
//     return (
//         <>
//         <div className='card-list'>
//             {/* {props.children} */}
//             {props.monster.map(monster => (
//                 // <h1 key={monster.id}>
//                 // {monster.name} </h1>
//                 <Card  key={monster.id} monster={monster} />
//                 ))
//             }
//         </div>
//         </>
//     )
// }