import React from 'react';
import Spinner from './spinner/spinner';

const forLoad=()=>{
    return(
        <div style={{height:"50vh",width:"100vw",color:"#000",fontWeight:"bold",margin:"0 auto",padding:"0 auto"}}>
            <h1>Bambo Pizza Bar</h1>
            <h3>Menuja juaj po hapet</h3>
            <Spinner/>
        </div>
    );
}

export default forLoad;