import React,{useEffect, useRef} from "react";
import styled from 'styled-components'
const getcolumnWidth = (columnLength) => {
    console.log('columnLength',columnLength)
    let width = 0 
    let fontSize = 0
    switch (columnLength) {
        case 3:
            width = 33
            break;
        case 4:
            width = 25
            break;
        default:
            width = 20
            break;
    }
    return width+'%'
}
const Column = styled.div`
    width:${({columnLength}) => columnLength && getcolumnWidth(columnLength)};
    height:600px;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    overflow: auto;
    padding:0px 5px;
    align-content: flex-start;
    z-index:100;
    position:relative;
    margin:0 20px;
    border:none;
    background:rgba(255,255,255,.2);
    border-radius:5px;
`
const ColumnName = styled.div`
    width:100%;
    height:24px;
    font-size:18px;
    font-weight:600;
    line-height:24px;
    font-weight:900;
    top:0;
    text-align:center;
    position:relative;
    &:before, &:after{
        content:'';
        display:block;
        position:absolute;
        width:15%;
        height:2px;
        background-color:black;
        top:50%;
        transform:translateY(-50%);
    }
    &:after{
        right:0;
    }
    
`
const KanbanColumn = ({children, columnName, columnLength}) => {
    const columnRef = useRef()
    useEffect(()=>{
        columnRef.current.addEventListener('dragenter',(e)=>{
            const _column = e.currentTarget
            _column.className+=' targetColumn'
        })
        columnRef.current.addEventListener('dragover',(e)=>{
            e.preventDefault()
        })
        columnRef.current.addEventListener('dragleave',(e)=>{
            const _column = e.currentTarget
            _column.classList.remove('targetColumn')
        })
        columnRef.current.addEventListener('drop',(e)=>{
            const hedefKolon = e.currentTarget
            const activeTicket = document.querySelector('.ticketHold')
            hedefKolon.append(activeTicket)
            console.log(activeTicket)
            hedefKolon.classList.remove('targetColumn')
        })
    },[])

    return(
        <Column   ref={columnRef} columnLength={columnLength}> 
            <ColumnName >{columnName}</ColumnName>
            {children}
        </Column>
    )
}
export default KanbanColumn