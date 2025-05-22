import React, { useState } from "react";
import data from "./Data";
import "./Main.css"

export default function Accordian(){

    let [select, setSelect] = useState(null)
    let [enableMultiSelection, setMultiSelection]  = useState(false);
    let [multiple, setMultiple] = useState([]);



    function handleSingleSelection(id){
        setSelect(id === select?null
            :id
        );
    }
    function handleMultiple(id){
        let cpyMultiple = [...multiple];

        let indexOfId = cpyMultiple.indexOf(id);

        if(indexOfId === -1){
            cpyMultiple.push(id);
        }else{
            cpyMultiple.splice(indexOfId,1)
        }

        setMultiple(cpyMultiple);
    }
    console.log(enableMultiSelection, multiple)

    return (
        <div className="Accordian-container">
            <button onClick={()=>setMultiSelection(!enableMultiSelection)}>Select Multiple</button>
            <div className="accordians">
            {
                data.map(dataItem=>
                    <div key={dataItem.id} className="item" onClick={()=>enableMultiSelection?
                        handleMultiple(dataItem.id)
                        :handleSingleSelection(dataItem.id)
                        }>
                        <div className="container">
                    <h3>{dataItem.question}</h3>
                 
                    {
                        enableMultiSelection ?
                        multiple.indexOf(dataItem.id) !== -1 && (
                            <div className="answer"><hr/>{dataItem.answer}</div>
                        )
                        : select === dataItem.id && (
                            <div className="answer">
                                <hr/>{dataItem.answer}
                                </div>
                        )

                    }
                    </div>
                    </div>
                )
            }
            </div>
        </div>
    )
}