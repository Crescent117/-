<br/>

# 맛집을 찾아서!(진행중)
<br/>


<br/>

# 프로젝트 소개
- 망고플레이트란 식당추천 서비스로 주변 맛집 정보 및 추천 맛집 리스트 등, 종합적인 맛집 발견 경험을 제공하는 사이트입니다.
- 이 프로젝트는 망고플레이트의 기능(맛집 리스트, 검색 필터링, 가고싶다, 리뷰, 평점 등)을 모티브한 프로젝트입니다.
- 짧은 프로젝트 기간동안 개발에 집중해야 하므로 디자인 및 기능의 기획 부분을 차용했습니다.
<br/>

## 개발 인원 및 기간
 - 2023-07-28 ~ 진행중
 - 1명
<br/>

## 프로젝트 선정이유
맛집 추천과 SNS 개념의 접목이 매력적이라고 생각했습니다.
<br/>
<br/>

## 담당페이지
 - 메인페이지, 검색리스트
<br/>

# 사용기술
### Front
 - Javascript
 - React.js
 - TypeScript
 - styled-components

### Backend
 - node.js
 - express

### Others
 - python
 - jupyter notebook
 - RestFul Api
 - dotenv

# 프로젝트 설명
진행중

# Python을 활용한 데이터 정제
망고플레이트를 직접 크롤링하고 싶었지만 '망고플레이트 비회원 이용자 이용정책'과 robots.txt를 참고하니 불가능하다고 생각했고,
그럼 어떻게 해야하나...라고 고민한 결과 지도api에서 맛집데이터를 가져온다는 발상이 떠올라 실천하게 됨.

본래는 NAVER MAP API를 사용할라고 했으나 한번에 뽑아오는 값이 적어서 Kakao MAP API로 뽑아오도록 변경.
그리고 BFS(깊이 우선 탐색) 백트래킹을 이용할려고 했으나 짧은 기간, 적은 인원 개발 + KaKao API 검색 횟수 초과로 인해 동마다 API로 검색되는 데이터만 입력.
(일반지도 크롤링으로 전체 긁어오면 경찰서 갈까봐 무서움.)
<details>
  <summary>서울 맛집 데이터를 뽑기 위한 동별 데이터 수집</summary>

 1. 서울 맛집 데이터를 뽑기 위한 동별 데이터 수집
    - https://data.seoul.go.kr/dataList/datasetList.do#
    - 서울의 동별 데이터를 뽑아옵니다.
    
 2. python을 이용해 csv파일을 정제하여 구,동 추출
    <details>
        <summary>csv에서 구,동 배열로 저장</summary>
    
        import pandas as pd
        import csv
    
        filename = "./Excel/서울 동별.csv"
    
        # encoding에 -sig 안붙이면 ['\ufeff종로구,사직동'] 이런 데이터 붙음
        # delimiter='\t' 로 csv에서 칸 나눠져 있는걸 , 를 삽입하여 합침
        with open(filename, 'r', encoding='utf-8-sig') as file:
           reader = csv.reader(file, delimiter='\t')
        
        # 결과를 저장할 빈 리스트
        result = []
    
        # 각 행을 순회하면서 결과 리스트에 추가
        # replce를 통해 ['종로구,사직동'] -> '종로구 사직동' 으로 변경 
        for row in reader:
            result.append(row[0].replace(',',' '))
    </details>

 3. KakaoAPI를 활용하여 동으로 맛집데이터 수집
    <details>
       <summary>카카오 Api를 이용한 크롤링 코드</summary>

        import requests
        import random
        import time
 
        # KakaoApi Restful key
        API_KEY = "c23fc9b6afc03775dad736a7d13280a3"
        
         # 요청 헤더
        headers = {
                "Authorization": f"KakaoAK {API_KEY}",
                "content-type": "application/json;charset=UTF-8"
            }
        
        # 결과값 담을 배열
        result_data = []
        
        
        # 전에 넣었던 구,동 데이터 만큼 반복문
        for region in result:
    
          # 동으로 검색
          query = f'{region} 맛집'
          page = 1  # 시작 페이지
          size = 15  # 페이지당 게시글 갯수
          is_end = False
          
          while not is_end:
  
            # API 요청
            response = requests.get("https://dapi.kakao.com/v2/local/search/keyword.json", headers=headers, params={"query": query, "page": page, "size": size})
            response_data = response.json()
            restaurants = response_data["documents"]
    
            
            is_end = response_data['meta']['is_end']
            
            print()
            print(is_end)
            print()
            
            if not restaurants and is_end:
                break
    
    
            # 결과 추가
            result_data.extend(restaurants)
    
            # 동작확인용 print 
            print("페이지 완료" + str(page))
            print(query)
            print()
            print(restaurants)
            
            #페이지 증가
            page += 1
            
            if response.status_code != 200:
                print(f"API 호출 실패: 상태 코드 {response.status_code}")
                continue
            
            # 너무 과도하게 수집을 안하기 위한 딜레이
            time.sleep(random.uniform(3,10))
    </details>
    
 4. 크롤링한 가게 정보를 타고 가게 상세정보 추출
     <details>
       <summary>가게 하나의 정보 크롤링</summary>
      
         import requests
         import json
         import time
        
         # 가게 낱개 정보 답을 값
         store_one = []
         
         count = 1
         
         # 전체 지도에서 뽑아온 id값 추출
         for result in result_data:
         
           #ajax 값을 받아오기 위한 필요 값
           timestamp = int(time.time() * 1000)
           
           # Ajax 데이터를 가져오기 위한 url 주소
           place_url = f"https://place.map.kakao.com/main/v/{result['id']}?_={timestamp}"
           
           headers = {
               'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36', 
           }
       
           response = requests.get(place_url, headers=headers)
           
           # 과도한 크롤링 방지
           time.sleep(random.uniform(2,10))
           
           if response.status_code == 200:
               json_data = response.json()
               store_one.append(json_data)
               
               print("성공" + str(count))
               count = count + 1
           else:
               print(f"Error occurred: {response.status_code}")
     </details>

5. 몽고 DB에 넣기 전 데이터 분류
        <details>
          <summary>분류 해야 할 데이터</summary>

               # [0] 이라고 적힌곳은 배열로 값 돌릴 곳 

               store_one[0]['basicInfo']['placenamefull'] # 가게이름
               store_one[0]['basicInfo']['mainphotourl'] # 메인 사진
               store_one[0]['basicInfo']['address']['region']['newaddrfullname']+' '+ store_one[0]['basicInfo']['address']['newaddr']['newaddrfull'] # 도로명
               store_one[0]['basicInfo']['address']['region']['fullname']+' '+store_one[0]['basicInfo']['address']['addrbunho'] # 지번
               
               store_one[0]['basicInfo']['phonenum'] # 전화번호
               store_one[0]['basicInfo']['category']['catename'] # 음식 종류
               
               # 영어이름
               store_one[0]['basicInfo']['englishname'] 
               
               # 지도 위치
               result_data[0]['x']
               result_data[0]['y']
               
               #메뉴
               store_one[0]['menuInfo']['menuList'][0]['price']
               store_one[0]['menuInfo']['menuList'][0]['menu']
               
               # 댓글
               store_one[0]['comment']['list'][0]['point'] #가격
               store_one[0]['comment']['list'][0]['contents'] 
               store_one[0]['comment']['list'][0]['username']
               store_one[0]['comment']['list'][0]['profile']
               store_one[0]['comment']['list'][0]['date']
               
               # 태그
               store_one[0]['findway']['subway'][0]['stationSimpleName'] # 지하철역
               store_one[0]['basicInfo']['category']['catename']
               store_one[0]['menuInfo']['menuList'][0]['menu']
               store_one[0]['basicInfo']['address']['region']['newaddrfullname'] # 구
               store_one[0]['basicInfo']['address']['region']['name3'] # 동
               store_one[0]['basicInfo']['address']['newaddr']['newaddrfull'] #지번
   </details>

   <details>
    
    데이터 분류 및 저장 과정에서 누락된 정보들이 많아, 그 처리로 인해 상당한 시간이 소요되었습니다. <br/>
    이와 같은 결측치 처리 경험을 통해, 더욱 완전한 데이터 구조를 구축할 수 있었습니다. <br/>
    그리고 중첩되는 부분중에서 코드가 좀 긴것들은 따로 클래스를 만들어 처리했습니다.<br/>
    ※ 이대로 진행했다가 몽고DB의 한글필드 인식 불가에 따라 새로운 방법으로 storeInfo를 키값으로 하는걸로 
   바꿨습니다.<br/>
    <summary>필요한 분류하는 코드</summary>
    
    <br/>
    중첩되는 코드  <br/>

         def menuListForm(store):
         menu_list = []
         if store.get('menuInfo', {}).get('menuList', None):
             for menu in store['menuInfo']['menuList']:
                 if 'price' in menu:
                     menu_item = {
                         'price': menu['price'],
                         'menu': menu['menu']
                     }
                     menu_list.append(menu_item)
                 else:
                     menu_item={}
                     menu_list.append(menu_item)
         return menu_list

   전체 분류 코드 <br/>

        storeInfo = []

        for store in store_one:
        if store['basicInfo'].get('englishname', None):
        
        storeName =  store['basicInfo']['englishname'].replace(" ", "_").lower()

        store_data = {
            'storeInfo': {
                'basicInfo': {},
                'menuInfo': {},
                'comment': {},
                'tag': {}
            }
        }

        basicInfo = store_data['storeInfo']['basicInfo']
        menuInfo = store_data['storeInfo']['menuInfo']
        comment = store_data['storeInfo']['comment']

        # basicInfo
        newaddrfullname = store['basicInfo']['address']['region']['newaddrfullname']
        newaddrfull = store['basicInfo']['newaddr']['newaddrfull'] if store['basicInfo'].get('newaddr', None) else  ""
        placenamefull =  store['basicInfo']['placenamefull']
        fullname = store['basicInfo']['address']['region']['fullname']
        addrbunho = store['basicInfo']['address'].get('addrbunho', '')

        basicInfo['placenamefull'] = f"{placenamefull}"
        basicInfo['address_road'] = f"{newaddrfullname} {newaddrfull}"
        basicInfo['address_jibun'] = f"{fullname} {addrbunho}"
        basicInfo['catename'] = store['basicInfo']['category']['catename']

        #가게 사진
        if basicInfo.get('mainphotourl',{}):
            basicInfo['mainphotourl'] = store['basicInfo']['mainphotourl']
        else:
            basicInfo['mainphotourl'] = 'https://www.fancylobby.co.kr:10481/mall/skin/bmit_skin/image/noimage3.gif'


        # 폰 번호
        if 'phonenum' in store['basicInfo']:
            basicInfo['phonenum'] = store['basicInfo']['phonenum']
        else:
            basicInfo['phonenum'] = ""

        # 영어 이름
        basicInfo['englishname'] = store['basicInfo']['englishname'].replace(" ", "_").lower() if store['basicInfo'].get('englishname', None) else ""

        # menuInfo
        menu_list = menuListForm(store)
        menuInfo['menuList'] = menu_list


        # comment
        comment_list = []
        if store.get('comment', {}).get('list', None):
            for comment_item in store['comment']['list']:
                single_comment = {
                    'point': comment_item['point'] if comment_item.get('point',None) else random.randint(3,5),
                    'contents': comment_item['contents'] if comment_item.get('contents',None) else '',
                    'username': comment_item['username'] if comment_item.get('username',None) else 'unknown',
                    'profile': comment_item.get('profile', 'empty'),
                    'date': comment_item['date']
                }
            comment_list.append(single_comment)

        comment['list'] = comment_list

        # tag (검색값)
        tag = []

        # 가게이름
        storename = {
            'storename' : placenamefull
        }
        tag.append(storename)

        # 지하철역
        subwayList=[]
        if store['findway'].get('subvway',{}):
            for subway  in store['findway']['subway']:
                subway_station = {
                    'subway' : subway['stationSimpleName']
                }
                subwayList.append(subway_station)
            tag.append(subway_station)

        # 카테고리
        category_name = {'category_name' : store['basicInfo']['category']['catename']}
        tag.append(category_name)

        # 구와 동
        new_addr_fullname = {'new_addr_fullname': store['basicInfo']['address']['region']['newaddrfullname']}
        name3 = {'name3': store['basicInfo']['address']['region']['name3']}
        tag.append(new_addr_fullname)
        tag.append(name3)

        # 지번 주
        new_addr_full = {'newaddrfull' : newaddrfull}
        tag.append(new_addr_full)

        # 메뉴 이름
        menu_name = {'menu_name':menuListForm(store)}
        tag.append(menu_name)


        store_data['storeInfo']['tag'] = tag

        storeInfo.append(store_data)

       

   </details><br/>
   
6. 몽고 DB에 넣기 <br/>
  
     <details>
      <summary>몽고 DB에 넣는 코드</summary>
       
    보안에 문제 될거 같은 부분은 텍스트 다른것으로 대체했습니다.
      
        from pymongo import MongoClient
        from bson.objectid import ObjectId
        
        # MongoDB 연결
        client = MongoClient("몽고DB 주소적는곳") 
        
        # Database와 collection 선택
        db = client[데이터베이스 이름]
        collection = db[데이터베이스 이름]
        
        # MongoDB 넣기
        document_id = "DB _id 적는 곳"
        update_result = collection.update_one(
            {"_id": ObjectId(document_id)},
            {"$set": {"store": storeInfo}}
        )

       #업데이트 정상적으로 됐는지 확인
       print(f"Modified count: {update_result.modified_count}")
     </details>
</details>

# Reference

이 프로젝트는 망고플레이트 사이트를 참조하여 학습목적으로 만들었습니다.
실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
