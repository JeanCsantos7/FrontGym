import { BarLoader } from "react-spinners";
import { CSSProperties, useState } from "react";

const Loading = () => {
  let [loading] = useState(true);
  let [color] = useState("#e26631");

  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <div className="mt-[8%]">
      <BarLoader
        color={color}
        loading={loading}
        cssOverride={override}
        width={200}
        height={6}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
