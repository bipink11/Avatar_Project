import React,{Component} from 'react'
import './Avatar.css'
import  'tachyons';
import AvatarList from '../AvatarList';

const Avatar = (props) =>{
    const avatarlistarray = [
      {  id:1,
        name:"vindo",
        work:"web developer"
      },
      {  id:2,
        name:"Aman",
        work:"web developer"
      },
      {  id:3,
        name:"raman",
        work:"web developer"
      },
      {  id:4,
        name:"Mohan",
        work:"web developer"
      }  


    ]
   const arrayavatarcard = avatarlistarray.map( (avatarcard,i) =>{
        return <AvatarList id={avatarlistarray[i].id} name={avatarlistarray[i].name} work={avatarlistarray[i].work}/>
    })
    return(
        <div className ="mainpage">
            <h1>welcome to Avatar world</h1>
            {/* <AvatarList id={avatarlistarray[0].id} name={avatarlistarray[0].name} work={avatarlistarray[0].work}/>
            <AvatarList id={avatarlistarray[1].id} name={avatarlistarray[1].name} work= {avatarlistarray[1].work}/>
            <AvatarList id={avatarlistarray[2].id} name={avatarlistarray[2].name} work={avatarlistarray[2].work}/>
            <AvatarList id={avatarlistarray[3].id} name={avatarlistarray[3].name} work={avatarlistarray[3].work}/> */}
            {arrayavatarcard}
            <button>Subscribe</button>
        </div>
    )
}

export default Avatar;