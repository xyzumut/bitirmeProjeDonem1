import React from "react";
import styled from 'styled-components'
import Ticket from "./kanbanComponents/Ticket/Ticket";
import KanbanColumn from "./kanbanComponents/KanbanColumn/KanbanColumn";
import 'antd/dist/antd.min.css'
import { Alert } from 'antd'
import {PlusCircleFilled } from "@ant-design/icons";
import {KanbanColumnsContainer, KanbanTableContainer, TicketAddContainer} from './KanbanTable.style'

const alertMessage = 'Kanban Panosunda Bulunan Ticketları Diğer Sütunlara Mouse İle Sürükleyebilir Ya da Ticketlara Tıklandığında Açılan Pencerede Ticket\'ın Durumunu İnceleyebilirsiniz.'

const KanbanTable = ({columnData}) => {
    console.log('columnData',columnData)
    return(
        true ? (<KanbanTableContainer style={{margin:'50px auto'}} columnLength = {columnData.length}>  
            <Alert
                message={alertMessage}
                type="info"
                closable
                showIcon 
            />
            <TicketAddContainer>
                <PlusCircleFilled/>
            </TicketAddContainer>
            <KanbanColumnsContainer>
                {
                    columnData.map((item,key)=>{
                        return(
                            <KanbanColumn key={key} columnName={item.column_name} columnLength={columnData.length}>
                                {
                                    item.ticketGroups && item.ticketGroups.length !=0 && item.ticketGroups.map((ticket,key)=>{
                                        return(
                                            <Ticket  
                                                key={key}
                                                ticketID={ticket.id} // okey
                                                tags={ticket.tags} // okey
                                                header={'Eklenecek'} //okey
                                                context={ticket.ticket_text} // okey
                                                date={ticket.created_at} // okey 
                                                messCount={ticket.commentSize ? ticket.commentSize : 0}
                                                columnLength={columnData.length}
                                            />
                                        )
                                    })
                                }
                            </KanbanColumn>
                        )
                    })
                }
            </KanbanColumnsContainer>
        </KanbanTableContainer>) : <div>Bekleniyor</div>
    )
}
export default KanbanTable
