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
        this.getRandomColor = this.getRandomColor.bind(this)
    }

    getRandomColor() {
        let letters = '0123456789ABCDEF'
        let color = '#66'
        
        for (let i = 0; i < 4; i++) {
            color += letters[Math.floor(Math.random() * 16)]
        }
        return color
    }

    render() {
        const { opacity } = this.state
        const { userList } = this.props

        let weightMin = 500
        let weightMax = 0
        
        for (let i = 0; i < userList.length; i++) {
            let max = Math.max(...weightDatas.map(element => element[userList[i].name]).filter((element) => element))
            let min = Math.min(...weightDatas.map(element => element[userList[i].name]).filter((element) => element))
            weightMax = max > weightMax ? max : weightMax
            weightMin = min < weightMin ? min : weightMin
        }

        let lineDisplay = []

        for (let i = 0; i < userList.length; i++) {
            if (userList[i].status === true)
                lineDisplay = [...lineDisplay, <Line key={i} type="monotone" dataKey={userList[i].name} strokeOpacity={opacity.weight} stroke={this.getRandomColor()} />]
        }
        console.log(lineDisplay.length)
        return (
            <div className="graph">
                <h3>Graph:</h3>
                <ResponsiveContainer width="90%" height={400}>
                    <LineChart data={weightDatas} >
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <Legend />
                        <XAxis datakey="date" />
                        <YAxis datakey="weight" domain={lineDisplay.length === 0 ? [0, 200] : [weightMin - 5, weightMax + 5]} />
                        {lineDisplay}
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        )
    }
}

export default GraphicDisplay
