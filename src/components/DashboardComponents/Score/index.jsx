import styled from "styled-components";
import PropTypes from "prop-types";

import {
    RadialBarChart,
    RadialBar,
} from "recharts";

const ScoreContainer = styled.div`
  //width: 32%;
  height: 230px;
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

const ChartContainer = styled.div`
  width: 230px;
  height: 230px;
`

const CircleBackground = styled.div`
  position: absolute;
  width: 62%;
  height: 62%;
  top: 50%;
  left: 50%;
  color: black;
  background-color: white;
  border-radius: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
`

const InfoText = styled.div`
  width: 50%;
  font-size: 15px;
  text-align: center;
  color:  #74798C;
  span{
    font-size: 17px;
    font-weight: bold;
    color: black;
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
    const goalPercentage = data*100

    return(
        <ScoreContainer>
            <p>Score</p>
            <ChartContainer>
                <RadialBarChart
                    width={230}
                    height={230}
                    innerRadius="10%"
                    outerRadius="130%"
                    data={dataArray}
                    startAngle={210}
                    endAngle={-210}
                    style={{background:"#FBFBFB", borderRadius: "5px", stroke: 'white', strokeWidth: 2}}
                    barSize={10}
                >
                    <RadialBar
                        minAngle={0}
                        clockWise={true}
                        dataKey='scoreNumber'
                        cornerRadius="5"
                    />
                </RadialBarChart>
            </ChartContainer>
            <CircleBackground>
                <InfoText>
                    <span>{goalPercentage}%</span>
                    <br/> de votre objectif
                </InfoText>
            </CircleBackground>
        </ScoreContainer>
    )
}

Score.propTypes = {
    data: PropTypes.number.isRequired
}

export default Score;

