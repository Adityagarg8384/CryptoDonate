import styled from "styled-components"
// import First from "../components/mainpage/first"

// export default function Home() {
//   return (
//     <First />
//     )
// }
import themes from "../components/layout/themes";
import Layout from "../components/layout/layout"
import First from "../components/mainpage/First";
import {stat} from "../components/mainpage/First";
import {prop} from "../pages/otp";
// import {pag} from "../components/mainpage/first";
import Enter from "../components/mainpage/Enter";

import { useState } from "react"
// Pag===false &&
export default function Home() {

  return (
    <di>
      {
         prop===false && stat===false?
        <H>
        <Head>
          {
            <First/>
          }
        </Head>
        </H>
        :
        <Enter/>
      }
    </di>
    // <div>
    //   <Enter/>
    // </div>

    )
}

const But= styled.div`
// width: 15%;
padding: 15px;
color: ${(props) => props.theme.cd};
background-color: ${(props) => props.theme.button};
backgorund-image: linear-gradient(180 deg, #00b712 0%, #5aff15 80%);
// border: none;
margin-top: 20px;
cursor: pointer;
font-weight: bold;
font-size: large;
border-radius: 10px;
`

const di= styled.div`
height: 100vh;
width: 100px;
`

const H= styled.div`
height:100vh;
width: 100vw;
display: flex;
justify-content: space-around;
align-items: center;

`
const Head= styled.div`
height: 80%;
width: 30%;
display: flex;
justify-content: center;
align-items: center;
background-color: Black;
border-radius: 10px;
`

// const Input= styled.input`
// display: flex;
// justify-content: space-around;
// align-items: center;
// `
