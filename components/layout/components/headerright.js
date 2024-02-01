import styled from "styled-components";
import {App} from "../layout";
import { useContext } from "react";
import Wallet from './wallet';

export const Headerright = () => {
    const Themetoggler=useContext(App);
    return (
        <Headerwrapper>
            <Wallet />
            <Themetoggle onClick={Themetoggler}>
                Themecolor
            </Themetoggle>
        </Headerwrapper>
    )
}

const Headerwrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 20px;

`

const Themetoggle = styled.div`
background-color: ${(props)=> props.theme.bgDiv};
color: ${(props)=> props.theme.color};
height: 100%;
padding: 10px;
font-weight: bold;
cursor: pointer;
margin: 20px;
`

export default Headerright;
