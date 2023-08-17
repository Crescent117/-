"use strict";
// import React from "react";
// import axios from "axios";
// interface FetchDataProps {
//   method: string;
//   url: string;
//   params?: object;
// }
// const FetchData = ({ method, url, params }: FetchDataProps) => {
//   return new Promise((resolve, reject) => {
//     axios({
//       method: method,
//       url: url,
//       params: params,
//     })
//       .then((response) => {
//         if (response.status !== 200) {
//           response.data.then((errorData:any) => {
//             const statusCode = response.status;
//             const statusText = response.statusText;
//             const message = errorData.message[0];
//             console.log(`${statusCode} - ${statusText} - ${message}`);
//           });
//         } else {
//           response.data.then((data:any) => {
//             resolve(data.json()); // 성공한 경우 데이터 전달
//           });
//         }
//       })
//       .catch((error) => {
//         reject(error); // 에러 처리
//       });
//   });
// };
// export default FetchData;
//# sourceMappingURL=fetchData.js.map