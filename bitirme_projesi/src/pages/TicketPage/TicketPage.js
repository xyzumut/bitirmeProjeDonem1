import { useParams } from "react-router-dom"
import { Image, Avatar, Comment, Button, Popover, Upload } from 'antd';
import { UploadOutlined, SettingFilled } from '@ant-design/icons';

import React, { useState, useEffect,} from 'react';
import {TicketImages, CommentsContainer, CommentsLength, TicketPageRightContainer, TicketPageLeftContainer, TicketContent, TicketDetailContainer, TicketDetailTop, TicketHeader, TicketPageLayout,
    Comments, ImageHeader, CommentPost, CommentTextArea, CommentButtons, CommentContainer
    ,CommentOptions} from './TicketPageStyle'

const metin ='bu konuda çok acil bir durum olursa diye bir firma kuruluşları, kurum ve kuruluşların da bu alanda yeni bir düzenleme yapılıncaya kadar yemek yemek için bile bir kadının kırıldığı, toplantı salonu, sauna, kapalı teklif usulü ile taçlandırmak istedim. bu kez de ben de aynı şekilde düşünmeye başlar. çünkü bu tür bir işlem değil. ancak her şey bitmiş değil. bu durumda da önemli işlere imza attığını belirterek, bir süre basın ve diyalog kutusunu kapatın. sel çapta tanınan kararla ilgili olarak sağlık bakanlığına bağlı hastanelerde çalışabilirler. bu tür konularda insanları bilgilendirmek için yaptığı bir ankete göre türkiye’de 2008 yılında başlanan ve 2010 yılında ise 10 bin kişi de ölümle sonuçlanan bir haberin ardından bölgeye giden güney osetya ve abhazya’yı tanımak için kullanılan yöntemlerden birisi de bu olayı anlattı. belediye başkanı ahmet çakır, ayrıca görev yapan yöneticilerin bu tavrı da aynı şekilde yapılan masaj ve antibiyotik kullanmanın da bir anlamı yok. bir kaç gün içinde yapılması gereken işleri ve kişisel gereksinimleri gidermek için çalışmalarını sürdürüyor.'
const UploadPicture = () => {
    return(
        <div style={{'display':'flex','flex-direction':'column','justify-content':'center'}}>
            <div style={{'margin':'auto'}}>
                <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                >
                    <div>
                        <div>+</div>
                        <div>Resim yükleyin</div>
                    </div>
                </Upload>
            </div>
            <Button type="success">Yükle</Button>
        </div>
    )
}
const commentStyles={
    'margin-top':'5px',
    'background-color':'white',
    'border-radius':'20px',
    
}
const TicketPage = () => {
    const ticket = useParams()
    useEffect(()=> {
        console.log(ticket.id)
        /* Comments önceki yorumlar */
    })

    return (
        <TicketPageLayout>
            <TicketPageLeftContainer>

                <TicketDetailContainer>
                    <TicketDetailTop>
                        <TicketHeader>Ticket Headırı yani Ticket Başlığının Tam hali</TicketHeader>
                        <TicketContent>
                            <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" 
                            /> <h3 style={{display:'inline'}}>Ticket Sahibi:{'owner'}</h3>
                            <br/> 
                            {metin}
                        </TicketContent>
                    </TicketDetailTop>
                </TicketDetailContainer>
                
                <CommentsContainer>
                    <CommentsLength>Yorum Sayısı : {4}</CommentsLength>
                    <Comments>
                        <CommentContainer>
                            <Popover placement="bottom" content={'Seçenekler'}  trigger="hover">
                                <CommentOptions children={<SettingFilled />}/>
                            </Popover>
                            <Comment 
                                author={'Yazar Adi'}
                                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                                content={'Date objesini güncelelmeliyiz, renkleri şuan çok uyumsuz gibi '}
                                style={commentStyles}
                            />
                        </CommentContainer>
                    </Comments>
                </CommentsContainer>

            </TicketPageLeftContainer>

            <TicketPageRightContainer>

                <ImageHeader>Ticket ile Alakalı Görseller</ImageHeader>
                <TicketImages>
                    <Image.PreviewGroup>
                        <Image
                            src="https://placebear.com/g/200/300"
                        />   
                        <Image
                            src="https://placebear.com/g/600/300"
                        />   
                        <Image
                            src="https://placebear.com/g/200/310"
                        /> 
                        <Image
                            src="https://placebear.com/g/400/300"
                        /> 
                        <Image
                            src="https://placebear.com/g/250/300"
                        /> 
                        <Image
                            src="https://placebear.com/g/670/300"
                        /> 
                    </Image.PreviewGroup>
                </TicketImages>
                <CommentPost>
                    <CommentTextArea maxLength={500} />
                    <CommentButtons>
                        <Button style={{'padding':'0 50px'}} type="primary">Yorumu Yaz</Button>
                        <Popover placement="bottom" content={<UploadPicture/>} title="Resim Yükle" trigger="click">
                            <Button icon={<UploadOutlined />}>Resim Yükle</Button>
                        </Popover>
                    </CommentButtons>

                </CommentPost>
            </TicketPageRightContainer>

        </TicketPageLayout>
    );
};
export default TicketPage;


/*




*/