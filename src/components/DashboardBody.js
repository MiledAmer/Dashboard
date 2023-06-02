import { Card, Text, Metric, AreaChart, Title } from "@tremor/react";
import { dataFormatter, chartdata } from "./../data/Areachart";
import { fetchData } from "./../config/firebase";
import { useQuery } from "@tanstack/react-query";
import { CircularProgress, Typography } from "@mui/material";

function DashboardBody() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"], 
    queryFn: () => fetchData("/Rooms/Room01/")});

  if (isLoading) return <CircularProgress />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="h-full basis-5/6 bg-blue-100 text-center">
      <div className="overflow-y-auto h-full basis-5/6">
        <div className="flex flex-col">
          <div className="mt-10 ml-20">
            <Typography variant="h4" className="text-left mt-10  ">
              Room server number : 1  {data.Mov?"mouvement detecter":""}
            </Typography>
          </div>
          <div className="grid grid-rows-1 grid-cols-8 gap-2 mt-14 overflow-y-auto">
            <Card className="col-start-3 col-span-2 h-40">
              <Text>Temperature</Text>
              <Metric>{data.Temp}</Metric>
            </Card>
            <Card className="col-start-5 col-span-2 h-40">
              <Text>humidité </Text>
              <Metric>{data.Humidity}</Metric>
            </Card>
          </div>
          <div className="grid grid-rows-1 grid-cols-8 gap-2 mt-6 ">
            <Card className="col-start-3 col-end-7">
              <Title>Temperature et humidité par rapport au temp</Title>
              <div className="h-72 mt-4">
                <AreaChart
                  data={chartdata}
                  index="date"
                  categories={["temperature", "humidité"]}
                  colors={["indigo", "cyan"]}
                  valueFormatter={dataFormatter}
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DashboardBody;
