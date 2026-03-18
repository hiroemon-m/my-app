// Sidebar.jsx
import React ,{ useState} from 'react';
import { Accordion, Button, Col, Row } from 'react-bootstrap';

const Sidebar = ({ onApply, visualType, onVisualTypeChange, topicList, companyList, selectedCompanies, selectedTopics, onChangeTopic, onChangeCompany, selectedSpan, onSpanChange }) => {
  const [inputType, setInputType] = useState(["radio","checkbox"]);
  const [companyFilter, setCompanyFilter] = useState("");
  const handleRadioChange = (event) => {
    onVisualTypeChange(event.target.value);
      if (event.target.value=="one-comp"){
        setInputType(["checkbox","radio"])}
      else{
        setInputType(["radio","checkbox"])
        }

    console.log(event.target.value);
    console.log(inputType);
  };

  const IdtoTopic = {"2":"コンクリート構造","3":"地盤改良","1":"トンネル掘削",
    "0":"免震構造","9":"管理システム","6":"廃棄物処理","8":"建築パネル",
    "7":"空調システム","11":"掘削装置","10":"建築設計","5":"トンネル測量"};
  

  

  return (
    <div style={{ height: '100vh', padding: '10px', backgroundColor: 'bg-light' }}>
      {/* Header */}
      <Row className="bg-light text-danger font-italic" style={{ height: '5%' }}>
        <Col sm={6}>
          <h5 style={{ marginTop: '10%' }} className="text-secondary-emphasis">
            可視化条件
          </h5>
        </Col>
        <Col sm={4}>
          <Button
            id="apply"
            onClick={onApply}
            style={{ marginTop: '15%' }}
            className="badge rounded-pill bg-dark"
          >
            可視化
          </Button>
        </Col>
      </Row>

      {/* 時間幅選択ボタン */}
      <Row className="bg-light my-2 px-2">
        <Col xs={12}>
          <div className="d-flex align-items-center gap-2">
            <span className="text-secondary-emphasis" style={{ fontSize: '13px', whiteSpace: 'nowrap' }}>
              時間を選択
            </span>
            <div className="btn-group" role="group">
              {[{value:'1', label:'1年'}, {value:'2', label:'2年'}, {value:'3', label:'3年'}].map(({value, label}) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => onSpanChange(value)}
                  className={`btn btn-sm ${selectedSpan === value ? 'btn-dark' : 'btn-outline-secondary'}`}
                  style={{ fontSize: '13px', padding: '2px 10px' }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </Col>
      </Row>

      {/* Accordion */}
      <Row className="bg-light text-danger " style={{ height: '80%' }}>
        <Accordion defaultActiveKey="0" className="my-3">
          {/* Visualization Type */}
          <Accordion.Item eventKey="0" className="white">
            <Accordion.Header>可視化タイプ</Accordion.Header>
            <Accordion.Body>
              <div className="row">
                <div className="col-6 d-flex align-items-center">
                  <input
                    type="radio"
                    id = "one-comp"
                    name="visual_type"
                    value="one-comp"
                    className="form-check-input"
                    onChange={handleRadioChange}
                    checked={visualType === "one-comp"} // デフォルトチェック
                  />
                  <label 
                  htmlFor="one-comp"
                  className="form-check-label mx-2"
                  style={{ fontSize: "14px" }}
                  >1社に注目</label>
                </div>
                <div className="col-6 d-flex align-items-center">
                  <input
                    type="radio"
                    id="one-topic"
                    name="visual_type"
                    value="one-topic"
                    className="form-check-input"
                    onChange={handleRadioChange}
                    checked={visualType === "one-topic"} // デフォルトチェック
                  />
                  <label 
                  htmlFor="one-topic"
                  className="form-check-label mx-2"
                  style={{ fontSize: "14px" }}
                  >1トピックに注目</label>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          {/* Topic Selection */}
          <Accordion.Item eventKey="1" className="white">
            <Accordion.Header>Topic</Accordion.Header>
            <Accordion.Body>
              {topicList.map((topic) => (
                <div key={topic}>
                  <input
                    type={inputType[0]} 
                    id = {topic}
                    checked={selectedTopics.includes(topic)}
                    onChange={() => onChangeTopic(topic,inputType[0])}
                    name="topic"
                  />
                  <label htmlFor={topic}>{IdtoTopic[topic]}</label>
                </div>
              ))}
            </Accordion.Body>
          </Accordion.Item>

          {/* Company Selection */}
          <Accordion.Item eventKey="2" className="white">
            <Accordion.Header>Company</Accordion.Header>
            <Accordion.Body>
              <input
                type="text"
                placeholder="企業名で絞り込み..."
                value={companyFilter}
                onChange={(e) => setCompanyFilter(e.target.value)}
                className="form-control form-control-sm mb-2"
                style={{ fontSize: '13px' }}
              />
              {companyList
                .filter(company => company.includes(companyFilter))
                .map((company) => (
                <div key={company}>
                  <input
                    type={inputType[1]}
                    id={company}
                    checked={selectedCompanies.includes(company)}
                    onChange={() => onChangeCompany(company, inputType[1])}
                    name='company'
                  />
                  <label htmlFor={company}>{company}</label>
                </div>
              ))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>
    </div>
  );
};

export default Sidebar;
