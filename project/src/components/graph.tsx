import { Container } from "react-bootstrap";
import ResizableBox from "./ResizableBox";
import React from "react";
import { AxisOptions, Chart } from "react-charts";

const months = [
  { month: "Jan", days: 31 },
  { month: "Feb", days: 28 },
  { month: "Mar", days: 31 },
  { month: "Apr", days: 30 },
  { month: "May", days: 31 },
  { month: "Jun", days: 30 },
  { month: "Jul", days: 31 },
  { month: "Aug", days: 31 },
  { month: "Sept", days: 30 },
  { month: "Oct", days: 31 },
  { month: "Nov", days: 30 },
  { month: "Dec", days: 31 },
];

export const formatMonth = (e: number) => {
  return months[e].month;
};

let nr = new Date(2023, 0, 1);

const data = [
  {
    label: "price 1",
    data: [
      {
        primary: new Date(nr),
        secondary: 0,
      },
    ],
  },
  {
    label: "price 2",
    data: [
      {
        primary: new Date(nr),
        secondary: 0,
      },
    ],
  },
  {
    label: "price 3",
    data: [
      {
        primary: new Date(nr),
        secondary: 0,
      },
    ],
  },
  {
    label: "price 4",
    data: [
      {
        primary: new Date(nr),
        secondary: 0,
      },
    ],
  },
  {
    label: "price 5",
    data: [
      {
        primary: new Date(nr),
        secondary: 0,
      },
    ],
  },
];
for (let i = 1; i <= 12; i++) {
  for (let j = 1; j <= months[i - 1].days; j = j + 21) {
    let nd1 = {
      primary: new Date(2023, i, j),
      secondary: Math.floor(Math.random() * 1000) + 200,
    };
    let nd2 = {
      primary: new Date(2023, i, j),
      secondary: Math.floor(Math.random() * 1000) + 200,
    };
    let nd3 = {
      primary: new Date(2023, i, j),
      secondary: Math.floor(Math.random() * 1000) + 200,
    };
    let nd4 = {
      primary: new Date(2023, i, j),
      secondary: Math.floor(Math.random() * 1000) + 200,
    };
    let nd5 = {
      primary: new Date(2023, i, j),
      secondary: Math.floor(Math.random() * 1000) + 200,
    };
    data[0].data.push(nd1);
    data[1].data.push(nd2);
    data[2].data.push(nd3);
    data[3].data.push(nd4);
    data[4].data.push(nd5);
  }
}
export default function Graph() {
  const primaryAxis = React.useMemo<
    AxisOptions<(typeof data)[number]["data"][number]>
  >(
    () => ({
      getValue: (datum) => datum.primary as unknown as Date,
    }),
    []
  );

  const secondaryAxes = React.useMemo<
    AxisOptions<(typeof data)[number]["data"][number]>[]
  >(
    () => [
      {
        getValue: (datum) => datum.secondary,
      },
    ],
    []
  );

  return (
    <Container>
      <ResizableBox>
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
          }}
        />
      </ResizableBox>
    </Container>
  );
}
