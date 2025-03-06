import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "../../components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartData = [
  { month: "May", personalized: 20, instant: 40 },
  { month: "June", personalized: 25, instant: 55 },
  { month: "July", personalized: 10, instant: 25 },
  { month: "August", personalized: 15, instant: 45 },
  { month: "September", personalized: 15, instant: 40 },
  { month: "October", personalized: 25, instant: 60 },
  { month: "November", personalized: 10, instant: 55 },
];

const chartConfig = {
  personalized: {
    label: "Personalized",
    color: "hsl(var(--chart-1))",
  },
  instant: {
    label: "Instant",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function MonthlyInsuranceChart() {
  return (
    <ChartContainer config={chartConfig}>
      <BarChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: -20,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis tickLine={false} tickMargin={10} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <ChartLegend
          content={
            <ChartLegendContent className="mt-2 border-t border-t-gray-100" />
          }
        />
        <Bar
          dataKey="personalized"
          stackId="a"
          fill="#014DAF"
          radius={[4, 4, 0, 0]}
        />
        <Bar
          dataKey="instant"
          stackId="a"
          fill="#CCE2FF"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ChartContainer>
  );
}
