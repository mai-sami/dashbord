import React from 'react'
import RightCharts from './RightCharts'
import LeftCharts from './LeftCharts'

function ChartsHome() {
    
    return (
        <div className="chartsHome">
  
    <div className="left">
       
    <div className="left__button__All" >

<div className="left__button" >
 <div className="coloer__div">
 </div>
<p className="text"> الإيرادات</p>

</div>

<div className="left__button" >
 <div className="coloer__divs">
 </div>
<p className="text"> المصروفات</p>

 
</div>

</div>
 
  <LeftCharts />

        </div>    
        <div className="line">
   <RightCharts />
    </div>
           </div>
    )
}

export default ChartsHome
