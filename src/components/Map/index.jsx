import { Map } from "react-kakao-maps-sdk";

const KakaoMap = () => {
  return (
    <>
      <Map
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={{ width: "350px", height: "200px" }}
        level={3}
      />
      <div>Test</div>
    </>
  );
};

export default KakaoMap;
