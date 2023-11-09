import { useEffect, useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import Modal from 'react-modal';
import styled from 'styled-components';
import ModalCustomStyles from '@/utils/customStyles';
import { grayColor } from '@/styles/variables';
import InputField from '../InputField';

declare global {
  interface Window {
    // kakao api 에서 따로 타입을 제공해주지 않아서 declare를 사용해서 전역으로 kakao를 any로 추가해주어서 사용해야 하는데 eslint 오류로 인해 이 라인만 따로 뺏습니다.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

interface CallbackData {
  result: window.kakao.maps.services.GeocoderResponse[];
  status: number;
}

interface HandlerData {
  roadAddress: string;
  bcode: number;
}

type AddrData = {
  address: string;
  changeAddress: string;
  setBcode: number | undefined;
  error: string | undefined;
};

const KakaoMap = styled(Map)`
  width: 100%;
  height: 250px;
`;

const InfoWindow = styled.div`
  padding: 5px;
  width: 200px;
  height: 100%;
`;

const AddressContainer = styled.div`
  position: relative;
`;

const AddressButton = styled.button`
  width: 68px;
  height: 40px;
  border: 0;
  margin: auto 0;
  position: absolute;
  bottom: 8px;
  right: 0;
  background-color: transparent;
  color: ${grayColor};
  cursor: pointer;
`;

const CloseButtonWrapper = styled.div`
  background-color: #ececec;
  padding: 16px;
`;

const CloseButton = styled.button`
  width: 100%;
  padding: 16px 0;
  border-radius: 10px;
  border: 0;
  font-size: 20px;
  background-color: #f4f4f4;
  cursor: pointer;
  &:hover {
    background-color: white;
  }
`;

const Address = ({ address, changeAddress, setBcode, error }: AddrData) => {
  const [center, setCenter] = useState<{ lat: number; lng: number }>({
    lat: 33.452613,
    lng: 126.570888
  });
  const [isModalOpen, isSetModalOpen] = useState<boolean>(false);
  const [isInfoOpen, setIsInfoOpen] = useState<boolean>(false);

  const completeHandler = (data: HandlerData) => {
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
      geocoder.addressSearch(address, function search(result: CallbackData, status: CallbackData) {
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

  const closeModal = () => {
    if (isModalOpen) {
      isSetModalOpen(false);
    }
  };

  const openModal = () => {
    if (!isModalOpen) {
      isSetModalOpen(true);
    }
  };

  const onMouseOver = () => {
    setIsInfoOpen(true);
  };

  const onMouseOut = () => {
    setIsInfoOpen(false);
  };

  return (
    <>
      <KakaoMap center={center} isPanto level={3}>
        <MapMarker position={center} clickable onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
          {isInfoOpen && <InfoWindow>{address}</InfoWindow>}
        </MapMarker>
      </KakaoMap>
      <AddressContainer>
        <InputField
          id="location"
          type="text"
          onClick={openModal}
          error={error?.message}
          value={address}
          readOnly
        />
        <AddressButton onClick={openModal}>장소 선택</AddressButton>
      </AddressContainer>
      <Modal isOpen={isModalOpen} ariaHideApp={false} style={ModalCustomStyles}>
        <DaumPostcode style={{ height: '100%' }} onComplete={completeHandler} />
        <CloseButtonWrapper>
          <CloseButton onClick={closeModal}>닫기</CloseButton>
        </CloseButtonWrapper>
      </Modal>
    </>
  );
};

export default Address;
