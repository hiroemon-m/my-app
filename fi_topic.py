import json
import numpy as np


#columnファイルの読み込み
columnpath = "public/data/param/patent/alpha/topic={}/column"

#probabilityファイルの読み込み
probabilitypath = "public/data/param/patent/alpha/topic={}/probability_optimize_{}.npy"

outpath = "public/data/param/patent/alpha/topic={}/output_{}.json"


topic_list = [2, 3, 1, 0, 9, 6, 8, 7, 11,5,10]


def tocompany(data_path) -> None:
    company_li = []

    with open(data_path, "r") as f:
        lines = f.readlines()      
        for index, line in enumerate(lines):
            load_datas = line[:-1]
            company_li.append(load_datas[:4])

    return company_li




for topic in topic_list:
    dic = {}

    column = columnpath.format(topic)
    column_li = tocompany(column)





    for time in range(10):
        probability = probabilitypath.format(topic,time)
        probability_li = np.load(probability).tolist()

        sum_li  = np.sum(np.load(probability),axis=0).tolist()
 
        dic_prob= {}
        cnt = 0


        for company_li in probability_li:
            dic[str(cnt)]={}


            for fi , column_name in zip(company_li,column_li):
                
                
                

                if column_name not in dic:
                    dic[str(cnt)][column_name]=fi
                else:
                    dic[str(cnt)][column_name]=dic[column_name]+fi
            
            cnt += 1
        #print(dic["0"])
        #print(dic["1"])
        #print(list(dic))

        for m in range(len(list(dic))):
            #mは企業のインデックス
            dic_prob[str(m)] ={}
            cnt = 0
            
            #cはcolumの文字列
 
            if sum_li[cnt] <=0:
                dic_prob[str(m)] = dic[str(m)]

            else:  
                for c in column_li : 
                    dic_prob[str(m)][c] = dic[str(m)][c]/sum_li[cnt]
            cnt+=1

        outpath = "public/data/param/patent/alpha/topic={}/trend/output_topic_{}.json"
        
        outpath = outpath.format(topic,time)

        # 列ごとの合計を計算
        sums = {}

        for key, row in dic_prob.items():
 
            for column, value in row.items():
                if column not in sums:
                    sums[column] = value
                else:
                    sums[column] += value
        # 合計値を計算
        total_sum = sum(sums.values())

        # 割合を計算
        ratios = {column: (value / total_sum)  for column, value in sums.items()}
        #print(outpath)
        #print(dic)
        print(ratios)
        with open(outpath, 'w') as f:
            json.dump(ratios,f)




    
    