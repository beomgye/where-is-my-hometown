import { useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";
import Modal from "react-modal";
import customStyles from "@/utils/customStyles";
import Map from "../Map";

const Address = () => {
  const [roadAddress, setRoadAddress] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [geocoder, setGeocoder] = useState(null);
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    if (geocoder && marker) {
      document.getElementById("address").value = roadAddress;

      geocoder.addressSearch(roadAddress, function (results, status) {
        if (status === window.daum.maps.services.Status.OK) {
          const result = results[0];
          const coords = new window.daum.maps.LatLng(result.y, result.x);

          document.getElementById("map").style.display = "block";

          window.map.relayout();
          window.map.setCenter(coords);

          marker.setPosition(coords);
        }
      });
    }
  }, [geocoder, marker, roadAddress]);

  const completeHandler = (data) => {
    console.log(data);
    setRoadAddress(data.roadAddress);
    setIsOpen(false);
  };

  const OnToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleGeocoderLoad = (Mapgeocoder) => {
    setGeocoder(Mapgeocoder);
  };

  const handleMarkerLoad = (MapMarker) => {
    setMarker(MapMarker);
  };

  return (
    <div>
      <Map onGeocoderLoad={handleGeocoderLoad} onMarkerLoad={handleMarkerLoad} />
      <input type="text" id="address" value={roadAddress} placeholder="도로명주소" readOnly />
      <button type="button" onClick={OnToggle}>
        우편번호 검색
      </button>
      <Modal isOpen={isOpen} ariaHideApp={false} style={customStyles}>
        <DaumPostcode onComplete={completeHandler} />
      </Modal>
    </div>
  );
};

export default Address;
