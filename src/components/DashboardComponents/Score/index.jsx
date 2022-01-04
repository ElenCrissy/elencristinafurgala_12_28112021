import styled from "styled-components";
import PropTypes from "prop-types";

import {
    RadialBarChart,
    RadialBar,
    Legend,
    ResponsiveContainer
} from "recharts";

const ScoreContainer = styled.div`
  width: 100%;
  position: relative;
  p{
    position: absolute;
    margin-left: 10px;
    z-index: 99;
    color: black;
    font-weight: bold;
    font-size: 16px;
  }
`


const Score = ({ data }) => {
    const dataArray = [
        {
            scoreNumber : 1,
            fill : 'blue'
        },
        {
            scoreNumber : data,
            fill : 'red'
        }
    ]

    return(
        <ResponsiveContainer
            width="30%"
        >
            <ScoreContainer>
                <p>Score</p>
                <RadialBarChart
                    width={235}
                    height={235}
                    innerRadius="10%"
                    outerRadius="130%"
                    data={dataArray}
                    startAngle={210}
                    endAngle={-210}
                    style={{background:"#FBFBFB", borderRadius: "5px"}}
                    barCategoryGap="0%"
                    barSize={10}
                >
                    <RadialBar
                        minAngle={0}
                        clockWise={true}
                        dataKey='scoreNumber'
                        cornerRadius="5"
                        style={{backgroundColor:"white"}}
                    />
                </RadialBarChart>
            </ScoreContainer>
        </ResponsiveContainer>

    )
}

Score.propTypes = {
    data: PropTypes.number.isRequired
}

export default Score;

