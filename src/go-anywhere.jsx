// anywhere_5.json 形式:
// [{"company": "...", "color": "...", "novelty_up": [...], "novelty_down": [...], "adapt_up": [...], "adapt_down": [...]}]
// FIコードは文字列で直接格納されている（インデックスではない）
export const getCardData = async (plot, visualType, topic, company, span, clickedTopic) => {
  try {
    if (visualType !== "one-comp") return [];

    // one-comp: クリックされたトピック優先、なければ選択中トピック
    const targetTopic = visualType === "one-comp"
      ? (clickedTopic ? (Array.isArray(clickedTopic) ? clickedTopic[0] : clickedTopic) : (Array.isArray(topic) ? topic[0] : topic))
      : (Array.isArray(topic) ? topic[0] : topic);
    const spanId = span || "2";
    const targetCompany = Array.isArray(company) ? company[0] : (company || "株式会社熊谷組");

    const dataPath = `${process.env.PUBLIC_URL}/data/app_data/topic${targetTopic}/persona=5/span${spanId}/anywhere_5.json`;

    const response = await fetch(dataPath);
    if (!response.ok) throw new Error("データの取得に失敗しました");

    const jsonData = await response.json();
    if (!Array.isArray(jsonData)) return [];

    // 対象企業のデータを探す（見つからなければ最初の企業を使う）
    let companyEntry = jsonData.find(item => item.company === targetCompany);
    if (!companyEntry && jsonData.length > 0) {
      companyEntry = jsonData[0];
    }
    if (!companyEntry) return [];

    return [
      { direction: "novelty_up",   label: "新規性↑", values: companyEntry.novelty_up   || [] },
      { direction: "novelty_down", label: "新規性↓", values: companyEntry.novelty_down || [] },
      { direction: "adapt_up",     label: "順応性↑", values: companyEntry.adapt_up     || [] },
      { direction: "adapt_down",   label: "順応性↓", values: companyEntry.adapt_down   || [] },
    ];
  } catch (error) {
    console.error("データの読み込みに失敗しました:", error);
    return [];
  }
};
