import React, { useEffect, useState } from "react";
import { KanbanTable } from "../../components/AllComponents";
import { Spin } from 'antd'
import { getColumnDatasAPI } from "../../services/services";


const KanbanPanosu = () => {

    const[kanbanDatas, setKanbanDatas]=useState([])
    const[loading, setLoading] = useState(false)

    const getColumn = async () => {

        const response = await getColumnDatasAPI()

        let columns = response.columnDatas
        let onlyTickets = response.ticketDatas
        let ticketComments = response.ticketCommentLengths

        setLoading(true)

        let ticketTemp = []

        for (let index = 0; index < onlyTickets.length; index++) {
            let ticket = onlyTickets[index]
            console.log(ticket)
            let tags = []
            for (let u = 0; u < ticket.tags.length; u++) {
                let tag = ticket.tags[u].tag
                tags.push(tag)
            }
            for (let index = 0; index < ticketComments.length; index++) {
                let ticketComment = ticketComments[index]
                // console.log(ticket,ticketComment)
                if (ticket.id == ticketComment.ticket_id) {
                    ticket.commentSize ? 
                    ticket.commentSize = ticket.commentSize+1 :
                    ticket.commentSize = 1
                }
            }
            ticket.tags = tags
            ticketTemp.push(ticket)
        }

        columns.map((column) => {
            column.ticketGroups = []
            ticketTemp.map((ticketItem) => {
                if (ticketItem.column_id == column.id) {
                    column.ticketGroups.push(ticketItem) 
                }
            })
        })

        setKanbanDatas(columns)
    }
    useEffect( () => {
        getColumn()
    },[])

    return(
        loading ?
        <KanbanTable columnData={kanbanDatas}/> :
        <Spin size="large" style={{'margin':'200px 47%'}}/>
    )
}
export default KanbanPanosu