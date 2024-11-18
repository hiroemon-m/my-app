import json
import torch

for data in ["occupy_topic_{}.pt"]:
    input_path = "experiment_data/patent/alpha/topic{}/persona=5/" + data
    output_path = "public/data/topic{}/persona=5/" + data
    topic_li = [2, 3, 1, 0, 9, 6, 8, 7, 11]

    for i in topic_li:
        for time in range(10):
            py_path = input_path.format(i, time)
            json_path = output_path.format(i, time)
            output_json = json_path.replace(".pt", ".json")

            # PyTorchのロード
            pydata = torch.load(py_path)

            # スパーステンソルのインデックスと値を取得
            indices = pydata.indices().tolist()  # [[row_indices], [col_indices]]
            values = pydata.values().tolist()

            # インデックスと値をJSON形式に変換
            coo_data = [
                {"row": indices[0][j], "col": indices[1][j], "value": values[j]}
                for j in range(len(values))
            ]

            # JSONファイルとして出力
            print("Saving to:", output_json)
            with open(output_json, 'w') as f:
                json.dump(coo_data, f, indent=4)
