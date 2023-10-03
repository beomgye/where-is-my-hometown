import { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import Modal from "react-modal";

const Map = () => {
  const [roadAddress, setRoadAddress] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const completeHandler = (data) => {
    console.log(data);
    setRoadAddress(data.roadAddress);
    setIsOpen(false);
  };

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    content: {
      left: "0",
      margin: "auto",
      width: "500px",
      height: "600px",
      padding: "0",
      overflow: "hidden",
    },
  };

  const OnToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <input type="text" value={roadAddress} placeholder="도로명주소" readOnly />
      <button type="button" onClick={OnToggle}>
        우편번호 검색
      </button>
      <Modal isOpen={isOpen} ariaHideApp={false} style={customStyles}>
        <DaumPostcode onComplete={completeHandler} />
      </Modal>
    </div>
  );
};

export default Map;
