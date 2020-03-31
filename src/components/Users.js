import React, { Component } from 'react'
import { CardList } from './card-list/card-list.component';
import SearchBox from './search-box/search-box.component';
 
class Users extends Component {
    constructor(){
        super();

        this.state = {
            usersList:[],
            searchField: ''
        }

        // this.handleChange = this.handleChange.bind(this)        // 2
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ usersList: users}))
    }

    // handleChange(e) {
    //     this.setState({ searchField: e.target.value})
    //     // 2
    // }

    handleChange = e => {
        this.setState({ searchField: e.target.value})
        // 3
    }

    render() {
        const { usersList, searchField } = this.state;
        const filterUsers = usersList.filter(user => user.name.toLowerCase().includes(searchField.toLowerCase())
        );
         return (
            <div className="App">
            <h1 className="header">
                User's Search Engine
            </h1>
            <SearchBox 
            placeholder = 'Search Users'
            //   handleChange = {e => this.setState({ searchField: e.target.value})}         // 1
            // handleChange = {this.handleChange}  // 2
            handleChange = {this.handleChange}     // 3
              />
              <CardList usersList={filterUsers} />
            </div>
        )
    }
}

export default Users


// =========================
// return (
//     <div className="App">
//       <input
//       type='search'
//       placeholder='Search Users'
//       onChange={e => this.setState({ searchField: e.target.value})}
//       />
//       <CardList usersList={this.state.usersList} />
//     </div>
// )
// =========================
// import React, { Component } from 'react'
// import { CardList } from './card-list/card-list.component';
 
// class Monster extends Component {
//     constructor(){
//         super();

//         this.state = {monster:[],
//             searchField: ''
 
//                 // [{
//                 //     id: 1,
//                 //     name: "Frankenstein"
//                  // },
//                 // {
//                 //     id: 2,
//                 //     name: "Dracula"
//                 // },
//                 // {
//                 //     id: 3,
//                 //     name: "Zombie"
//                 // }]
//         }
//     }

//     componentDidMount() {
//         fetch('http://jsonplaceholder.typicode.com/users')
//         // .then(response => console.log(response))
//         .then(response => response.json())
//         // .then(users => console.log(users)) 
//         .then(users => this.setState({ monster: users}));
//     }

//     render() {
//         // const monsters = this.state.monsters;
//         // const searchField = this.state.searchField;
//         const { monsters, searchField } = this.state;
//         const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
//         );
//          return (
//             <div className="App">
//               {/* <CardList>
//                 {this.state.monster.map(monster => (
//                 <h1 key={monster.id}>
//                 {monster.name} </h1>
//                 ))
//                 }
//               </CardList> */}
                    // <input
                    // type='search'
                    // placeholder='Search Users'
                    // onChange={e => 
                    // // console.log(e.target.value)
                    // this.setState({ searchField: e.target.value},
                    //     () => console.log(this.state)
                    //     )
                    // }
                    // />
//               {/* <CardList monsters={this.state.monster} /> */}
//               <CardList monsters={filterMonsters} />
//             </div>
//         )
//     }
// }

// export default Monster