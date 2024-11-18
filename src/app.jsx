import React, { useState,useEffect }from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DashboardNavbar from './navbar.jsx';
import Sidebar from './sidebar.jsx';
import Content from './content.jsx';

const App = () => {
  
  // カラーとフォーカス企業リスト
  const arrowColor = [
    '#E24E42', '#E9B000', '#EB6E80', '#9B7EDE', '#63D2FF', 
    '#3E9E6F', '#F38181', '#545E75', '#FFB627', '#577590'
  ];
  const companyList = [
    '鹿島建設株式会社', "株式会社大林組", "清水建設株式会社", "大成建設株式会社", 
    "株式会社竹中工務店", "株式会社長谷工コーポレーション", "前田建設工業株式会社", 
    "五洋建設株式会社", "株式会社フジタ", "戸田建設株式会社", "株式会社熊谷組"
  ];
  const topicList = ["0","1","2","3","5","6","7","8","9","10","11"]

  const [visualType, setVisualType] = useState("one-topic"); // 初期値を設定

  // Sidebarからラジオボタンの値を受け取るコールバック関数
  const handleVisualTypeChange = (value) => {
    setVisualType(value);
  };


  const [isApplied, setIsApplied] = useState(0);

  // コールバック関数として渡す関数
  const handleApply = () => {
    setIsApplied(1);  // 状態を更新
    
  };

  // selectedCompaniesを配列の状態として管理
  const [selectedCompanies, setSelectedCompanies] = useState(["株式会社熊谷組"]);
  const [selectedTopics, setSelectedTopics] = useState(["0"]);

  // 共通の関数を作成
  const toggleSelection = (item, setSelected,buttomtype) => {
    console.log("BB",buttomtype);
    if(buttomtype=="checkbox"){

      setSelected((prevSelected) => {
        if (prevSelected.includes(item)) {
          // 既に選択されている場合は削除
          return prevSelected.filter((i) => i !== item);
        } 
        else {
          // 選択されていない場合は追加
          return [...prevSelected, item];
        }
      });

    }
    else{
      setSelected([item])
      };

    };

    
    // チェックボックス変更時の関数
    const CompanyCheckboxChange = (company,buttomtype) => {
      
      toggleSelection(company, setSelectedCompanies,buttomtype);
      console.log("company",buttomtype);
  
    };

    const TopicCheckboxChange = (topic,buttomtype) => {
        
      toggleSelection(topic, setSelectedTopics,buttomtype);
      console.log("topic",buttomtype);

    };
    useEffect(() => {
      console.log("somePropの値が変わりました:", visualType);
      setSelectedCompanies(["株式会社熊谷組"]);
      setSelectedTopics(["0"]);

    }, [visualType]); // somePropが変更されたときだけ実行


    const resetIsApplied = () => {
      setIsApplied(0);
    };



  return (
    <Container fluid className="bg-light">
      <Row>
        {/* サイドバー */}
        <Col md={2} className="border-end">
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
          />
        </Col>
        
        {/* ナビゲーションバーとメインコンテンツ */}
        <Col md={10} className="border-end">
          
          <Content 
          plot={isApplied} 
          visualType={visualType} 
          topic={selectedTopics} 
          company={selectedCompanies}
          resetApply={() => setIsApplied(0)} 
          />
          <p>
                plot:{isApplied}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
