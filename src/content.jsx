import React, { useState,useEffect }from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Plot from 'react-plotly.js';
import PlotPieA from './occupy.jsx';
import PlotPieB from './occupy-company.jsx';
import PlotPersonaComp from './persona-comp.jsx';
import PlotPersonaTopic from './persona-topic.jsx';
import { update } from 'plotly.js';
import PlotBarChartA from './trend-topix.jsx';
import PlotBarChartB from './trend-comp.jsx';



const Content = ({plot,visualType,topic,company,resetApply}) => {

    const [data, setData] = useState(null);
    const [clickData, setClickData] = useState(); // クリックデータの状態

    const handlePieChartClick = (data) => {
      console.log("クリックされたデータ:", data); // デバッグ用
      setClickData(data); // 状態を更新
    };
    
    
  return (
    
    <Container fluid className="bg-light" style={{ height: '100%' }}>
      {/* First Row */}
      <Row style={{ height: '48%' }}>
        {/* Persona Graph */}
        <Col md={10} style={{ marginLeft: '0%' }}>

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
        <Col md={2} style={{ height: '100%' }}>
          <p
            style={{
              fontSize: 18,
              color: 'gray',
              textAlign: 'center',
            }}
            className="text-secondary-emphasis"
          >

          </p>
          <Row style={{ height: '80%' }}>
            <Col style={{ height: '29%', marginTop: '4%' }}>
              <Card className="white">
                <Card.Body>
                  <Card.Title className="text-secondary-emphasis">1</Card.Title>
                  <Card.Text className="text-secondary-emphasis">ABC</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col style={{ height: '29%', marginTop: '4%' }}>
              <Card className="white">
                <Card.Body>
                  <Card.Title className="text-secondary-emphasis">2</Card.Title>
                  <Card.Text className="text-secondary-emphasis">DEF</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col style={{ height: '29%', marginTop: '4%' }}>
              <Card className="white">
                <Card.Body>
                  <Card.Title className="text-secondary-emphasis">3</Card.Title>
                  <Card.Text className="text-secondary-emphasis">GHI</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Second Row */}
      <Row style={{ height: '48%' }}>
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

