import { useEffect, useState, useRef } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import { toLonLat, transform, transformExtent } from "ol/proj";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
// import Stamen from "ol/source/Stamen";
import LayerGroup from "ol/layer/Group";
import TileWMS from "ol/source/TileWMS";
import LayerSwitcher from "ol-layerswitcher";
import { ZoomToExtent, defaults as defaultControls } from "ol/control.js";

import Overlay from "ol/Overlay"; // Import the Overlay class

// Import styling
import "../../App";

const OpenLayerComponent = () => {
  const mapContainerRef = useRef(null);
  const map = useRef(null);
  const popupRef = useRef(null);
  const popupContentRef = useRef(null);
  const popupCloserRef = useRef(null);

  const [lng] = useState(100.6211);
  const [lat] = useState(15.1346);
  const [zoom] = useState(5.5284);

  // Thailand's extent in EPSG:4326
  const thailandExtent4326 = [
    100.92995795643422, 13.100601172120763, 100.9150059, 13.1050059,
  ]; // Transform Thailand's extent from EPSG:4326 to EPSG:3857
  const thailandExtent3857 = transformExtent(
    thailandExtent4326,
    "EPSG:4326",
    "EPSG:3857"
  );

  // const geoserver_url = "http://ec2-3-25-92-36.ap-southeast-2.compute.amazonaws.com:8080/geoserver/gis_data/wms?";
  const geoserver_url = "http://localhost:8080/geoserver/web_gis/wms?";

  class CustomZoomToExtent extends ZoomToExtent {
    constructor(options) {
      super({
        extent: options.extent,
        label: "H", // Change 'Custom Label' to your desired label
        tipLabel: options.tipLabel,
      });
    }
  }

  // focus on "url" and "LAYERS"
  useEffect(() => {
    map.current = new Map({
      controls: defaultControls().extend([
        new CustomZoomToExtent({
          extent: thailandExtent3857,
          tipLabel: "Zoom to Gistda", // Adjust the tooltip label as needed
        }),
      ]),
      target: mapContainerRef.current,
      layers: [
        //base map
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
              title: "TileWMS",
              type: "base",
              visible: false,
              source: new TileWMS({
                attributions: "@TileWMS",
                url: "https://ows.terrestris.de/osm/service",
                params: {
                  LAYERS: "OSM-WMS",
                },
              }),
            }),
          ],
        }),

        /**Tools */
        new LayerGroup({
          title: "Tools",
          fold: "open",
          layers: [
            //ขอบเขตจังหวัดต่างๆ
            new TileLayer({
              title: "Provincial boundary",
              visible: false,
              fold: "open",
              source: new TileWMS({
                attributions: "@TileWMS",
                url: geoserver_url,
                params: {
                  LAYERS: "gis_data:bd_province",
                },
              }),
            }),

            //hos th
            new TileLayer({
              title: "Point of Hospital in Thailand",
              visible: false,
              source: new TileWMS({
                attributions: "@TileWMS",
                url: geoserver_url,
                params: {
                  LAYERS: "gis_data:hos_th",
                },
              }),
            }),
            //police th
            new TileLayer({
              title: "Point of Police Station in Thailand",
              visible: false,
              source: new TileWMS({
                attributions: "@TileWMS",
                url: geoserver_url,
                params: {
                  LAYERS: "gis_data:police_th2",
                },
              }),
            }),
            //river th
            new TileLayer({
              title: "River",
              visible: false,
              source: new TileWMS({
                attributions: "@TileWMS",
                url: geoserver_url, //ec2-3-25-92-36.ap-southeast-2.compute.amazonaws.com
                params: {
                  LAYERS: "gis_data:waterways",
                },
              }),
            }),

            // region of thailand
            new LayerGroup({
              title: "Region boundary",
              fold: "close",
              layers: [
                new TileLayer({
                  title: "Central",
                  visible: false,
                  source: new TileWMS({
                    attributions: "@TileWMS",
                    url: geoserver_url,
                    params: {
                      LAYERS: "gis_data:central",
                    },
                  }),
                }),
                new TileLayer({
                  title: "East",
                  visible: false,
                  source: new TileWMS({
                    attributions: "@TileWMS",
                    url: geoserver_url,
                    params: {
                      LAYERS: "gis_data:east",
                    },
                  }),
                }),
                new TileLayer({
                  title: "North",
                  visible: false,
                  source: new TileWMS({
                    attributions: "@TileWMS",
                    url: geoserver_url,
                    params: {
                      LAYERS: "gis_data:north",
                    },
                  }),
                }),
                new TileLayer({
                  title: "Northeast",
                  visible: false,
                  source: new TileWMS({
                    attributions: "@TileWMS",
                    url: geoserver_url,
                    params: {
                      LAYERS: "gis_data:northeast",
                    },
                  }),
                }),
                new TileLayer({
                  title: "South",
                  visible: false,
                  source: new TileWMS({
                    attributions: "@TileWMS",
                    url: geoserver_url,
                    params: {
                      LAYERS: "gis_data:south",
                    },
                  }),
                }),
                new TileLayer({
                  title: "West",
                  visible: false,
                  source: new TileWMS({
                    attributions: "@TileWMS",
                    url: geoserver_url,
                    params: {
                      LAYERS: "gis_data:west",
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

    const overlay = new Overlay({
      // target: mapContainerRef.current,
      element: popupRef.current,
      positioning: "bottom-center",
      offset: [0, -10],
      autoPan: true,
    });
    map.current.addOverlay(overlay);

    /**
     * Add a click handler to hide the popup.
     * @return {boolean} Don't follow the href.
     */
    popupCloserRef.current.onclick = function () {
      overlay.setPosition(undefined);
      popupCloserRef.blur();
      return false;
    };

    map.current.on("click", (evt) => {
      const coordinate = evt.coordinate;
      const [lng, lat] = toLonLat(coordinate);

      // console.log('lat: ' , lat, 'lng: ' , lng);
      popupContentRef.current.innerHTML = `<p>Location:</p><code>Latitude: ${lat.toFixed(
        6
      )}, <br/> Longitude: ${lng.toFixed(6)}</code>`;
      overlay.setPosition(coordinate);
    });

    return () => {
      map.current.setTarget(null);
    };
  }, [lat, lng, zoom]);

  return (
    <div>
      <div className="map-container" ref={mapContainerRef}></div>
      <div ref={popupRef} className="ol-popup">
        <a href="#" ref={popupCloserRef} className="ol-popup-closer"></a>
        <div ref={popupContentRef}></div>
      </div>
    </div>
  );
};

export default OpenLayerComponent;
