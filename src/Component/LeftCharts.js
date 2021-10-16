import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Legend, ColumnSeries, 
    Inject} from '@syncfusion/ej2-react-charts';
  import {sampleData, sampleData2} from './data';
function LeftCharts() {
    return (
        <div className="leftCharts">
             <div style={{textAlign:"center", margin:'5%'}}>
      {/* Add minimum:15, maximum:21, in primary x-axis property to set a custum range */}
      <ChartComponent width="100%" height="250px" legendSettings={{visible:true}}
      useGroupingSeparator={true}
      primaryXAxis={{valueType:"Double",interval:1,  
      edgeLabelPlacement:"Shift"}}
    //   primaryYAxis={{labelFormat:"p"}}
      >

{/* <Inject services={[ColumnSeries, Legend]}></Inject> */}

        <Inject services={[ColumnSeries,Legend]}></Inject>
        <SeriesCollectionDirective>
          <SeriesDirective type="Column" name="الايرادات" dataSource={sampleData}
          xName="overs" yName="runs"></SeriesDirective>
          <SeriesDirective type="Column" name="  المصروفات" dataSource={sampleData2}
          xName="overs" yName="runs"></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
        </div>
    )
}

export default LeftCharts
