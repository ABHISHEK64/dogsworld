import React, { useEffect, useState } from 'react'
import   { Form } from "react-bootstrap"
import Axios from "axios"
import  "./About.css" 

import Card from '@material-ui/core/Card';
 
import CardContent from '@material-ui/core/CardContent'; 
 
import List from './List' 
const About = ( list) => {

    const[breed,setBreed]=useState([])
    const[selectBreed,setSlectedBreed]=useState("")
    const[image,setImage]=  useState([])
    useEffect(()=>{
        var url=" https://dog.ceo/api/breeds/list/all";
        Axios.get(url).then(res=>{
            for(var a in res.data.message){
                if (res.data.message[a].length!==0)
                 for (var b of res.data.message[a])
                    breed.push(a+"/" +b)
                else
                   breed.push(a)
                 
                    
                setBreed(prev=>[...breed])
                 
            }
        }).then((r)=>{
            setSlectedBreed(breed[0])
            LoadImage(breed[0])
        })
    },[])
    function LoadImage(category){
        var url=`https://dog.ceo/api/breed/${category}/images`;
        Axios.get(url).then(res=>{
            setImage(prev=>[...res.data.message])
        })   
     }
     
    return (

        <div>
              
            <div className="header">
            <h1 style={{textAlign:"center"}}>Welcome to Dogs World</h1>
            <Form className="List">
                <Form.Group>
                    
                    <Form.Control as="select" onChange={
                        (e)=>{
                            setSlectedBreed(e.target.value);
                            setImage([])
                            LoadImage(selectBreed);
                        }
                    }
                    onClick={LoadImage(selectBreed)}
                    >
                        {
                          breed.map(b=>{ 
                            
                              return <option key={b}  >{b}  </option> 
                                   
                                 
                          })
                        }


                    </Form.Control>
                </Form.Group>
                </Form>
            </div>
              
            <div className="doglist">
                <div className="heading_Result">
                <strong style={{textTransform:'capitalize'}}>{selectBreed}</strong> 
                 <p    className="result">{image.length}Results</p >
                </div>
                 
                 {image.length!=0?
                (<div class="Image_css" >

                    {  image.map((i)=>{
                        console.log("Images:",i) 
                        return( <List url={i}/> )
                    })
                    }
               
                </div>
                ):(
                    <div className='Card'>
                    <Card>
                        <CardContent>
                            <img src=" https://tinuola.github.io/doggie-browser/media/dogs-sketch.png" alt='dogbrowser ' />
                            
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <img src=" https://tinuola.github.io/doggie-browser/media/dogs-sketch.png" alt='dogbrowser '  />
                            
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <img src=" https://tinuola.github.io/doggie-browser/media/dogs-sketch.png" alt='dogbrowser ' />
                            
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <img src=" https://tinuola.github.io/doggie-browser/media/dogs-sketch.png" alt='dogbrowser '  />
                            
                        </CardContent>
                    </Card>
                    </div>
                )
                 } 
            </div>
        </div>
    )
}

export default About
