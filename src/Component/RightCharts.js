


import React, { Component } from "react";
import {
    LineChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Line,
     
} from "recharts";
const data = [
    {
        name: " Jan",
        uv: 4000,
        pv: 2400,
        amt: 2400
    },
    {
        name: " Feb",
        uv: 3000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "   Mar    ",
        uv: 2000,
        pv: 9800,
        amt: 2290
    },
    {
        name: "  Apr",
        uv: 2780,
        pv: 3908,
        amt: 2000
    },
    {
        name: " May",
        uv: 1890,
        pv: 4800,
        amt: 2181
    },
    {
        name: " Jun",
        uv: 2390,
        pv: 3800,
        amt: 2500
    },
    {
        name: "  Jul",
        uv: 3490,
        pv: 4300,
        amt: 2100
    }

    , {
        name: "  Aug",
        uv: 3490,
        pv: 4300,
        amt: 2100
    },
    {
        name: "  Sep",
        uv: 3490,
        pv: 4300,
        amt: 2100
    }, {
        name: "  Oct",
        uv: 3490,
        pv: 4300,
        amt: 2100
    }, {
        name: "  Nov",
        uv: 3490,
        pv: 4300,
        amt: 2100
    }
    , {
        name: "  Dec",
        uv: 3490,
        pv: 4300,
        amt: 2100
    }
];

class RightCharts extends Component {
    render() {
        return (
            <div className=" ">
                <div className="head">
                    <p className="P__P__P">الدفع المالي نهاية الفترة</p>
                    <div className="left__button__Alls" >

                        <div className="left__buttons" >
                            <div className="coloer__pink">
                            </div>
                            <p className="texts"> اجمالي الفواتير</p>

                        </div>

                        <div className="left__buttons" >
                            <div className="coloer__blue">
                            </div>
                            <p className="texts"> اجمالي الدفع</p>


                        </div>
                        <select className="slect">
                            <option>شهريا</option>
                            <option>سنويا</option>
                            <option>أسبوعيا</option>

                        </select>
                    </div>
              
                </div>
                <br />

                <LineChart
className="linechart"
width={600}
                    height={250}
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid  />
                    <XAxis dataKey="name" />
                    {/* <YAxis /> */}

                    <Tooltip /> 
         <Legend />  
                    <Line type="monotone" dataKey="pv" stroke="#0090FF" />
                    <Line type="monotone" dataKey="uv" stroke="#DB5AEE" />
                </LineChart>
            </div>
        );
    }
}
export default RightCharts
