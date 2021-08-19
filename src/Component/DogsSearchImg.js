import React, { useReducer, useRef, useState } from 'react'
import * as mobilnet from "@tensorflow-models/mobilenet";
//import { CloudUpload } from '@material-ui/icons';
import '@tensorflow/tfjs-backend-webgl'
import '@tensorflow/tfjs-core'
import './DogSearchImg.css'
import Card from '@material-ui/core/Card'
import  CardContent  from '@material-ui/core/CardContent';
const MachineModel={
    initial:"initial",
    states:{
        initial:{on:{next:"loadingModel"}},
        loadingModel:{on:{next:"modelReady"}},
        modelReady:{on:{next:"imageReady"}},
        imageReady:{on:{next:"identifying"},showImage:true},
        identifying:{on:{next:"complete"}},
        complete:{on:{next:"modelReady"},showImage:true,showResults:true}
    }
}
 const DogsSearchImg = () => {
     const [model,setModel]=useState(null);
     const [imageUrl,setimageUrl]=useState(null);
     const [result,setresult]=useState([]);
     const imgRef=useRef();
     const inputRef=useRef();
     const reducer=(state,event)=>
        MachineModel.states[state].on[event]||MachineModel.initial;
     const [appstate,dispatch]=useReducer(reducer,MachineModel.initial);
     
     const next=()=>dispatch("next");
     const loadModel=async()=>{
         next();
         const model=await mobilnet.load();
         setModel(model);
         next();
     };
     const identify=async()=>{
         next();
         const results=await model.classify(imgRef.current);
         setresult(results);
         next();
     }   
     const reset=async()=>{
        setresult([]);
         next();
     }
     const upload=()=>inputRef.current.click();
     const actionButton={
         initial:{action:loadModel,text:"Load Model"},
         loadingModel:{text:"Loading Model..."},
         modelReady:{action:upload,text:"Upload Image"},
         imageReady:{action:identify,text:"Identify Breed"},
         identifying:{text:"identifying..."},
         complete:{action:reset,text:"Reset"}

     }
     const {showImage=false}=MachineModel.states[appstate]
     const{showResults=false}=MachineModel.states[appstate]
     const handleUpload=(event)=>{
         const{files}=event.target;
         if(files.length>0){
             const url=URL.createObjectURL(files[0]);
             setimageUrl(url);
             next();
         }
     }
     console.log('result',result)
    return (
        <div className='Container'>
              <h1 className="heading">Welcome to Dog Image Classifier</h1>
              <Card>
                  <CardContent>
                      {showImage&&<img src={imageUrl} alt="Upload Preview" style={{width:300,height:300}} ref={imgRef}/>}
                  </CardContent>
                  <CardContent>
                      {showResults&&(
                          <ul>
                              {result.map(({className,probability})=>(
                                  <li key={className}>{`${className}:${(probability*100).toFixed(2)}`}</li>
                              ))}
                          </ul>
                      )}
                  </CardContent>
              </Card>
              <input type='file' accept='image/s' capture='camera' ref={inputRef} onChange={handleUpload}/>
            <button onClick={actionButton[appstate].action||(()=>{})}>
                {actionButton[appstate].text}
            </button>
        </div>
    )
}
export default DogsSearchImg