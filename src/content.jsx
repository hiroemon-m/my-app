import React, { useState,useEffect }from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import PlotPieA from './occupy.jsx';
import PlotPieB from './occupy-company.jsx';
import PlotPersonaComp from './persona-comp.jsx';
import PlotPersonaTopic from './persona-topic.jsx';

import PlotBarChartA from './trend-topix.jsx';
import PlotBarChartB from './trend-comp.jsx';
import { getCardData } from "./go-anywhere.jsx"; // 正しいパスを指定





// チャート読み込み中オーバーレイ
const LoadingOverlay = () => (
  <div style={{
    position: 'absolute', inset: 0,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: 'rgba(255,255,255,0.75)', zIndex: 10, fontSize: 15, color: '#666',
    pointerEvents: 'none',
  }}>
    読み込み中...
  </div>
);

const Content = ({plot,visualType,topic,company,span,topicList,resetApply}) => {

    const [clickData, setClickData] = useState(null);
    const [isPieLoading,  setIsPieLoading]  = useState(false);
    const [isBarLoading,  setIsBarLoading]  = useState(false);

    const handlePieChartClick = (data) => {
      setClickData(data);
    };

    // 会社・トピックが変わったらクリック選択をリセット、ローディング開始
    useEffect(() => {
      setClickData(null);
      setIsPieLoading(true);
      setIsBarLoading(true);
    }, [company, topic, span, visualType]);

    // Apply ボタン時もローディング
    useEffect(() => {
      if (plot === 1) {
        setIsPieLoading(true);
        setIsBarLoading(true);
      }
    }, [plot]);

    // クリックでバーチャートのみローディング
    useEffect(() => {
      if (clickData !== null) setIsBarLoading(true);
    }, [clickData]);

    const [cardData, setCardData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const data = await getCardData(plot, visualType, topic, company, span, clickData);
        setCardData(data);
      };
      fetchData();
    }, [plot, visualType, topic, company, span, clickData]);
  
    
  return (
    
    <Container fluid className="bg-light" style={{ height: '100vh' }}>
      {/* First Row */}
      <Row style={{ height: '50vh' }}>
        {/* Persona Graph */}
        <Col md={12} style={{ marginLeft: '0%' }}>

        {
          visualType === "one-topic" ? (
            <PlotPersonaTopic
              update={plot}
              visualType={visualType}
              topic={topic}
              company={company}
              span={span}
              onRendered={resetApply}
              layout={{
                title: "ペルソナの可視化",
                width: '100%',
                height: '50vh',
              }}
              config={{ responsive: true }} // Plotlyにレスポンシブ設定を有効化
              style={{ width: "100%", height: "50vh" }} // 必ず全体サイズを親要素に合わせる
              className="bg-light"
            />
          ) : visualType === "one-comp" ? (
            <PlotPersonaComp
              update={plot}
              visualType={visualType}
              topic={topic}
              company={company}
              span={span}
              onRendered={resetApply}
              layout={{
                title: "ペルソナの可視化",
                width: '100%',
                height: '42vh',
              }}
              config={{ responsive: true }} // Plotlyにレスポンシブ設定を有効化
              style={{ width: "100%", height: "100%" }} // 必ず全体サイズを親要素に合わせる
              className="bg-light"
            />
          ) : (
            <div>該当する表示がありません</div>
          )
        }
        </Col>
  </Row>

      {/* Second Row */}
      <Row style={{ height: '50vh' }}>
        <Col md={6} style={{ position: 'relative' }}>
          {isPieLoading && <LoadingOverlay />}
        {
          visualType === "one-topic" ? (
            <PlotPieA
              update={plot}
              visualType={visualType}
              topic={topic}
              company={company}
              span={span}
              onRendered={() => { setIsPieLoading(false); resetApply(); }}
              layout={{ title: '注目企業の業界に対する占有率', width: '100%', height: '80%' }}
              className="bg-light"
            />
          ) : visualType === "one-comp" ? (
            <PlotPieB
              update={plot}
              visualType={visualType}
              topic={topic}
              company={company}
              span={span}
              topicList={topicList}
              onRendered={() => { setIsPieLoading(false); resetApply(); }}
              onClickData={handlePieChartClick}
              layout={{ title: '注目企業の業界に対する占有率', width: '100%', height: '80%' }}
              className="bg-light"
            />
          ) : (
            <div>該当する表示がありません</div>
          )
        }
        </Col>
        <Col md={6} style={{ position: 'relative' }}>
          {isBarLoading && <LoadingOverlay />}
        {
          visualType === "one-topic" ? (
          <PlotBarChartA
              update={plot}
              visualType={visualType}
              topic={topic}
              span={span}
              onRendered={() => setIsBarLoading(false)}
            layout={{ title: 'FIの分布', width: '100%', height: '80%' }}
            className="bg-light"
          />):(
          <PlotBarChartB
              update={plot}
              visualType={visualType}
              topic={topic}
              company={company}
              span={span}
              clickdata={clickData}
              onRendered={() => setIsBarLoading(false)}
            layout={{ title: 'FIの分布', width: '100%', height: '80%' }}
            className="bg-light"
          />)}
        </Col>
      </Row>
      <Row className="h-100">
      {cardData.map((item, index) => (
        <Col
          key={index}
          xs={12} // 各カードを1行に表示、レイアウトに応じて調整可能
          className="d-flex align-items-center justify-content-center"
          style={{ flex: "1 1 auto" }}
        >
          <Card className="w-75 h-75">
            <Card.Body className="d-flex flex-column align-items-center justify-content-center">
              <Card.Title className="text-secondary-emphasis">
                {item.label || item.direction.toUpperCase()}
              </Card.Title>
              <Card.Text className="text-secondary-emphasis">
                {item.values.join(", ")}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
  );
};

export default Content;

