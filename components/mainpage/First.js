import React, { useState } from 'react'
import styled from 'styled-components';
import Link from 'next/link';
import { toast } from 'react-toastify';

var Number = "";

var prop = false;

var stat = false;

// const Change=()=>{
//     prop= true;
// }

const Change = () => {
    stat = true;
    console.log(stat);
    // prop=true;
}


const First = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [status, setStatus] = useState(false);

    const p = (e) => {
        setPhoneNumber(phoneNumber);
    }

    // const q=(e)=>{
    //     number= phoneNumber;
    // }
    const handlesend = () => {
        // q(phoneNumber);
        console.log(phoneNumber);
        fetch("http://localhost:3001/send-otp", {
            method: 'POST',
            body: JSON.stringify({
                phoneNumber,
            }),
            // headers: {
            //     'Content-type': 'application/json; charset=UTF-8',
            // },
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then((response) => {
                console.log(response.status);
                if (response.status == 200) {
                    // console.log(success);
                    toast.success("OTP sent successfully");
                    setStatus(true);
                }
                else {
                    console.log("Failed1");
                    toast.error("Some error occurrend")
                }
            })
            .catch((err) => {
                console.log(err);
                toast.success("Failed");
            })
    }

    return (
        <D>
            {
                status === false ?
                    <SecondMain>
                        <ThirdMain>
                            Enter the Phone Number
                        </ThirdMain>
                        <But>
                            <Input placeholder="phone number" name="Phone-number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}>
                            </Input>
                            <FourthMain>
                                Note- You should have a registered mobile number with us.If you're mobile number is not registered than
                                <Link href="/" onClick={Change} >
                                    Click Here
                                </Link>
                            </FourthMain>
                        </But>
                        <Bu type="submit" onClick={handlesend} >Submit</Bu>
                    </SecondMain>
                    :
                    <SecondMain>
                        <ThirdMain>
                            Successful;
                        </ThirdMain>
                        <Link href="/otp">
                            <Bu type="submit" >CONTINUE</Bu>
                        </Link>
                    </SecondMain>
            }
        </D>
    )
}

const Button = styled.button`

`

const D= styled.div`
display: flex;
justify-content: center;
align-items: center;
`

// const Main = styled.div`
// width: 100%;
// height:100%;

// display: flex;
// justify-content: space-between;
// align-items: center;
// `

const SecondMain = styled.div`
align: center;
height: 60%;
width: 60%;
background-color: black;
border-radius: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`

const ThirdMain = styled.div`
text-align: center;
margin-down: 100px;
font-size: 40px;
color: white;
`

const Input = styled.input`
  padding:15px;
  background-color:${(props) => props.theme.bgDiv} ;
  color:${(props) => props.theme.color} ;
  margin-top:4px;
  border:none ;
  border-radius:8px ;
  outline:none;
  font-size:large;
  width:100% ;
`

const FourthMain = styled.p`
color: white;
font-size: 13px;
margin: 30 0 30 0;
`

const But = styled.div`
margin-down: 20px
`

const Bu = styled.button`
width: 60%;
height: 10%;
background-color: white;
color: black;
padding: 10px 20px; 
text-align: center; 
text-decoration: none; 
display: inline-block; 
font-size: 16px; 
border-radius: 5px; 
border: none; 
cursor: pointer;
`

export { stat, prop, Number };

export default First;
