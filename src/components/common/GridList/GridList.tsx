import React from "react";
import { Col } from "react-bootstrap";


type TGridListProps<T> ={
    records : T[];
    callBackFunc: (item:T)=> React.ReactNode

}

type HasId= {id?:number}



const GridList = <T extends HasId>({records,callBackFunc} : TGridListProps<T>) => {
  return (
    <>
    {
        records.map((item) => {
            return (
        <Col className="rowBox" key={item.id} xs={6}  md={6} xl={3} >
         
         {callBackFunc(item)}
         </Col>
            )
        })

      }

</>
      
      
      
  )
}

export default GridList