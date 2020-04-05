import React from 'react';
import {Avatar, Card} from "antd";
import './Info.scss';
const { Meta } = Card;


const Info = (props) =>
    <div className="FlexCardsWrapper">

        <Card
            /*title="About project"*/
          /*    cover={
                  <img
                      alt="fox"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
              }*/
              className="FlexCard">
            <Meta
                /*avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}*/
                title="About project"
                description="I am trying to make a simple and clear investment tool"
            />

        </Card>

        <Card className="FlexCard">
            <Meta title="About me" description="I am experienced developer who just don't like current investment analyst tools"/>
        </Card>

        <Card className="FlexCard">
            <Meta title="Contact" description="Please contact me on email: taiberium@mail.ru"/>
        </Card>

    </div>;

export default Info;


