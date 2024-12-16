// 名前、plot、visualType、topic に応じたデータを取得する関数
export const getCardData = async (plot, visualType, topic) => {
    try {
      // visualType が "one-topic" でない場合、何も返さない
      if (visualType !== "one-topic") {
        return [];
      }
  
      // データのパスを定義
      const dataPath = `/data/topic${topic}/persona=5/anywhere_5.json`;
      const columnPath = `/data/param/patent/alpha/topic=${topic}/column`;
  
      // JSONデータを fetch で同時に取得
      const [responseData, responseColumn] = await Promise.all([
        fetch(dataPath),
        fetch(columnPath),
      ]);
  
      // レスポンスのエラーチェック
      if (!responseData.ok || !responseColumn.ok) {
        throw new Error("データの取得に失敗しました");
      }
  
      // JSONデータをパース
      const jsonDATA = await responseData.json();
      const columnList = (await responseColumn.text()).split("\n").map(line => line.trim());
      console.log(columnList)
  
      // "株式会社熊谷組" のデータが存在するかチェック
      const companyData = jsonDATA["株式会社熊谷組"];
      if (!companyData || !companyData[topic]) {
        console.warn("指定したデータが存在しません: 株式会社熊谷組");
        return [];
      }
      
      console.log("YO",companyData[topic])
      // データを整形して返す
      return processData(companyData[topic], columnList);
    } catch (error) {
      console.error("データの読み込みに失敗しました:", error);
      return [];
    }
  };
  
  // データ整形関数: up, down, right, left を columnList の値で置き換えて返す
  const processData = (data, columnList) => {
    if (!data || !columnList) return [];
  
 const { up = [], down = [], right = [], left = [] } = data;
 // 配列の値を columnList のインデックスで置き換える
    const replaceValuesWithColumns = (values, columnList) =>
        values.map((index) => {
        console.log(index)
        console.log(columnList[698])
        const replacedValue = columnList[Number(index)];
        return replacedValue;
        });
  
     

  
    return [
      { direction: "UP", values: replaceValuesWithColumns(up,columnList) },
      { direction: "DOWN", values: replaceValuesWithColumns(down,columnList) },
      { direction: "RIGHT", values: replaceValuesWithColumns(right,columnList) },
      { direction: "LEFT", values: replaceValuesWithColumns(left,columnList) },
    ];
  };
  