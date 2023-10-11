import { Map } from "react-kakao-maps-sdk";

const KakaoMap = () => {
  return (
    <>
      <Map center={{ lat: 33.5563, lng: 126.79581 }} style={{ width: "100%", height: "360px" }} />
      <div>Test</div>
    </>
  );
};

export default KakaoMap;
