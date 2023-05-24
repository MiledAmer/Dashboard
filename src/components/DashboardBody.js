import { Card, Text, Metric, AreaChart, Title } from "@tremor/react";
import { dataFormatter, chartdata } from "./../data/Areachart";



function DashboardBody() {

  
  return (
    <div className="h-full basis-5/6 bg-blue-100  text-center ">
      <div className="flex flex-col">
        <div className="grid grid-rows-1 grid-cols-8 gap-2  mt-14">
          <Card className="   col-start-3 col-span-2 h-40 ">
            <Text>Temperature</Text>
            <Metric>20°C</Metric>
          </Card>
          <Card className="  col-start-5 col-span-2 h-40">
            <Text>humidité </Text>
            <Metric>30%</Metric>
          </Card>
        </div>
        <div className="grid grid-rows-1 grid-cols-8 gap-2  mt-6">
          <Card className=" col-start-3 col-end-7">
            <Title>Newsletter revenue over time (USD)</Title>
            <AreaChart
              className="h-72 mt-4"
              data={chartdata}
              index="date"
              categories={["SemiAnalysis", "The Pragmatic Engineer"]}
              colors={["indigo", "cyan"]}
              valueFormatter={dataFormatter}
            />
          </Card>
        </div>
      </div>
    </div>
  );
}
export default DashboardBody;
