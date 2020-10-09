const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

// Set some defaults (required if your JSON file is empty)
db.defaults({ users: [], messages: [] })
  .write()

 module.exports = db;
//  {
//   "users": [
//     {
//       "id": "1d4c4bf6-941f-4467-bfef-9767adb127a6",
//       "name": "Minnaminnie McMichan",
//       "password": "qXVCt5jcDlNR",
//       "infor": {
//         "img": "http://lorempixel.com/300/300/cats",
//         "intro": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at odio a quam tempus mollis eu vitae turpis. Aenean non velit et ipsum maximus imperdiet eu eu lacus. Curabitur maximus, leo quis luctus dapibus, orci dui interdum mauris, at posuere ante tortor vel neque. Integer et tristique neque, sit amet vulputate dolor. Nunc nec ullamcorper turpis. Curabitur quis purus ligula. Etiam congue, magna non tristique lacinia, sem odio gravida dolor, id tempus nisi metus"
//       },
//       "chatWith": [
//         "HcxqEWAIX",
//         "tVArIi2q-"
//       ]
//     },
//     {
//       "id": "62882879-ca69-4059-8fa7-5c07ae905b45",
//       "name": "Amata Monkhouse",
//       "password": "xySpWaEd",
//       "infor": {
//         "img": "http://lorempixel.com/300/300/cats",
//         "intro": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at odio a quam tempus mollis eu vitae turpis. Aenean non velit et ipsum maximus imperdiet eu eu lacus. Curabitur maximus, leo quis luctus dapibus, orci dui interdum mauris, at posuere ante tortor vel neque. Integer et tristique neque, sit amet vulputate dolor. Nunc nec ullamcorper turpis. Curabitur quis purus ligula. Etiam congue, magna non tristique lacinia, sem odio gravida dolor, id tempus nisi metus"
//       },
//       "chatWith": [
//         "M8oXnDnL1",
//         "v9NvscN_w"
//       ]
//     },
//     {
//       "id": "38f47f5a-3746-472b-9a0e-27909e83ae0e",
//       "name": "Ogdon Anyene",
//       "password": "GwFxHv",
//       "infor": {
//         "img": "http://lorempixel.com/300/300/cats",
//         "intro": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at odio a quam tempus mollis eu vitae turpis. Aenean non velit et ipsum maximus imperdiet eu eu lacus. Curabitur maximus, leo quis luctus dapibus, orci dui interdum mauris, at posuere ante tortor vel neque. Integer et tristique neque, sit amet vulputate dolor. Nunc nec ullamcorper turpis. Curabitur quis purus ligula. Etiam congue, magna non tristique lacinia, sem odio gravida dolor, id tempus nisi metus"
//       },
//       "chatWith": [
//         "Qm-pphElx",
//         "Hw9tZA11G",
//         "6McXd0jiA",
//         "GWIDdpTBy"
//       ]
//     },
//     {
//       "id": "b133f59d-ec6d-4f3c-aa13-453534a8c1ab",
//       "name": "Salaidh Cohalan",
//       "password": "WoXU1C",
//       "infor": {
//         "img": "http://lorempixel.com/300/300/cats",
//         "intro": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at odio a quam tempus mollis eu vitae turpis. Aenean non velit et ipsum maximus imperdiet eu eu lacus. Curabitur maximus, leo quis luctus dapibus, orci dui interdum mauris, at posuere ante tortor vel neque. Integer et tristique neque, sit amet vulputate dolor. Nunc nec ullamcorper turpis. Curabitur quis purus ligula. Etiam congue, magna non tristique lacinia, sem odio gravida dolor, id tempus nisi metus"
//       },
//       "chatWith": [
//         "zgWL5Js9H",
//         "OeGO92jY5",
//         "5SRshF6hy"
//       ]
//     },
//     {
//       "id": "2ecacd1e-7af5-4e77-a48c-b3d91e6707cd",
//       "name": "Fallon Pollicote",
//       "password": "tQpgRnJpVqg",
//       "infor": {
//         "img": "http://lorempixel.com/300/300/cats",
//         "intro": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at odio a quam tempus mollis eu vitae turpis. Aenean non velit et ipsum maximus imperdiet eu eu lacus. Curabitur maximus, leo quis luctus dapibus, orci dui interdum mauris, at posuere ante tortor vel neque. Integer et tristique neque, sit amet vulputate dolor. Nunc nec ullamcorper turpis. Curabitur quis purus ligula. Etiam congue, magna non tristique lacinia, sem odio gravida dolor, id tempus nisi metus"
//       },
//       "chatWith": [
//         "2zhRygGbQ"
//       ]
//     },
//     {
//       "id": "e333dee8-2266-490a-9df7-7df7c4441718",
//       "name": "Eben Voff",
//       "password": "Rjbr0J6",
//       "infor": {
//         "img": "http://lorempixel.com/300/300/cats",
//         "intro": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at odio a quam tempus mollis eu vitae turpis. Aenean non velit et ipsum maximus imperdiet eu eu lacus. Curabitur maximus, leo quis luctus dapibus, orci dui interdum mauris, at posuere ante tortor vel neque. Integer et tristique neque, sit amet vulputate dolor. Nunc nec ullamcorper turpis. Curabitur quis purus ligula. Etiam congue, magna non tristique lacinia, sem odio gravida dolor, id tempus nisi metus"
//       },
//       "chatWith": []
//     },
//     {
//       "id": "5624553d-9586-464e-881a-cf72a385418f",
//       "name": "Vinson Berceros",
//       "password": "vmBh4IdqS",
//       "infor": {
//         "img": "http://lorempixel.com/300/300/cats",
//         "intro": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at odio a quam tempus mollis eu vitae turpis. Aenean non velit et ipsum maximus imperdiet eu eu lacus. Curabitur maximus, leo quis luctus dapibus, orci dui interdum mauris, at posuere ante tortor vel neque. Integer et tristique neque, sit amet vulputate dolor. Nunc nec ullamcorper turpis. Curabitur quis purus ligula. Etiam congue, magna non tristique lacinia, sem odio gravida dolor, id tempus nisi metus"
//       },
//       "chatWith": []
//     },
//     {
//       "id": "bdf08b4a-1e00-45fb-988e-7ff2a9f707db",
//       "name": "Fawn Meininger",
//       "password": "tcHQS43tu",
//       "infor": {
//         "img": "http://lorempixel.com/300/300/cats",
//         "intro": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at odio a quam tempus mollis eu vitae turpis. Aenean non velit et ipsum maximus imperdiet eu eu lacus. Curabitur maximus, leo quis luctus dapibus, orci dui interdum mauris, at posuere ante tortor vel neque. Integer et tristique neque, sit amet vulputate dolor. Nunc nec ullamcorper turpis. Curabitur quis purus ligula. Etiam congue, magna non tristique lacinia, sem odio gravida dolor, id tempus nisi metus"
//       },
//       "chatWith": []
//     },
//     {
//       "id": "adcefda1-8c38-44b5-b425-0d2ba0170f74",
//       "name": "karobro",
//       "password": "123",
//       "infor": {
//         "img": "http://lorempixel.com/300/300/cats",
//         "intro": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at odio a quam tempus mollis eu vitae turpis. Aenean non velit et ipsum maximus imperdiet eu eu lacus. Curabitur maximus, leo quis luctus dapibus, orci dui interdum mauris, at posuere ante tortor vel neque. Integer et tristique neque, sit amet vulputate dolor. Nunc nec ullamcorper turpis. Curabitur quis purus ligula. Etiam congue, magna non tristique lacinia, sem odio gravida dolor, id tempus nisi metus"
//       },
//       "chatWith": [
//         "76JaqrPrh",
//         "M8oXnDnL1",
//         "Qm-pphElx",
//         "zgWL5Js9H"
//       ]
//     },
//     {
//       "id": "WxjYm3Pk1",
//       "name": "askdakjskdaksd",
//       "password": "ksdakjdajksda",
//       "infor": {
//         "img": "",
//         "intro": ""
//       },
//       "chatWith": [
//         "6McXd0jiA",
//         "HcxqEWAIX",
//         "OeGO92jY5"
//       ]
//     },
//     {
//       "id": "rO4WAi1u8",
//       "name": "vietanh",
//       "password": "vietanh",
//       "infor": {
//         "img": "",
//         "intro": ""
//       },
//       "chatWith": []
//     },
//     {
//       "id": "Oj7DHQeGX",
//       "name": "vietanh123",
//       "password": "0a2c7a10b6f1a10ac9e8d1bf5f24be83",
//       "infor": {
//         "img": "",
//         "intro": ""
//       },
//       "chatWith": []
//     },
//     {
//       "id": "WaHMlfOGO",
//       "name": "vietanhh",
//       "password": "fcea920f7412b5da7be0cf42b8c93759",
//       "infor": {
//         "img": "",
//         "intro": ""
//       },
//       "chatWith": [
//         "z169tFEEi"
//       ]
//     },
//     {
//       "id": "d46FesvXO",
//       "name": "vietanh11",
//       "password": "fcea920f7412b5da7be0cf42b8c93759",
//       "infor": {
//         "img": "",
//         "intro": ""
//       },
//       "chatWith": [
//         "GWIDdpTBy",
//         "JyYzBs2xO"
//       ]
//     },
//     {
//       "id": "a6069f15-4ad0-4628-99ff-fd399706fd24",
//       "name": "karoe",
//       "password": "e10adc3949ba59abbe56e057f20f883e",
//       "infor": {
//         "img": "http://lorempixel.com/300/300/cats",
//         "intro": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at odio a quam tempus mollis eu vitae turpis. Aenean non velit et ipsum maximus imperdiet eu eu lacus. Curabitur maximus, leo quis luctus dapibus, orci dui interdum mauris, at posuere ante tortor vel neque. Integer et tristique neque, sit amet vulputate dolor. Nunc nec ullamcorper turpis. Curabitur quis purus ligula. Etiam congue, magna non tristique lacinia, sem odio gravida dolor, id tempus nisi metus"
//       },
//       "chatWith": [
//         "76JaqrPrh",
//         "Hw9tZA11G",
//         "v9NvscN_w",
//         "5SRshF6hy",
//         "tVArIi2q-",
//         "z169tFEEi",
//         "2zhRygGbQ"
//       ]
//     }
//   ],
//   "messages": [
//     {
//       "id": "M8oXnDnL1",
//       "people": [
//         "adcefda1-8c38-44b5-b425-0d2ba0170f74",
//         "62882879-ca69-4059-8fa7-5c07ae905b45"
//       ],
//       "lastDate": 1600389325363,
//       "conv": [],
//       "otherPeople": [
//         "Amata Monkhouse"
//       ],
//       "lastTime": "8:35"
//     },
//     {
//       "id": "Qm-pphElx",
//       "people": [
//         "adcefda1-8c38-44b5-b425-0d2ba0170f74",
//         "38f47f5a-3746-472b-9a0e-27909e83ae0e"
//       ],
//       "lastDate": 1600389390987,
//       "conv": [],
//       "otherPeople": [
//         "Ogdon Anyene"
//       ],
//       "lastTime": "8:36"
//     },
//     {
//       "id": "zgWL5Js9H",
//       "people": [
//         "adcefda1-8c38-44b5-b425-0d2ba0170f74",
//         "b133f59d-ec6d-4f3c-aa13-453534a8c1ab"
//       ],
//       "lastDate": 1600389319878,
//       "conv": [],
//       "otherPeople": [
//         "Salaidh Cohalan"
//       ],
//       "lastTime": "8:35"
//     },
//     {
//       "id": "6McXd0jiA",
//       "people": [
//         "WxjYm3Pk1",
//         "38f47f5a-3746-472b-9a0e-27909e83ae0e"
//       ],
//       "lastDate": 1600387179433,
//       "conv": [],
//       "otherPeople": [
//         "Ogdon Anyene"
//       ],
//       "lastTime": "6:59"
//     },
//     {
//       "id": "HcxqEWAIX",
//       "people": [
//         "WxjYm3Pk1",
//         "1d4c4bf6-941f-4467-bfef-9767adb127a6"
//       ],
//       "lastDate": 1600387181963,
//       "conv": [],
//       "otherPeople": [
//         "Minnaminnie McMichan"
//       ],
//       "lastTime": "6:59"
//     },
//     {
//       "id": "OeGO92jY5",
//       "people": [
//         "WxjYm3Pk1",
//         "b133f59d-ec6d-4f3c-aa13-453534a8c1ab"
//       ],
//       "lastDate": 1600387276094,
//       "conv": [],
//       "otherPeople": [
//         "Salaidh Cohalan"
//       ],
//       "lastTime": "7:01"
//     },
//     {
//       "id": "Hw9tZA11G",
//       "people": [
//         "a6069f15-4ad0-4628-99ff-fd399706fd24",
//         "38f47f5a-3746-472b-9a0e-27909e83ae0e"
//       ],
//       "lastDate": 1600674414403,
//       "conv": [
//         {
//           "time": 1600657566951,
//           "message": "jsadkasds",
//           "idSender": "a6069f15-4ad0-4628-99ff-fd399706fd24"
//         }
//       ],
//       "otherPeople": [
//         "Ogdon Anyene"
//       ],
//       "lastTime": "15:46"
//     },
//     {
//       "id": "v9NvscN_w",
//       "people": [
//         "a6069f15-4ad0-4628-99ff-fd399706fd24",
//         "62882879-ca69-4059-8fa7-5c07ae905b45"
//       ],
//       "lastDate": 1600673463952,
//       "conv": [
//         {
//           "time": 1600657038506,
//           "message": "kajsdas",
//           "idSender": "a6069f15-4ad0-4628-99ff-fd399706fd24"
//         },
//         {
//           "time": 1600657065897,
//           "message": "kajskdjadasd",
//           "idSender": "a6069f15-4ad0-4628-99ff-fd399706fd24"
//         },
//         {
//           "time": 1600668690094,
//           "message": "ádadasd",
//           "idSender": "a6069f15-4ad0-4628-99ff-fd399706fd24"
//         }
//       ],
//       "otherPeople": [
//         "Amata Monkhouse"
//       ],
//       "lastTime": "15:31"
//     },
//     {
//       "id": "GWIDdpTBy",
//       "people": [
//         "d46FesvXO",
//         "38f47f5a-3746-472b-9a0e-27909e83ae0e"
//       ],
//       "lastDate": 1600671085057,
//       "conv": [
//         {
//           "time": 1600671088099,
//           "message": "ạdkasjdas",
//           "idSender": "d46FesvXO"
//         },
//         {
//           "time": 1600671143557,
//           "message": "đâsdasdasd",
//           "idSender": "d46FesvXO"
//         }
//       ],
//       "otherPeople": [
//         "Ogdon Anyene"
//       ],
//       "lastTime": "14:51"
//     },
//     {
//       "id": "5SRshF6hy",
//       "people": [
//         "a6069f15-4ad0-4628-99ff-fd399706fd24",
//         "b133f59d-ec6d-4f3c-aa13-453534a8c1ab"
//       ],
//       "lastDate": 1600671649216,
//       "conv": [
//         {
//           "time": 1600671651995,
//           "message": "adadasda",
//           "idSender": "a6069f15-4ad0-4628-99ff-fd399706fd24"
//         },
//         {
//           "time": 1600673039869,
//           "message": "asjhdajhsdasd",
//           "idSender": "a6069f15-4ad0-4628-99ff-fd399706fd24"
//         },
//         {
//           "time": 1600673150888,
//           "message": "asdasdasd",
//           "idSender": "a6069f15-4ad0-4628-99ff-fd399706fd24"
//         },
//         {
//           "time": 1600673157766,
//           "message": "asdasdasasd",
//           "idSender": "a6069f15-4ad0-4628-99ff-fd399706fd24"
//         },
//         {
//           "time": 1600673201138,
//           "message": "ajsdasd",
//           "idSender": "a6069f15-4ad0-4628-99ff-fd399706fd24"
//         },
//         {
//           "time": 1600673207201,
//           "message": "d",
//           "idSender": "a6069f15-4ad0-4628-99ff-fd399706fd24"
//         },
//         {
//           "time": 1600673209091,
//           "message": "d",
//           "idSender": "a6069f15-4ad0-4628-99ff-fd399706fd24"
//         },
//         {
//           "time": 1600673261556,
//           "message": "asdasd",
//           "idSender": "a6069f15-4ad0-4628-99ff-fd399706fd24"
//         },
//         {
//           "time": 1600673267123,
//           "message": "asdasd",
//           "idSender": "a6069f15-4ad0-4628-99ff-fd399706fd24"
//         },
//         {
//           "time": 1600673274451,
//           "message": "asdaascaaddde",
//           "idSender": "a6069f15-4ad0-4628-99ff-fd399706fd24"
//         },
//         {
//           "time": 1600673276734,
//           "message": "fefsefse",
//           "idSender": "a6069f15-4ad0-4628-99ff-fd399706fd24"
//         },
//         {
//           "time": 1600673435965,
//           "message": "asdasdakjsa",
//           "idSender": "a6069f15-4ad0-4628-99ff-fd399706fd24"
//         }
//       ],
//       "otherPeople": [
//         "Salaidh Cohalan"
//       ],
//       "lastTime": "15:00"
//     },
//     {
//       "id": "76JaqrPrh",
//       "people": [
//         "a6069f15-4ad0-4628-99ff-fd399706fd24",
//         "adcefda1-8c38-44b5-b425-0d2ba0170f74"
//       ],
//       "lastDate": 1600673440911,
//       "conv": [
//         {
//           "time": 1600657397678,
//           "message": "ákdajsdasda",
//           "idSender": "a6069f15-4ad0-4628-99ff-fd399706fd24"
//         },
//         {
//           "time": 1600657403253,
//           "message": "ádjkasda",
//           "idSender": "a6069f15-4ad0-4628-99ff-fd399706fd24"
//         },
//         {
//           "time": 1600657541696,
//           "message": "aksdasda",
//           "idSender": "adcefda1-8c38-44b5-b425-0d2ba0170f74"
//         },
//         {
//           "time": 1600657545307,
//           "message": "hello",
//           "idSender": "adcefda1-8c38-44b5-b425-0d2ba0170f74"
//         },
//         {
//           "time": 1600657550213,
//           "message": "?????",
//           "idSender": "adcefda1-8c38-44b5-b425-0d2ba0170f74"
//         },
//         {
//           "time": 1600669304379,
//           "message": "adadas",
//           "idSender": "a6069f15-4ad0-4628-99ff-fd399706fd24"
//         },
//         {
//           "time": 1600670554441,
//           "message": "adassd",
//           "idSender": "a6069f15-4ad0-4628-99ff-fd399706fd24"
//         },
//         {
//           "time": 1600673444955,
//           "message": "ads",
//           "idSender": "a6069f15-4ad0-4628-99ff-fd399706fd24"
//         },
//         {
//           "time": 1600673445574,
//           "message": "s",
//           "idSender": "a6069f15-4ad0-4628-99ff-fd399706fd24"
//         },
//         {
//           "time": 1600673445854,
//           "message": "s",
//           "idSender": "a6069f15-4ad0-4628-99ff-fd399706fd24"
//         },
//         {
//           "time": 1600673446187,
//           "message": "s",
//           "idSender": "a6069f15-4ad0-4628-99ff-fd399706fd24"
//         },
//         {
//           "time": 1600673446451,
//           "message": "s",
//           "idSender": "a6069f15-4ad0-4628-99ff-fd399706fd24"
//         },
//         {
//           "time": 1600673446735,
//           "message": "s",
//           "idSender": "a6069f15-4ad0-4628-99ff-fd399706fd24"
//         },
//         {
//           "time": 1600673447060,
//           "message": "s",
//           "idSender": "a6069f15-4ad0-4628-99ff-fd399706fd24"
//         },
//         {
//           "time": 1600673447464,
//           "message": "s",
//           "idSender": "a6069f15-4ad0-4628-99ff-fd399706fd24"
//         }
//       ],
//       "otherPeople": [
//         "karobro"
//       ],
//       "lastTime": "15:30"
//     },
//     {
//       "id": "z169tFEEi",
//       "people": [
//         "a6069f15-4ad0-4628-99ff-fd399706fd24",
//         "WaHMlfOGO"
//       ],
//       "lastDate": 1600674408857,
//       "conv": [],
//       "otherPeople": [
//         "vietanhh"
//       ],
//       "lastTime": "15:46"
//     },
//     {
//       "id": "2zhRygGbQ",
//       "people": [
//         "a6069f15-4ad0-4628-99ff-fd399706fd24",
//         "2ecacd1e-7af5-4e77-a48c-b3d91e6707cd"
//       ],
//       "lastDate": 1600674437051,
//       "conv": [],
//       "otherPeople": [
//         "Fallon Pollicote"
//       ],
//       "lastTime": "15:47"
//     },
//     {
//       "id": "tVArIi2q-",
//       "people": [
//         "a6069f15-4ad0-4628-99ff-fd399706fd24",
//         "1d4c4bf6-941f-4467-bfef-9767adb127a6"
//       ],
//       "lastDate": 1600674437445,
//       "conv": [
//         {
//           "time": 1600674441203,
//           "message": "adadas",
//           "idSender": "a6069f15-4ad0-4628-99ff-fd399706fd24"
//         }
//       ],
//       "otherPeople": [
//         "Minnaminnie McMichan"
//       ],
//       "lastTime": "15:47"
//     }
//   ]
// }