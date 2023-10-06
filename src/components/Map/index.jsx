import { useEffect } from "react";

const Map = ({ onGeocoderLoad, onMarkerLoad }) => {
  useEffect(() => {
    const kakaoMapScript = document.createElement("script");
    kakaoMapScript.async = false;
    kakaoMapScript.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=d248939062099475f9c7ced600dbbbc6&libraries=services&autoload=false";
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.537187, 127.005476),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);
        const geocoder = new window.kakao.maps.services.Geocoder();
        const marker = new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(37.537187, 127.005476),
          map,
        });
        onGeocoderLoad(geocoder);
        onMarkerLoad(marker);
      });
    };
    kakaoMapScript.addEventListener("load", onLoadKakaoAPI);
  }, []);

  return <div style={{ width: "300px", height: "300px", marginTop: "10px" }} id="map" />;
};

export default Map;
