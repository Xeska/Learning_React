import React, { Component } from "react"
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts"
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
        const {userList } = this.props

        let weightMin = 500
        let weightMax = 0
        
        for (let i = 0; i < userList.length; i++) {
            let max = Math.max(...weightDatas.map(element => element[userList[i].name]))
            let min = Math.min(...weightDatas.map(element => element[userList[i].name]))
            weightMax = max > weightMax ? max : weightMax
            weightMin = min < weightMin ? min : weightMin
        }

        console.log(weightMax, weightMin)

        return (
            <div className="graph">
                <h3>Graph:</h3>
                <ResponsiveContainer width="90%" height={400}>
                    <LineChart data={weightDatas} >
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <Legend onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}/>
                        <XAxis datakey="date" />
                        <YAxis datakey="weight" domain={[weightMin - 5, weightMax + 5]} />
                        <Line type="monotone" dataKey="bboutoil" strokeOpacity={opacity.weight} stroke="#dd84d8" />
                        <Line type="monotone" dataKey="paul" strokeOpacity={opacity.weight} stroke="#8884d8" />
                        <Line type="monotone" dataKey="pierre" strokeOpacity={opacity.weight} stroke="#8884d8" />
                        <Line type="monotone" dataKey="anas" strokeOpacity={opacity.weight} stroke="#8884d8" />
                        <Line type="monotone" dataKey="jacques" strokeOpacity={opacity.weight} stroke="#8884d8" />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        )
    }
}

export default GraphicDisplay
