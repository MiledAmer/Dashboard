import { useState } from "react";
import { Card, Text, Metric, AreaChart, Title } from "@tremor/react";
import { dataFormatter, chartdata } from "./../data/Areachart";
import { FiSun, FiMoon } from "react-icons/fi";

function DashboardBody() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`h-full basis-5/6 ${darkMode ? "bg-blue-950 text-white" : "bg-blue-100 text-black"}`}>
  
      <div className="overflow-y-auto h-full basis-5/6">
        <div className="flex flex-col">
          <div className="grid grid-rows-1 grid-cols-8 gap-2 mt-14 overflow-y-auto">
            <Card className="col-start-3 col-span-2 h-40">
              <Text>Temperature</Text>
              <Metric>20°C</Metric>
            </Card>
            <Card className="col-start-5 col-span-2 h-40">
              <Text>humidité</Text>
              <Metric>30%</Metric>
            </Card>
          </div>
          <div className="grid grid-rows-1 grid-cols-8 gap-2 mt-6">
            <Card className="col-start-3 col-end-7">
              <Title>Newsletter revenue over time (USD)</Title>
              <div className="h-72 mt-4">
                <AreaChart
                  data={chartdata}
                  index="date"
                  categories={["SemiAnalysis", "The Pragmatic Engineer"]}
                  colors={["indigo", "cyan"]}
                  valueFormatter={dataFormatter}
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
      <div className="absolute top-4 right-4">
        <button
          className={`bg-transparent p-2 rounded-lg ${darkMode ? "text-gray-200" : "text-gray-700"}`}
          onClick={toggleDarkMode}
        >
          {darkMode ? <FiMoon size={24} /> : <FiSun size={24} />}
        </button>
      </div>
    </div>
  );
}

export default DashboardBody;
