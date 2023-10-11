import { useState, useEffect } from "react";
import DaumPostcode from "react-daum-postcode";
import Modal from "react-modal";
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";

// import KakaoMap from "../Map";

const Address = () => {
  const [state, setState] = useState({
    // 지도의 초기 위치
    center: { lat: 33.452613, lng: 126.570888 },
    // 부드럽게 이동할 지 유무
    isPanto: true,
    // 검색한 주소
    address: "경기도 안양시 동안구 1143-3 ",
    // 지도 레벨
    level: 3,
  });
  const [address, setAddress] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [submit, setSubmit] = useState(false); // 임시

  const completeHandler = (data) => {
    console.log(data);
    setAddress(data.roadAddress);
    setIsOpen(false);
  };

  const kakaoMapGeoCoder = () => {
    window.kakao.maps.load(() => {
      // 주소-좌표 변환 객체를 생성합니다
      const geocoder = new window.kakao.maps.services.Geocoder();

      // 주소로 좌표를 검색합니다
      geocoder.addressSearch(address, function (result, status) {
        // 정상적으로 검색이 완료됐으면
        if (status === window.kakao.maps.services.Status.OK) {
          setState((prev) => {
            return {
              ...prev,
              center: {
                lat: Number(result[0].y),
                lng: Number(result[0].x),
              },
              isPanto: !prev.isPanto,
            };
          });
        }
      });
    });
  };

  useEffect(() => {
    kakaoMapGeoCoder();
    setSubmit(false);
  }, [submit]);

  const onClick = () => {
    setIsOpen(!isOpen);
    setState((prev) => {
      return { ...prev, address };
    });
    setSubmit(true);
  };

  return (
    <div>
      <Map
        style={{ width: "350px", height: "200px" }}
        center={state.center}
        isPanto={state.isPanto}
        level={state.level}
      >
        <MapMarker position={state.center} />
        <CustomOverlayMap position={state.center} yAnchor={1}>
          <div>
            <a
              href={`https//maps.kakao.com/link/map/${state.address},${state.center.lat},${state.center.lng}`}
              target="_blank"
              rel="noreferrer"
            >
              <span>{state.address}</span>
            </a>
          </div>
        </CustomOverlayMap>
      </Map>
      <div>
        <p>주소를 입력하세요</p>
        <input
          type="text"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <button type="button" onClick={onClick}>
          우편번호 검색
        </button>
        <Modal isOpen={isOpen} ariaHideApp={false}>
          <DaumPostcode onComplete={completeHandler} />
        </Modal>
      </div>
    </div>
  );
};

export default Address;
