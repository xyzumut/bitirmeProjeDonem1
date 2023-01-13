import styled from "styled-components"

const TicketPageLayout = styled.div`
    width:1400px;
    padding:50px 25px;
    display:flex;
    // justify-content:center;
    // align-items:center;
    flex-direction:row;
    flex-wrap:wrap;
    margin:0 auto;
    background-color:rgba(255,255,255,.7);
`
const TicketPageLeftContainer = styled.div`
    width:850px;
    min-height:300px;
`
const TicketDetailContainer = styled.div`
    width:100%;
    min-height:300px;
    display:flex;
    flex-direction:column;
    padding:40px 30px;
`
const TicketDetailTop = styled.div`
    width:100%;
    min-height:200px;
`
const TicketHeader = styled.div`
    font-size:24px;
    Font-weight:700;
    border-bottom : 1px solid black;
`
const TicketContent = styled.div`
    font-size:14px;
    line-height:25px;
    margin-top:20px;
`

const CommentsContainer = styled.div`
    width:100%;
    min-height:200px;
`
const CommentsLength = styled.div`
    font-size:20px;
    width:100%;
    display:block;
    position:relative;
    &:after{
        content:'';
        display:block;
        position:absolute;
        width:70%;
        height:1px;
        background-color:black;
        top:50%;
        right:10px;
        transform:translateY(-50%);
    }
`
const Comments = styled.div`
    width:100%;
    height:max-content;
`

const TicketPageRightContainer = styled.div`
    width:500px;
    padding:40px 20px 20px 10px;
`
const TicketImages = styled.div`
    width:100%;
    height:300px;
    margin-bottom:10px;
    .ant-image{
        height:100px;
        margin:5px;
        max-width:20%;
        img{height:100%;max-width:100%;}
    }
    display:block;
    overflow:auto;
`
const ImageHeader = styled.div`
    font-size:30px;
    text-align:center;
`
const CommentPost = styled.div`
    width:100%;
    height:200px;
    display:flex;
    flex-direction:column;
`
const CommentTextArea = styled.textarea`
    width:100%;
    height:120px;
    resize:none;
`
const CommentButtons = styled.div`
    width:100%;
    height:80px;
    display:flex;
    justify-content:space-around;
    align-items:center;
`
const CommentContainer = styled.div`
    position:relative;
`
const CommentOptions = styled.div`
    width:10px;
    position:absolute;
    top:10px;
    right:15px;
    z-index:1;
    cursor:pointer;
`
export{
    TicketContent,
    TicketPageLeftContainer,
    TicketDetailContainer,
    TicketHeader,
    TicketPageLayout,
    TicketImages,
    TicketDetailTop,
    CommentsContainer,
    Comments,
    TicketPageRightContainer,
    CommentsLength,
    ImageHeader,
    CommentPost,
    CommentTextArea,
    CommentButtons,
    CommentContainer,
    CommentOptions
}