import React, { useState,useEffect }from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import PlotPieA from './occupy.jsx';
import PlotPieB from './occupy-company.jsx';
import PlotPersonaComp from './persona-comp.jsx';
import PlotPersonaTopic from './persona-topic.jsx';

import PlotBarChartA from './trend-topix.jsx';
import PlotBarChartB from './trend-comp.jsx';



const Content = ({plot,visualType,topic,company,resetApply}) => {


    const [clickData, setClickData] = useState(); // クリックデータの状態

    const handlePieChartClick = (data) => {
      console.log("クリックされたデータ:", data); // デバッグ用
      setClickData(data); // 状態を更新
    };
    
    
  return (
    
    <Container fluid className="bg-light" style={{ width:'100vh',height: '100vh' }}>
      {/* First Row */}
      <Row style={{ width:'100vh',height: '50vh' }}>
        {/* Persona Graph */}
        <Col md={9} style={{width:'100vh',height: '100vh' }}>
        {
          visualType === "one-topic" ? (
            <PlotPersonaTopic
              update={plot}
              visualType={visualType}
              topic={topic}
              company={company}
              onRendered={resetApply}
              layout={{
                title: "ペルソナの可視化",
                width: '100%',
                height: '42vh',
              }}
             
              className="bg-light"
            />
          ) : visualType === "one-comp" ? (
            <PlotPersonaComp
              update={plot}
              visualType={visualType}
              topic={topic}
              company={company}
              onRendered={resetApply}
              layout={{
                title: "ペルソナの可視化",
                width: '100%',
                height: '42vh',
              }}
            
              className="bg-light"
            />
          ) : (
            <div>該当する表示がありません</div>
          )
        }

        </Col>

        {/* Right Column with Cards */}
        <Col md={3} style={{ height: '40%' }}>
          <Row className="h-100">
            {["ABC", "DEF", "GHI"].map((text, index) => (
              <Col
                key={index}
                xs={12} // 横幅全体を使う
                className="d-flex align-items-center justify-content-center"
                style={{ flex: "1 1 auto" }} // 高さを均等に分割
              >
                <Card className="w-75 h-75"> {/* カードを親要素に収める */}
                  <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                    <Card.Title className="text-secondary-emphasis">{index + 1}</Card.Title>
                    <Card.Text className="text-secondary-emphasis">{text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
</Col>


  
      </Row>

      {/* Second Row */}
      <Row style={{ height: '40vh' }}>
        <Col md={6}>
        {
          visualType === "one-topic" ? (
            <PlotPieA
              update={plot}
              visualType={visualType}
              topic={topic}
              company={company}
              onRendered={resetApply}
              layout={{
                title: '注目企業の業界に対する占有率',
                width: '100%',
                height: '80%',
              }}
              
              className="bg-light"
            />
          ) : visualType === "one-comp" ? (
            <PlotPieB
              update={plot}
              visualType={visualType}
              topic={topic}
              company={company}
              onRendered={resetApply}
              onClickData={handlePieChartClick} // クリックデータのハンドラーを渡す
              layout={{
                title: '注目企業の業界に対する占有率',
                width: '100%',
                height: '80%',
              }}
              className="bg-light"
            />
          ) : (
            <div>該当する表示がありません</div>
          )
        }

        

         
        </Col>
        <Col md={6}>
        {
          visualType === "one-topic" ? (
          <PlotBarChartA
              update={plot}
              visualType={visualType}
              topic={topic}

              onRendered={resetApply}
            data={[]} // データを追加してください
            layout={{
              title: 'Fタームの分布',
              width: '100%',
              height: '80%',
            }}
            className="bg-light"
          />):(
          <PlotBarChartB
              update={plot}
              visualType={visualType}
              topic={topic}
              company={company}
              clickdata={clickData} // クリックデータを渡す
    

              onRendered={resetApply}
            data={[]} // データを追加してください
            layout={{
              title: 'Fタームの分布',
              width: '100%',
              height: '80%',
            }}
            className="bg-light"
          />)}
          
        </Col>
      </Row>
    </Container>
  );
};

export default Content;

