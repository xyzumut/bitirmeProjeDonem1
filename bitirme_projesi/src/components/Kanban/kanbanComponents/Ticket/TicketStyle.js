import styled from "styled-components"

const TicketContainer = styled.div`
    width: 100%;
    height: 180px;
    border-radius: 15px;
    margin:10px 0;
    cursor: pointer;
    padding: 10px;
    background-color:#f7eded;
`
const TicketTags = styled.div`
    width: 70%;
    height: 30px;
    border-radius:5px;
    overflow-x: auto;
    overflow-y: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom:2px;
`
const TicketPriortyContainer = styled.div`
    width:40px;
    height:15px;
    display:flex;
    justify-content:space-around;
    align-items:center;
`
const TicketPriorty = styled.div`
    width:7px;
    height:7px;
    background-color:${({priortyColor}) => priortyColor ? priortyColor : 'gray'};
    border-radius:100%;
`
const TicketTag = styled.div`
    padding: 1px 5px;
    margin: 2px;
    border-radius: 5px;
    // background-color:${({tag}) => tag && tag ==='bugfix' ? '#F6F6C9' : tag === 'update' ? '#54B435' : '#AA8B56'};
    background-color:${({tag}) => tag && tag ==='bugfix' ? 'orange' : tag === 'update' ? '#54B435' : '#AA8B56'};
    font-weight:600;
`
const TicketContainerHeader = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
`
const TicketHeader = styled.p`
    font-size:12px;
    margin-top:5px;
    font-weight:800;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
`
const TicketContext = styled.p`
    font-size:12px;
    padding:1px 3px;
    min-height:50px;
    display: -webkit-box;
	-webkit-box-orient: vertical;  
	overflow:hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
`
const TicketBottom = styled.div`
    width:100%;
    height:35px;
    display:flex;
    flex-direciton:row;
    align-items:center;
    justify-content:space-between;
    padding:0 2px;
    border-bottom-left-radius:5px;
    border-bottom-right-radius:5px;
    background-color:inherit;
`
const TicketBottomRightItems = styled.div`
    display:flex;
    justify-content:flex-end;
    align-items:center;
    width:70%;
`
const TicketMess = styled.div`
    font-size:12px;
    margin-right:15px;
    &:hover{
    }
`
const TicketOwnerPic = styled.img`
    width:30px;
    height:30px;
    border-radius:100%;
    border:1px solid black;
    margin-right:10px;
`
export{
    TicketBottom,
    TicketBottomRightItems,
    TicketContainer,
    TicketHeader,
    TicketContext,
    TicketContainerHeader,
    TicketMess,
    TicketOwnerPic,
    TicketTag,
    TicketTags,
    TicketPriortyContainer,
    TicketPriorty
}