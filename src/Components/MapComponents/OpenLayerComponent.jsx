import { useEffect, useState, useRef } from "react";
import "ol/ol.css"; //D:\proJect\my_web_gis\node_modules\ol\ol.css
import Map from "ol/Map";
import View from "ol/View";
import { transform } from "ol/proj";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
// import Stamen from "ol/source/Stamen";
import LayerGroup from "ol/layer/Group";
import TileWMS from "ol/source/TileWMS";
import LayerSwitcher from "ol-layerswitcher";

// Import styling
import "../../App";

const OpenLayerComponent = () => {
  const mapContainerRef = useRef(null);
  const map = useRef(null);

  const [lng] = useState(100.6211);
  const [lat] = useState(15.1346);
  const [zoom] = useState(5.5284);

  useEffect(() => {
    map.current = new Map({
      target: mapContainerRef.current,
      layers: [
        new LayerGroup({
          title: "Base maps",
          layers: [
            new TileLayer({
              title: "OSM",
              type: "base",
              visible: true,
              source: new OSM({}),
            }),
            // add Stamen toner if You can.
            // new TileLayer({
            //   title: "Stamen Toner",
            //   type: "base",
            //   visible: false,
            //   source: new Stamen({
            //     layer: "toner",
            //   }),
            // }),
          ],
        }),
        new LayerGroup({
          title: "เครื่องมือ",
          fold: "open",
          layers: [

            //police th
            new TileLayer({
              title: "police",
              visible: false,
              source: new TileWMS({
                attributions: "@geoserver",
                url: "http://localhost:8080/geoserver/web_gis/wms?",
                params: {
                  LAYERS: "web_gis:police_th2",
                },
              }),
            }),
            //river th
            new TileLayer({
              title: "สายแม่น้ำในประเทศไทย",
              visible: false,
              source: new TileWMS({
                attributions: "@geoserver",
                url: "http://localhost:8080/geoserver/web_gis/wms?",
                params: {
                  LAYERS: "web_gis:waterways",
                },
              }),
            }),
            //ขอบเขตประเทศต่างๆ
            new TileLayer({
              title: "ขอบเขตประเทศต่างๆ",
              visible: false,
              fold: "open",
              source: new TileWMS({
                url: "https://ows.terrestris.de/osm/service",
                params: {
                  LAYERS: "OSM-WMS",
                },
              }),
            }),
            

            //province boundary
            /*
            new LayerGroup({
              title: "เลือกจังหวัด",
              fold: "close",
              layers: [
                new TileLayer({
                  title: "Amnat charoen",
                  visible: false,
                  source: new TileWMS({
                    attributions: "@geoserver",
                    url: "http://localhost:8080/geoserver/web_gis/wms?",
                    params: {
                      LAYERS: "web_gis:amnat_charoen",
                    },
                  }),
                }),
                new TileLayer({
                  title: "Bangkok",
                  visible: false,
                  source: new TileWMS({
                    attributions: "@geoserver",
                    url: "http://localhost:8080/geoserver/web_gis/wms?",
                    params: {
                      LAYERS: "web_gis:bangkok",
                    },
                  }),
                }),
                new TileLayer({
                  title: "Chiang mai",
                  visible: false,
                  source: new TileWMS({
                    attributions: "@geoserver",
                    url: "http://localhost:8080/geoserver/web_gis/wms?",
                    params: {
                      LAYERS: "web_gis:chiang_mai",
                    },
                  }),
                }),
                new TileLayer({
                  title: "Kalasin",
                  visible: false,
                  source: new TileWMS({
                    attributions: "@geoserver",
                    url: "http://localhost:8080/geoserver/web_gis/wms?",
                    params: {
                      LAYERS: "web_gis:kalasin",
                    },
                  }),
                }),
                new TileLayer({
                  title: "Nakhon pathom",
                  visible: false,
                  source: new TileWMS({
                    attributions: "@geoserver",
                    url: "http://localhost:8080/geoserver/web_gis/wms?",
                    params: {
                      LAYERS: "web_gis:nakhon_pathom",
                    },
                  }),
                }),
                new TileLayer({
                  title: "Nan",
                  visible: false,
                  source: new TileWMS({
                    attributions: "@geoserver",
                    url: "http://localhost:8080/geoserver/web_gis/wms?",
                    params: {
                      LAYERS: "web_gis:nan",
                    },
                  }),
                }),
                new TileLayer({
                  title: "Phuket",
                  visible: false,
                  source: new TileWMS({
                    attributions: "@geoserver",
                    url: "http://localhost:8080/geoserver/web_gis/wms?",
                    params: {
                      LAYERS: "web_gis:phuket",
                    },
                  }),
                }),
                new TileLayer({
                  title: "Sakon nakhon",
                  visible: false,
                  source: new TileWMS({
                    attributions: "@geoserver",
                    url: "http://localhost:8080/geoserver/web_gis/wms?",
                    params: {
                      LAYERS: "web_gis:sakon_nakhon",
                    },
                  }),
                }),
                new TileLayer({
                  title: "Samut prakan",
                  visible: false,
                  source: new TileWMS({
                    attributions: "@geoserver",
                    url: "http://localhost:8080/geoserver/web_gis/wms?",
                    params: {
                      LAYERS: "web_gis:samut_prakan",
                    },
                  }),
                }),
                new TileLayer({
                  title: "Samut sakhon",
                  visible: false,
                  source: new TileWMS({
                    attributions: "@geoserver",
                    url: "http://localhost:8080/geoserver/web_gis/wms?",
                    params: {
                      LAYERS: "web_gis:samut_sakhon",
                    },
                  }),
                }),
                new TileLayer({
                  title: "Samut songkhram",
                  visible: false,
                  source: new TileWMS({
                    attributions: "@geoserver",
                    url: "http://localhost:8080/geoserver/web_gis/wms?",
                    params: {
                      LAYERS: "web_gis:samut_songkhram",
                    },
                  }),
                }),
                new TileLayer({
                  title: "Tak",
                  visible: false,
                  source: new TileWMS({
                    attributions: "@geoserver",
                    url: "http://localhost:8080/geoserver/web_gis/wms?",
                    params: {
                      LAYERS: "web_gis:tak",
                    },
                  }),
                }),
                new TileLayer({
                  title: "Udon thani",
                  visible: false,
                  source: new TileWMS({
                    attributions: "@geoserver",
                    url: "http://localhost:8080/geoserver/web_gis/wms?",
                    params: {
                      LAYERS: "web_gis:udon_thani",
                    },
                  }),
                }),
              ],
            }),
            */
            
            //ขอบเขตจังหวัดต่างๆ
            new TileLayer({
              title: "ขอบเขตจังหวัดต่างๆ",
              visible: false,
              fold: "open",
              source: new TileWMS({
                url: "http://localhost:8080/geoserver/web_gis/wms?",
                params: {
                  LAYERS: "web_gis:bd_province",
                },
              }),
            }),

            //test
            // new TileLayer({
            //   title: "test01",
            //   visible: false,
            //   source: new TileWMS({
            //     attributions: "@geoserver",
            //     url: "http://localhost:8080/geoserver/web_gis/wms?",
            //     params: {
            //       LAYERS: "web_gis:somdet3",
            //     },
            //   }),
            // }),
            
            //region of thailand
            new LayerGroup({
              title: "ขอบเขตภูมิภาคในประเทศไทย",
              fold: "close",
              layers: [
                new TileLayer({
                  title: "ภาคกลาง",
                  visible: false,
                  source: new TileWMS({
                    attributions: "@geoserver",
                    url: "http://localhost:8080/geoserver/web_gis/wms?",
                    params: {
                      LAYERS: "web_gis:central",
                    },
                  }),
                }),
                new TileLayer({
                  title: "ภาคตะวันออก",
                  visible: false,
                  source: new TileWMS({
                    attributions: "@geoserver",
                    url: "http://localhost:8080/geoserver/web_gis/wms?",
                    params: {
                      LAYERS: "web_gis:east",
                    },
                  }),
                }),
                new TileLayer({
                  title: "ภาคเหนือ่",
                  visible: false,
                  source: new TileWMS({
                    attributions: "@geoserver",
                    url: "http://localhost:8080/geoserver/web_gis/wms?",
                    params: {
                      LAYERS: "web_gis:north",
                    },
                  }),
                }),
                new TileLayer({
                  title: "ภาคอีสาน",
                  visible: false,
                  source: new TileWMS({
                    attributions: "@geoserver",
                    url: "http://localhost:8080/geoserver/web_gis/wms?",
                    params: {
                      LAYERS: "web_gis:northeast",
                    },
                  }),
                }),
                new TileLayer({
                  title: "ภาคใต้",
                  visible: false,
                  source: new TileWMS({
                    attributions: "@geoserver",
                    url: "http://localhost:8080/geoserver/web_gis/wms?",
                    params: {
                      LAYERS: "web_gis:south",
                    },
                  }),
                }),
                new TileLayer({
                  title: "ภาคตะวันตก",
                  visible: false,
                  source: new TileWMS({
                    attributions: "@geoserver",
                    url: "http://localhost:8080/geoserver/web_gis/wms?",
                    params: {
                      LAYERS: "web_gis:west",
                    },
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
      view: new View({
        center: transform([lng, lat], "EPSG:4326", "EPSG:3857"),
        zoom: zoom,
      }),
    });

    const layerSwitcher = new LayerSwitcher({
      target: mapContainerRef.current,
      tipLabel: "Légende", // Optional label for button
      groupSelectStyle: "group", // Can be 'children' [default], 'group' or 'none'
    });
    map.current.addControl(layerSwitcher);

    return () => {
      map.current.setTarget(null);
    };
  }, [lat, lng, zoom]);
  return <div className="map-container" ref={mapContainerRef} />;
};

// Points
// function pointStyleFunction() {
//   return new Style({
//     image: new CircleStyle({
//       radius: 5,
//       fill: new Fill({ color: "rgba(255, 0, 0, 0.1)" }),
//       stroke: new Stroke({ color: "red", width: 1 }),
//     }),
//   });
// }

// const vectorPoints = new VectorLayer({
//   source: new VectorSource({
//     url: "../../data/geojson/hos.json", //D:\proJect\my_web_gis\src\data\geojson\hos.json
//     format: new GeoJSON(),
//   }),
//   style: pointStyleFunction,
// });

export default OpenLayerComponent;
