import styled from "styled-components";
import GetUserFirstName from "../../../services/users";

const DashboardHeaderContainer = styled.div`
  h1{
    font-size: 40px;
    margin-bottom: auto;
  }
  span{
    color: red;
  }
  p{
    font-size: 18px;
    font-weight: lighter;
  }
`


function DashboardHeader(){
    const name = GetUserFirstName()

    return (
        <DashboardHeaderContainer>
            <h1>Bonjour <span>{name}</span></h1>
            <p>Félicitations ! Vous avez explosé vos objectifs d'hier</p>
        </DashboardHeaderContainer>
    )
}

export default DashboardHeader