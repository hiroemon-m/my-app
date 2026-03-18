import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './sidebar.jsx';
import Content from './content.jsx';

const App = () => {
  const arrowColor = [
    '#E24E42', '#E9B000', '#EB6E80', '#9B7EDE', '#63D2FF',
    '#3E9E6F', '#F38181', '#545E75', '#FFB627', '#577590',
  ];
  const companyList = [
    '鹿島建設株式会社', '株式会社大林組', '清水建設株式会社', '大成建設株式会社',
    '株式会社竹中工務店', '株式会社長谷工コーポレーション', '前田建設工業株式会社',
    '五洋建設株式会社', '株式会社フジタ', '戸田建設株式会社', '株式会社熊谷組',
  ];
  const topicList = ['0', '1', '2', '3', '5', '6', '7', '8', '9', '11'];

  const [visualType, setVisualType] = useState('one-topic');
  const [isApplied, setIsApplied] = useState(0);
  const [selectedCompanies, setSelectedCompanies] = useState(['株式会社熊谷組']);
  const [selectedTopics, setSelectedTopics] = useState(['0']);
  const [selectedSpan, setSelectedSpan] = useState('2');

  const handleVisualTypeChange = (value) => {
    setVisualType(value);
  };

  const handleApply = () => {
    setIsApplied(1);
  };

  const toggleSelection = (item, setSelected, buttomtype) => {
    if (buttomtype === 'checkbox') {
      setSelected((prevSelected) =>
        prevSelected.includes(item)
          ? prevSelected.filter((i) => i !== item)
          : [...prevSelected, item]
      );
    } else {
      setSelected([item]);
    }
  };

  const CompanyCheckboxChange = (company, buttomtype) => {
    toggleSelection(company, setSelectedCompanies, buttomtype);
  };

  const TopicCheckboxChange = (topic, buttomtype) => {
    toggleSelection(topic, setSelectedTopics, buttomtype);
  };

  const handleSpanChange = (value) => {
    setSelectedSpan(value);
  };

  useEffect(() => {
    setSelectedCompanies(['株式会社熊谷組']);
    setSelectedTopics(['0']);
  }, [visualType]);

  const resetIsApplied = () => {
    setIsApplied(0);
  };

  return (
    <Container id="react-content" fluid className="bg-light">
      <Row>
        {/* サイドバー */}
        <Col md={3} className="border-end">
          <Sidebar
            onApply={handleApply}
            visualType={visualType}
            onVisualTypeChange={handleVisualTypeChange}
            topicList={topicList}
            companyList={companyList}
            selectedCompanies={selectedCompanies}
            selectedTopics={selectedTopics}
            onChangeTopic={TopicCheckboxChange}
            onChangeCompany={CompanyCheckboxChange}
            selectedSpan={selectedSpan}
            onSpanChange={handleSpanChange}
          />
        </Col>

        {/* メインコンテンツ */}
        <Col md={9} className="border-end" style={{ height: '100vh' }}>
          <Content
            plot={isApplied}
            visualType={visualType}
            topic={selectedTopics}
            company={selectedCompanies}
            span={selectedSpan}
            topicList={topicList}
            resetApply={resetIsApplied}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
