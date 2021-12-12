import styled from 'styled-components';
import DashboardHeader from "../../components/DashboardComponents/DashboardHeader";
import KpiInfos from "../../components/DashboardComponents/Kpi/kpiInfos"
import useKpi from "../../services/kpi";
import usePerf from "../../services/performance";
import DailyInfo from "../../components/DashboardComponents/DailyActivities";

const DashboardContainer = styled.div`
  width: 80%;
  margin-left: 70px;
`

const DetailsContainer = styled.section`
  width: 80%;
  display: flex;
  justify-content: space-between;
`

const Graphics = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const Kpi = styled.div`
  width: 20%;
  height: 100%;
`

const Dashboard = () => {
   const kpi = useKpi()
    let kpiDOMArray =[]
   for(let i in kpi){
       const name = i
       const value = kpi[i]
       const kpiDOM = (<KpiInfos kpiName={name} kpiValue={value}/>)
       kpiDOMArray.push(kpiDOM)
   }
   const perf = usePerf()

    return (
        <DashboardContainer>
            <DashboardHeader/>
            <DetailsContainer>
                <Graphics>
                    <DailyInfo data={perf}/>
                    <div>
                        {/*<SessionDuration/>*/}
                        {/*<Radar/>*/}
                        {/*<Score/>*/}
                    </div>
                </Graphics>
                <Kpi>
                    {kpiDOMArray}
                </Kpi>
            </DetailsContainer>
        </DashboardContainer>
    )
}

export default Dashboard;