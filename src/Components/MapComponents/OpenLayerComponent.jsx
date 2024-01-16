import React, { useEffect, useState, useRef } from "react";
import "ol/ol.css"; //D:\proJect\my_web_gis\node_modules\ol\ol.css
import Map from "ol/Map";
import View from "ol/View";
import { transform } from "ol/proj";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import Stamen from "ol/source/Stamen";
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
            new TileLayer({
              title: "Stamen Toner",
              type: "base",
              visible: false,
              source: new Stamen({
                layer: "toner",
              }),
            }),
          ],
        }),
        new LayerGroup({
          title: "เครื่องมือ",
          fold: "open",
          layers: [
            new LayerGroup({
              title: "เลือก Layer",
              fold: "open",
              layers: [
                new TileLayer({
                  title: "Counties",
                  visible: false,
                  source: new TileWMS({
                    url: "https://ows.terrestris.de/osm/service",
                    params: {
                      LAYERS: "OSM-WMS",
                    },
                  }),
                }),
                new TileLayer({
                  title: "Ang-Thong",
                  visible: false,
                  source: new TileWMS({
                    attributions: "@geoserver",
                    url: "http://localhost:8080/geoserver/macro_provinces/wms?",
                    params: {
                      LAYERS: "macro_provinces:ang thong",
                    },
                  }),
                }),
              ],
            }),
          ],
        }),
        new LayerGroup({
          layers: [
            new TileLayer({
              title: "Ang-Thong",
              visible: false,
              source: new TileWMS({
                attributions: "@geoserver",
                url: "http://localhost:8080/geoserver/macro_provinces/wms?",
                params: {
                  LAYERS: "macro_provinces:ang thong",
                },
              }),
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

export default OpenLayerComponent;
