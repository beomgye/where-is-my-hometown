import { useState } from "react";
import {
  AssetInputForm,
  LocationForm,
  TradeForm,
  BuildingTypeForm,
  FinishForm,
} from "@/components";

const OptionContainer = () => {
  const [step] = useState(0);

  return (
    <div>
      {step === 0 && <AssetInputForm />}
      {step === 1 && <LocationForm />}
      {step === 2 && <TradeForm />}
      {step === 3 && <BuildingTypeForm />}
      {step === 4 && <FinishForm />}
    </div>
  );
};

export default OptionContainer;
