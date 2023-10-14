import { useState, useEffect } from 'react';
import DaumPostcode from 'react-daum-postcode';
import Modal from 'react-modal';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
import ModalCustomStyles from '@/utils/customStyles';
import { grayColor } from '@/styles/variables';

const Address = ({ address, changeAddress, setBcode }) => {
  const [center, setCenter] = useState({ lat: 33.452613, lng: 126.570888 });
  const [isModalOpen, isSetModalOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const completeHandler = (data) => {
    console.log(data);
    changeAddress(data.roadAddress);
    setBcode(data.bcode);
    isSetModalOpen(false);

    if (changeAddress) {
      changeAddress(data.roadAddress);
    }
  };

  const kakaoMapGeoCoder = () => {
    window.kakao.maps.load(() => {
      // 주소-좌표 변환 객체를 생성합니다
      const geocoder = new window.kakao.maps.services.Geocoder();

      // 주소로 좌표를 검색합니다
      geocoder.addressSearch(address, function (result, status) {
        // 정상적으로 검색이 완료됐으면
        if (status === window.kakao.maps.services.Status.OK) {
          setCenter({
            lat: Number(result[0].y),
            lng: Number(result[0].x)
          });
        }
      });
    });
  };

  useEffect(() => {
    kakaoMapGeoCoder();
  }, [address]);

  const onClick = () => {
    isSetModalOpen(!isModalOpen);
  };

  const onMoustOver = () => {
    setIsInfoOpen(true);
  };

  const onMoustOut = () => {
    setIsInfoOpen(false);
  };

  return (
    <div>
      <Map style={{ width: '450px', height: '250px' }} center={center} isPanto level={3}>
        <MapMarker position={center} clickable onMouseOver={onMoustOver} onMouseOut={onMoustOut}>
          {isInfoOpen && <InfoWindow>{address}</InfoWindow>}
        </MapMarker>
      </Map>
      <AddressContainer>
        <AddressInput type="text" value={address} readOnly />
        <AddressButton type="button" onClick={onClick} value="장소 선택" />
      </AddressContainer>
      <Modal isOpen={isModalOpen} ariaHideApp={false} style={ModalCustomStyles}>
        <DaumPostcode style={{ height: '100%' }} onComplete={completeHandler} />
        <CloseButtonWrapper>
          <CloseButton onClick={onClick}>닫기</CloseButton>
        </CloseButtonWrapper>
      </Modal>
    </div>
  );
};

const CloseButtonWrapper = styled.div`
  padding: 12px;
  background-color: #ececec;
`;

const InfoWindow = styled.div`
  padding: 5px;
  width: 200px;
  height: 100%;
`;

const AddressContainer = styled.div`
  position: relative;
  background-color: red;
  margin-top: 45px;
`;

const AddressInput = styled.input`
  align-items: center;
  width: 450px;
  height: 25px;
  border-right: 0px;
  border-left: 0px;
  border-top: 0px;
`;

const AddressButton = styled.input`
  width: 68px;
  height: 14px;
  border: 0;
  margin: auto 0;
  position: absolute;
  top: -10px;
  bottom: 0;
  right: -10px;
  background-color: white;
  color: ${grayColor};
  cursor: pointer;
`;

const CloseButton = styled.button`
  width: 100%;
  padding: 16px 0;
  border-radius: 10px;
  border: 0;
  font-size: 20px;
  background-color: white;
  cursor: pointer;
`;

export default Address;
