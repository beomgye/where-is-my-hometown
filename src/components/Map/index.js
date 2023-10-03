import DaumPostcode from "react-daum-postcode";

const Map = () => {
  const completeHandler = (data) => {
    console.log(data);
  };

  return (
    <div>
      <DaumPostcode onComplete={completeHandler} />
    </div>
  );
};

export default Map;
