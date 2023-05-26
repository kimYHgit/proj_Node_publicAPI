# proj_Node_publicAPI
공공API를 활용한 간단한 API서버를 구축함.



# 주제
지하철 도착 정보 API: 대중 교통 관련 API를 활용하여 특정 정류장의 지하철 도착 정보를 조회하는 API 서버.
사용자가 정류장 이름을 입력하면 해당 정류장의 지하철 도착 예정 정보(열차번호,호선,예정시간,방향,위치)를 반환하는 API를 개발하였습니다.



# ERD 
- 로그인을 해야 해당 정류장에 도착하는 지하철 정보를 조회 할수 있도록 함.


# 사용
"Postman"을 이용해 url post 요청을 보내면 아래와 같은 결과가 출력됩니다.

## 강남역 예시
![스크린샷(65)](https://github.com/kimYHgit/proj_Node_publicAPI/assets/130536070/18248087-7703-48a7-8278-793452ef1bc7)

![스크린샷(66)](https://github.com/kimYHgit/proj_Node_publicAPI/assets/130536070/113f1eb7-2d2f-42e6-b0ba-667a1b499df3)



## 잠실역 예시
![스크린샷(69)](https://github.com/kimYHgit/proj_Node_publicAPI/assets/130536070/e6ca58c1-8c25-424c-9843-8b32470fe40c)


![스크린샷(70)](https://github.com/kimYHgit/proj_Node_publicAPI/assets/130536070/470dad15-02ef-4a65-8552-11689e271830)


## 출력코드 설명
- **statnNm**	  지하철역명
- **recptnDt**	열차도착정보를 생성한 시각
- **subwayId**	지하철호선ID 		(1001:1호선, 1002:2호선, 1003:3호선, 1004:4호선, 1005:5호선 1006:6호선, 1007:7호선, 1008:8호선, 1009:9호선, 1061:중앙선1063:경의중앙선,                               1065:공항철도, 1067:경춘선, 1075:수의분당선 1077:신분당선, 1092:우이신설선)
- **btrainNo**	  열차번호 			(현재운행하고 있는 호선별 열차번호)
- **trainLineNm**	 도착지방면  	(성수행(목적지역) - 구로디지털단지방면(다음역))
- **arvlMsg2**	  첫번째도착메세지  		(도착, 출발 , 진입 등)
- **arvlMsg3**	  두번째도착메세지		(종합운동장 도착, 12분 후 (광명사거리) 등)
- **arvlCd**	    도착코드			(0:진입, 1:도착, 2:출발, 3:전역출발, 4:전역진입, 5:전역도착, 99:운행중)




# 참고 API 사이트
http://data.seoul.go.kr/dataList/OA-12764/A/1/datasetView.do




![다운로드](https://github.com/kimYHgit/proj_Node_publicAPI/assets/130536070/c6c7a2e3-c2d4-46d1-b3ca-5ca5cc91eae8)


