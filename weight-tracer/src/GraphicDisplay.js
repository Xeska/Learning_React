import React, { Component } from "react"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts"
import weightDatas from "./weightDatas"
import "./GraphicDisplay.css"

class GraphicDisplay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            opacity: {
                weight: 1
            }
        }
        this.handleMouseEnter = this.handleMouseEnter.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)
    }

    handleMouseEnter(op) {
        const { dataKey } = op;
        const { opacity }= this.state

        console.log(op)
        this.setState({
            opacity: {...opacity, [dataKey]: 0.5}
        })
    }

    handleMouseLeave = (op) => {
        const { dataKey } = op
        const { opacity } = this.state
    
        this.setState({
          opacity: { ...opacity, [dataKey]: 1 },
        })
    }

    render() {
        const { opacity } = this.state
        const { userList } = this.props
        let tmpArray = []


        for (let j = 0; j < this.props.userList.length; j++) {
            tmpArray = [...tmpArray, []]
            for (let i = 0; i < weightDatas.length; i++) {
                if (weightDatas[i].user === userList[j].name) {
                    console.log(i, weightDatas[i], j, userList[j], tmpArray)
                    tmpArray[j] = [...tmpArray[j], {weight: weightDatas[i].weight, date: weightDatas[i].date}]
                }
            }
        }

        return (
            <div className="graph">
                <h3>Graph:</h3>
                <LineChart width={500} height={400} data={tmpArray[0]} margin={{top: 5, bottom: 5, right: 5, left: 5}}>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Legend onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}/>
                    <XAxis datakey="weight" />
                    <YAxis datakey="date" />
                    <Line name="bboutoil" type="monotone" dataKey="weight" strokeOpacity={opacity.weight} stroke="#dd84d8" />
                    <Line name="paul" type="monotone" dataKey="weight" strokeOpacity={opacity.weight} stroke="#8884d8" />
                    <Tooltip />
                </LineChart>
            </div>
        )
    }
}

export default GraphicDisplay

/* 
data format:

data = {

    {
        id: 1,
        date: "10-02-2019",
        bboutoil: 48.6,
        paul: 98.2,
        jacques: 56.3
    },
    {
        id: 2,
        date:
        bboutoil:
        pierre:
        paul:
    },
    {
        id: 3,
        date: 
        anas:
        pierre:
        paul:
    }
    etc etc

    Line datakey=bboutoil
    Line datakey=anas
    ...
    LineChart data={data}
    XAxis date
    YAxis (nothing ?)

}
