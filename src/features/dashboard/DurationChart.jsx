import styled from "styled-components";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import Heading from "../../ui/Heading";
import { useDarkMode } from "../../context/DarkModeContext";

const ChartBox = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 2.4rem 3.2rem;
  grid-column: 3 / span 2;

  & > *:first-child {
    margin-bottom: 1.6rem;
  }

  & .recharts-pie-label-text {
    font-weight: 600;
  }
`;

const startDataLight = [
  {
    duration: "1 night",
    value: 0,
    color: "#ef4444",  // hue 0° — red
  },
  {
    duration: "2 nights",
    value: 0,
    color: "#f97316",  // hue 25° — orange
  },
  {
    duration: "3 nights",
    value: 0,
    color: "#eab308",  // hue 48° — yellow
  },
  {
    duration: "4-5 nights",
    value: 0,
    color: "#84cc16",  // hue 90° — lime
  },
  {
    duration: "6-7 nights",
    value: 0,
    color: "#06b6d4",  // hue 190° — cyan
  },
  {
    duration: "8-14 nights",
    value: 0,
    color: "#3b82f6",  // hue 220° — blue
  },
  {
    duration: "15-21 nights",
    value: 0,
    color: "#16a34a",  // hue 142° — green
  },
  {
    duration: "21+ nights",
    value: 0,
    color: "#ec4899",  // hue 320° — pink
  },
];

const startDataDark = [
  {
    duration: "1 night",
    value: 0,
    color: "#fca5a5",  // hue 0° — light red
  },
  {
    duration: "2 nights",
    value: 0,
    color: "#fdba74",  // hue 25° — light orange
  },
  {
    duration: "3 nights",
    value: 0,
    color: "#fde047",  // hue 48° — light yellow
  },
  {
    duration: "4-5 nights",
    value: 0,
    color: "#bef264",  // hue 90° — light lime
  },
  {
    duration: "6-7 nights",
    value: 0,
    color: "#67e8f9",  // hue 190° — light cyan
  },
  {
    duration: "8-14 nights",
    value: 0,
    color: "#93c5fd",  // hue 220° — light blue
  },
  {
    duration: "15-21 nights",
    value: 0,
    color: "#86efac",  // hue 142° — light green
  },
  {
    duration: "21+ nights",
    value: 0,
    color: "#f9a8d4",  // hue 320° — light pink
  },
];

function prepareData(startData, stays) {
  // A bit ugly code, but sometimes this is what it takes when working with real data 😅

  function incArrayValue(arr, field) {
    return arr.map((obj) =>
      obj.duration === field ? { ...obj, value: obj.value + 1 } : obj
    );
  }

  const data = stays
    .reduce((arr, cur) => {
      const num = cur.numNights;
      if (num === 1) return incArrayValue(arr, "1 night");
      if (num === 2) return incArrayValue(arr, "2 nights");
      if (num === 3) return incArrayValue(arr, "3 nights");
      if ([4, 5].includes(num)) return incArrayValue(arr, "4-5 nights");
      if ([6, 7].includes(num)) return incArrayValue(arr, "6-7 nights");
      if (num >= 8 && num <= 14) return incArrayValue(arr, "8-14 nights");
      if (num >= 15 && num <= 21) return incArrayValue(arr, "15-21 nights");
      if (num >= 21) return incArrayValue(arr, "21+ nights");
      return arr;
    }, startData)
    .filter((obj) => obj.value > 0);

  return data;
}

function DurationChart({ confirmedStays = [] }) {
  const { isDarkMode } = useDarkMode();
  const startData = isDarkMode ? startDataDark : startDataLight;
  const data = prepareData(startData, confirmedStays);

  return (
    <ChartBox>
      <Heading as="h2">Stay duration summary</Heading>

      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="duration"
            innerRadius={70}
            outerRadius={95}
            cx="40%"
            paddingAngle={3}
          >
            {data.map((entry) => (
              <Cell key={entry.duration} fill={entry.color} stroke={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            iconType="circle"
            layout="vertical"
            verticalAlign="middle"
            align="right"
            iconSize={15}
            formatter={(value, entry) => (
              <span style={{ color: isDarkMode ? "#e5e7eb" : "#374151" }}>
                {value}
              </span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </ChartBox>
  );
}

export default DurationChart;
