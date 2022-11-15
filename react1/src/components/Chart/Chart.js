import "./Chart.css"
import ChartBar from "./ChartBar"

const Chart=(props)=>{
    const dataPointValues=props.dataPoints.map(ele=>ele.value)
    const totalMaximum=Math.max(...dataPointValues)
    return <div className="chart">
        {props.dataPoints.map((ele)=>(
          <ChartBar
          key={ele.label}
          value={ele.value}
          maxValue={totalMaximum}
          label={ele.label }
          />  
        ))}
    </div>
}
export default Chart
