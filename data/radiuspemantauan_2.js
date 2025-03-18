var suhu_dht22_titik1 = "";
var suhu_dht22_titik2 = "";
var suhu_dht22_titik3 = "";
var suhu_dht22_titik4 = "";
var suhu_dht22_titik5 = "";
var suhu_dht22_titik6 = "";


var kelembaban_dht22_titik1 = "...";
var kelembaban_dht22_titik2 = "...";
var kelembaban_dht22_titik3 = "...";
var kelembaban_dht22_titik4 = "...";
var kelembaban_dht22_titik5 = "...";
var kelembaban_dht22_titik6 = "...";

function fetchData() {
  var apiUrl =
    "https://api.thingspeak.com/channels/2792836/feeds/last.json?timezone=Asia%2FJakarta&api_key=O2YBDNQYQ1FJL07O";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log("Response JSON:", data);

      suhu_dht22_titik1 = parseFloat(data.field4).toFixed(2);
      kelembaban_dht22_titik1 = parseFloat(data.field3).toFixed(2);

    })
    .catch((error) => console.error("Error fetching data:", error));

    var apiUrl2 =
    "https://api.thingspeak.com/channels/2792838/feeds/last.json?timezone=Asia%2FJakarta&api_key=I8US6NBFAVHACGT9";

  fetch(apiUrl2)
    .then((response) => response.json())
    .then((data) => {
      console.log("Response JSON:", data);

      suhu_dht22_titik2 = parseFloat(data.field4).toFixed(2);
      kelembaban_dht22_titik2 = parseFloat(data.field3).toFixed(2);

    })
    .catch((error) => console.error("Error fetching data:", error));

  var apiUrl3 =
    "https://api.thingspeak.com/channels/2792840/feeds/last.json?timezone=Asia%2FJakarta&api_key=CYFYJB9P3UAR3QL3";

  fetch(apiUrl3)
    .then((response2) => response2.json())
    .then((data3) => {
      console.log("Response JSON:", data3);

      suhu_dht22_titik3 = parseFloat(data3.field4).toFixed(2);
      kelembaban_dht22_titik3 = parseFloat(data3.field3).toFixed(2);
    })
    .catch((error) => console.error("Error fetching data:", error));

    var apiUrl4 =
    "https://api.thingspeak.com/channels/2792843/feeds/last.json?timezone=Asia%2FJakarta&api_key=GGI0B5AG73Z18W2R";

  fetch(apiUrl4)
    .then((response2) => response2.json())
    .then((data4) => {
      console.log("Response JSON:", data4);

      suhu_dht22_titik4 = parseFloat(data4.field4).toFixed(2);
      kelembaban_dht22_titik4 = parseFloat(data4.field3).toFixed(2);
    })
    .catch((error) => console.error("Error fetching data:", error));

    var apiUrl5 =
    "https://api.thingspeak.com/channels/2792844/feeds/last.json?timezone=Asia%2FJakarta&api_key=JUX3KLD9N1ZD41NP";

  fetch(apiUrl5)
    .then((response2) => response2.json())
    .then((data5) => {
      console.log("Response JSON:", data5);

      suhu_dht22_titik5 = parseFloat(data5.field4).toFixed(2);
      kelembaban_dht22_titik5 = parseFloat(data5.field3).toFixed(2);
    })
    .catch((error) => console.error("Error fetching data:", error));

    var apiUrl6 =
    "https://api.thingspeak.com/channels/2792845/feeds/last.json?timezone=Asia%2FJakarta&api_key=4BSOB21PFTMK2WAJ";

  fetch(apiUrl6)
    .then((response2) => response2.json())
    .then((data6) => {
      console.log("Response JSON:", data6);

      suhu_dht22_titik6 = parseFloat(data6.field4).toFixed(2);
      kelembaban_dht22_titik6 = parseFloat(data6.field3).toFixed(2);
    })
    .catch((error) => console.error("Error fetching data:", error));
}

setInterval(fetchData, 5000);

var json_radiuspemantauan_2 = { 
    type : "FeatureCollection", 
    name : "radiuspemantauan_2", 
    crs : { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    features: [
        { 
            type: "Feature",
             properties: { 
                NAMOBJ: "Titik 1",
                HubDist: 0.49358, 
                suhu: 28.30, 
                kelembaban: 52,
                xcoord : 106.98158,
                ycoord: -6.94619, 
                foto: "foto/titik_1.png",
             }, 
                geometry: { 
                    type: "MultiPolygon",
                coordinates: [
                    [
                        [
                            [106.990628450332608, -6.946149400728468], 
                            [106.990197397711071, -6.948944926117867], 
                            [106.988922920238181, -6.951470526921674], 
                            [106.986929760134842, -6.953478976310105], 
                            [106.984413017349894, -6.95477366584144], 
                            [106.981619053525279, -6.955227853706923], 
                            [106.978821374367314, -6.95479707438615], 
                            [106.976293852004005, -6.953523493708652], 
                            [106.974283910428085, -6.9515317820724], 
                            [106.972988301138514, -6.949016909511704], 
                            [106.972533842055029, -6.946225057830728], 
                            [106.972965005749018, -6.94342951934654], 
                            [106.974239571148345, -6.940903942686975], 
                            [106.976232762447168, -6.938895545459535], 
                            [106.978749467781057, -6.937600916182217], 
                            [106.981543339813101, -6.937146773648788], 
                            [106.984340907898613, -6.937577566064349], 
                            [106.986868342335498, -6.938851122597604], 
                            [106.988878252715949, -6.940842782072863], 
                            [106.990173899456565, -6.943357594379546], 
                            [106.990628450332608, -6.946149400728468]
                        ]
                    ]
                ]
             }
             },
              { type: "Feature", 
              properties: {
                NAMOBJ: "Titik 2",
                   HubDist: 0.95428,
                    suhu: 31.50, 
                    kelembaban: 53, 
                    xcoord: 106.55806, 
                    ycoord: -7.34888,
                     foto: "foto/titik_2.png",
                     },
                      geometry: { 
                        type: "MultiPolygon",
                        coordinates: [
                            [
                        [
                         [106.567119924653809, -7.348850515732023], 
                         [106.566686423689916, -7.351646326695028],
                          [106.565408755379551, -7.35417156171471], 
                          [106.563411974501904, -7.35617902886079], 
                          [106.560891536366398, -7.357472215395112], 
                          [106.558094165635964, -7.357924526818478], 
                          [106.555293702668834, -7.357491682035433],
                           [106.552764292674595, -7.356216050078196], 
                           [106.550753544203317, -7.354222503044316],
                            [106.549458286804381, -7.351706191074703],
                           [106.549005302657648, -7.348913436687057],
                          [106.54943891879735, -7.346117619815886],
                           [106.550716673506187, -7.34359241531867],
                            [106.552713479003657, -7.341585003467146],
                             [106.555233870576444, -7.34029187587883],
                              [106.558031141346973, -7.339839604537548], 
                              [106.56083148913828, -7.34027245522876], 
                            [106.563360812734075, -7.341548056663526], 
                            [106.565371536585516, -7.34354154840285], 
                            [106.566666840547185, -7.346057801426458], 
                            [106.567119924653809, -7.348850515732023]
                         ]
                         ]
                        ]
                     }
                     },
                      { type: "Feature",
                          properties: { 
                            NAMOBJ: "Titik",
                            HubDist: 4.43376,
                             suhu: 24, 
                            kelembaban: 40,
                            xcoord: 106.91043,
                            ycoord: -6.89218,
                            foto: "foto/titik_3.png",
                         },
                            geometry: { 
                                type: "MultiPolygon",
                            coordinates: [
                                [
                                [
                                [106.919479573969753, -6.892145546841935],
                                [106.919048043879428, -6.89494111740311],
                                [106.917773198508371, -6.897466598185543],
                                [106.915779816289358, -6.899474774061315],
                                [106.913263019074279, -6.900769063418327], 
                                [106.910469173893716, -6.901222763757418], 
                                [106.90767177477764, -6.900791457447254], 
                                [106.905144666279639, -6.899517362034546],
                                [106.903135231680906, -6.89752519834978],
                                [106.901840172693227, -6.895009980620619], 
                                [106.901386253308289, -6.892217924300962], 
                                [106.901817893330644, -6.889422341572755], 
                                [106.903092825223865, -6.886896885262973], 
                                [106.905086237506595, -6.884888761151809], 
                                [106.907602996843679, -6.883594531079046], 
                                [106.910396750672618, -6.883140874899272], 
                                [106.91319403985662, -6.883572193376468], 
                                [106.915721061832471, -6.884846264316524], 
                                [106.917730466367473, -6.88683837623668], 
                                [106.919025563233191, -6.889353534681596], 
                                [106.919479573969753, -6.892145546841935]
                                ]
                                 ]
                                 ]
                            }
                        },
                            { type: "Feature", 
                                properties: { 
                                    NAMOBJ: "Titik",
                                           HubDist: 62.4822,
                                            suhu: 29.40, 
                                            kelembaban: 53,
                                             xcoord: 106.5507, 
                                            ycoord: -6.98716, 
                                            foto: "foto/titik_4.png",
                                         }, 
                                            geometry: { 
                                                type: "MultiPolygon",
                                             coordinates: [
                                                [
                                                    [
                                                        [106.559754466041099, -6.98712854342426],
                                                         [106.559320782429126, -6.989924325376188],
                                                          [106.558043645985435, -6.992449368885655],
                                                           [106.556048059925004, -6.994456501073648],
                                                            [106.553529362627515, -6.995749242380539],
                                                             [106.550734107896119, -6.996201042216007],
                                                              [106.547935928197745, -6.995767669700826],
                                                               [106.545408744460275, -6.994491545422409],
                                                                [106.543399946813736, -6.992497589365169],
                                                                 [106.542106173820031, -6.989980991317562],
                                                                  [106.541654062809627, -6.987188101473705],
                                                                   [106.542087856110655, -6.984392312889097],
                                                                    [106.543365075443347, -6.981867297755278],
                                                                     [106.545360685931939, -6.979860218112722],
                                                                      [106.547879339866043, -6.97856753345049],
                                                                       [106.550674500005826, -6.97811577272257],
                                                                        [106.553472570015145, -6.978549151870429],
                                                                         [106.555999670863628, -6.979825247773197],
                                                                          [106.558008444081992, -6.981819151284999],
                                                                           [106.559302260439082, -6.984335692687945],
                                                                            [106.559754466041099, -6.98712854342426]
                                                                        ]
                                                                    ]
                                                                ]
                                                             }
                                                             },
                                                              { type: "Feature",
                                                            properties: { 
                                                                NAMOBJ: "Titik", 
                                                                               HubDist: 37.93621, 
                                                                               suhu: 27.20, 
                                                                               kelembaban: 41.50,
                                                                                xcoord: 106.92144, 
                                                                                ycoord: -6.85802,
                                                                                foto: "foto/titik_5.png",
                                                                             }, 
                                                                                geometry: { 
                                                                                    type: "MultiPolygon",
                                                                                 coordinates: [
                                                                                [
                                                                                 [
                                                                                [106.930481982843133, -6.857988500794375],
                                                                                 [106.930050495117058, -6.86078405855639],
                                                                                  [106.928775757037101, -6.863309530573766], 
                                                                                  [106.926782536559898, -6.865317702620634],
                                                                                   [106.924265939681462, -6.866611993496774], 
                                                                                   [106.921472313758159, -6.867065700570276],
                                                                                    [106.918675131277382, -6.866634405539307],
                                                                                     [106.916148215521247, -6.865360324812294],
                                                                                      [106.91413893087784, -6.863368177738122],
                                                                                       [106.912843964403663, -6.860852976881411], 
                                                                                       [106.912390071098514, -6.858060936028518], 
                                                                                       [106.9128216682942, -6.855265365858686],
                                                                                        [106.914096492712105, -6.852739918003786],
                                                                                         [106.916089743417487, -6.850731797460452],
                                                                                          [106.918606302868142, -6.849437565756299], 
                                                                                          [106.921399838003879, -6.84898390292155],
                                                                                           [106.924196911015059, -6.84941521036034],
                                                                                            [106.926723740433246, -6.850689266924872],
                                                                                             [106.928732994848474, -6.852681362495509],
                                                                                              [106.930027998750404, -6.855196504180237],
                                                                                               [106.930481982843133, -6.857988500794375]
                                                                                            ]
                                                                                        ]
                                                                                    ]
                                                                                 }
                                                                                 },
                         { type: "Feature", 
                             properties: { 
                             NAMOBJ: "Titik", 
                                 HubDist: 3599.96929, 
                                suhu: 0, 
                                kelembaban: 0,
                                xcoord: 106.599, 
                                 ycoord: -7.31084,
                             foto: "foto/titik_6.png",
                             },
                              geometry: {
                                type: "MultiPolygon",
                               coordinates: [
                               [
                                [
                                [106.608052376090157, -7.310804642951767],
                                [106.607619124799584, -7.313600435219547],
                                [106.606341774767728, -7.31612571799984], 
                                [106.604345349596159, -7.318133294774059],
                                [106.601825269684696, -7.319426642114937], 
                                [106.599028224506554, -7.319879149763606], 
                                [106.596228022442205, -7.319446517344256], 
                                [106.593698783107769, -7.318171093002988], 
                                [106.591688098370284, -7.316177728427625], 
                                [106.590392791631061, -7.313661555856719], 
                                [106.589939650023979, -7.310868884181457], 
                                [106.590373016106994, -7.30807308531236], 
                                [106.591650452694537, -7.305547832443195], 
                                [106.593646903123712, -7.303540310667516], 
                                [106.596166937347149, -7.302247022405016], 
                                [106.598963883342904, -7.301794555348629], 
                                [106.601763970614812, -7.302227194369299], 
                                [106.604293123393532, -7.303502588799431], 
                                [106.606303782873411, -7.305495898376257], 
                                [106.60759913530066, -7.308012011868787], 
                                [106.608052376090157, -7.310804642951767]
                                                                                                ]
                                                                                            ]
                                                                                        ]
                                                                                     }
                                                                                    }
                                                                                ]
                                                                                }
                                                                            
                                                                                    
 function updateGeoJSON() {
  json_radiuspemantauan_2.features[0].properties.Suhu = suhu_dht22_titik1;
  json_radiuspemantauan_2.features[1].properties.Suhu = suhu_dht22_titik2;
  json_radiuspemantauan_2.features[2].properties.Suhu = suhu_dht22_titik3;
  json_radiuspemantauan_2.features[3].properties.Suhu = suhu_dht22_titik4;
  json_radiuspemantauan_2.features[4].properties.Suhu = suhu_dht22_titik5;
  json_radiuspemantauan_2.features[5].properties.Suhu = suhu_dht22_titik6;


  json_radiuspemantauan_2.features[0].properties.Kelembaban = kelembaban_dht22_titik1;
  json_radiuspemantauan_2.features[1].properties.Kelembaban = kelembaban_dht22_titik2;
  json_radiuspemantauan_2.features[2].properties.Kelembaban = kelembaban_dht22_titik3;
  json_radiuspemantauan_2.features[3].properties.Kelembaban = kelembaban_dht22_titik4;
  json_radiuspemantauan_2.features[4].properties.Kelembaban = kelembaban_dht22_titik5;
  json_radiuspemantauan_2.features[5].properties.Kelembaban = kelembaban_dht22_titik6;


}

function logJson() {
  updateGeoJSON();
  console.log("===============d=================");
  console.log(json_radiuspemantauan_2.features[0].properties.Suhu);
  console.log("===========================a=====");
}

setInterval(logJson, 5000);                                                                 