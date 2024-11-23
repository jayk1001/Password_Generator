import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";
import { RxValue } from "react-icons/rx";
import {Slider,RangeSlider} from 'rsuite'

export default function App() {
  const [password, setPassword] = useState("Generate Password");
  const symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
  const [up, setup] = useState(true);
  const [lw, setlw] = useState(true);
  const [sm, setsm] = useState(false);
  const [nu, setnum] = useState(false);

  console.log("The uppper case value->",up)
  console.log("The lowercase value->",lw)
  console.log("The symbol value->",sm);
  console.log("The number value ->",nu)
  
  let str = "";
  const [pass_length, setpass_length] = useState(7);

  function UpC() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  function LwC() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  function NuC() {
    return Math.floor(Math.random() * 9);
  }
  function Sc() {
    const res = Math.floor(Math.random() * symbol.length);
    return symbol[res];
  }

  let p_len=0;
  while(pass_length!=p_len){
    const k = Math.floor(Math.random() * 4);
    console.log(k);
    if (k === 0 && sm===true) {
      str = str + Sc();
      p_len++;
    } else if (k === 1 && lw===true) {
      str = str + LwC();
      p_len++;
    } else if (k === 2 && nu===true) {
      str = str + NuC();
      p_len++;
    } else if(k===3 && up===true){
      str = str + UpC();
      p_len++;
    }
  }

  // for (let i = 0; i < pass_length; i++) {
  //   const k = Math.floor(Math.random() * 4);
  //   console.log(k);
  //   if (k === 0 && sm===true) {
  //     str = str + Sc();
  //   } else if (k === 1 && lw===true) {
  //     str = str + LwC();
  //   } else if (k === 2 && nu===true) {
  //     str = str + NuC();
  //   } else if(k===3 && up===true){
  //     str = str + UpC();
  //   }
  // }

  function handleresult(){
    setPassword(str);
  }

  console.log("the String is ->", str);

  return (
    <>
      <div className=" flex items-center justify-center h-[100vh] w-[100vw] bg-fuchsia-400">
        <div className=" flex flex-col gap-3">
          <div className=" text-white text-3xl font-bold">
            PASSWORD GENERATOR
          </div>
          <div className=" rounded-2xl mx-2 my-2 flex justify-between bg-slate-500">
            <div className=" mx-2 text-yellow-300 bg-slate-500 border-none" >
              {password}
            </div>
            <div className=" mx-2 my-2">
              <FaCopy />
            </div>
          </div>
          <div className=" rounded-sm text-white justify-between bg-slate-500">
            <div className=" flex-col gap-3">
              <div className=" flex justify-between">
                <div className=" font-bold text-xl">Password Length</div>
                <div className=" text-yellow-400">{pass_length}</div>
              </div>
              <div className=" bg-yellow-300 rounded mx-auto w-[98%] text-blue-400">
                <Slider
                value={pass_length}
                  // onChange={value=>{
                  //   setpass_length(value)
                  // }}
                  onChange={(value)=>{
                    setpass_length(value);
                  }}
                  className=" hover:cursor-pointer"
          
                />
              </div>
              <div>
                <input
                  type="checkbox"
                  defaultChecked='true'
                  onChange={() => {
                    setup(!up);
                  }}
                />
                <span>Include Uppercase Letters</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  defaultChecked="true"
                  onChange={() => {
                    setlw(!lw);
                  }}
                />
                <span>Include Lowercase Letters</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  onChange={() => {
                    setnum(!nu);
                  }}
                />
                <span>Include Numbers</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  onChange={() => {
                    setsm(!sm);
                  }}
                />
                <span>Include Symbols</span>
              </div>
              <div className=" mt-8 mb-4 flex justify-center">
                <div className=" bg-pink-400 rounded-md w-[97%]">
                  <button className=" w-full" onClick={handleresult}>GENERATE PASSWORD</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
