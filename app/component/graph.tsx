import { useRef } from "react";

import Highcharts from "highcharts";
import { default as highchartsReact } from "highcharts-react-official";
const HighchartsReact = (highchartsReact as any).default;

const options = {
  title: {
    text: "My chart",
  },
  series: [
    {
      data: [1, 2, 3],
    },
  ],
};

export const Graph = () => {
  const chartComponentRef = useRef<highchartsReact.RefObject>(null);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartComponentRef}
    />
  );
};
