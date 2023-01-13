import styled from "styled-components";
import React from "react";


const KanbanTableContainer = styled.div`
    height: 600px;
    display: flex;
    flex-direction: column;
    width:${({columnLength}) => columnLength && columnLength === 5 ? '1500px' : '1200px' };
`
const KanbanColumnsContainer = styled.div`
    margin-top:30px;
    height: 500px;
    display: flex;
    flex-direction: row;
    width:100%;
`
const TicketAddContainer = styled.div`
    width:100%;
    height:30px;
    padding:15px;
    cursor:pointer;
    span{
        font-size:30px;
    }
`

export{
    KanbanColumnsContainer,
    KanbanTableContainer,
    TicketAddContainer,
}