import React, {useEffect, useRef, useState} from "react";
import {FaComment} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import {TicketBottom, TicketBottomRightItems, TicketContainer, TicketContext, TicketContainerHeader, TicketMess, TicketOwnerPic,
TicketTag, TicketTags, TicketHeader, TicketPriortyContainer, TicketPriorty, } from './TicketStyle'
import { Popover } from 'antd';
const Ticket = ({ticketID, tags, header, context, date, messCount}) => {
    const navigate = useNavigate()
    console.log(messCount)
    const kanbanTicketRef = useRef()
    const [priorty,setPriorty]=useState(['green','green','green'])

    const getPriorty = (date) => {
        date = date !== undefined ? date : '11.11.2022'
        const day = date.split('.')[0]
        const deadline = new Date().getDate() - day  
        console.log('Kalan Gün Sayısı',deadline)
        const colors = {
            green:'green',
            yellow:'#F7D74A',
            red:'red'
        }
        let priorty = [];
        if (10<deadline) {
            priorty=[colors.red,colors.red,colors.red]
        }
        else if(8<deadline && deadline<=10){
            priorty=[colors.yellow,colors.red,colors.red]
        }
        else if(6<deadline && deadline<=8){
            priorty=[colors.yellow,colors.yellow,colors.red]
        }
        else if(4<deadline && deadline<=6){
            priorty=[colors.yellow,colors.yellow,colors.yellow]
        }
        else if(2<deadline && deadline<=4){
            priorty=[colors.green,colors.yellow,colors.yellow]
        }
        else if(0<deadline && deadline<=2){
            priorty=[colors.green,colors.green,colors.yellow]
        }
        else if(deadline<=0){
            priorty=[colors.green,colors.green,colors.green]
        }
        return priorty
    }

    useEffect(()=>{
        kanbanTicketRef.current.addEventListener('dragstart',(e)=>{
            const activeTicket = e.currentTarget
            activeTicket.className+=' ticketHold'
        })
        kanbanTicketRef.current.addEventListener('dragend',(e)=>{
            const activeTicket = e.currentTarget
            activeTicket.classList.remove('ticketHold')
        })
        setPriorty(getPriorty())
    },[])
    useEffect(()=>{
        console.log(priorty)
    },[priorty])


    return(
        <TicketContainer draggable={"true"} ref={kanbanTicketRef}  onClick={()=>{
            navigate(`/ticket/${ticketID}`)
        }}>
            <TicketContainerHeader>
                <TicketTags>
                    {
                        tags.map((tag,key)=>{
                            return(<TicketTag key={key} tag={tag} >{tag}</TicketTag>)
                        })
                    }
                </TicketTags>
                <Popover content={'Tarih : '+date} trigger="hover">
                    <TicketPriortyContainer>
                        <TicketPriorty priortyColor={priorty[0]}/>
                        <TicketPriorty priortyColor={priorty[1]}/>
                        <TicketPriorty priortyColor={priorty[2]}/>
                    </TicketPriortyContainer>
                </Popover>
            </TicketContainerHeader>
            <TicketHeader>{header}</TicketHeader>
            <TicketContext >{context}</TicketContext>
            <TicketBottom >
                <TicketOwnerPic src='https://joeschmoe.io/api/v1/random' draggable={false}/>
                <TicketBottomRightItems>
                    <TicketMess>{messCount} <FaComment/></TicketMess>
                </TicketBottomRightItems>
            </TicketBottom>
        </TicketContainer>
    )
}
export default Ticket