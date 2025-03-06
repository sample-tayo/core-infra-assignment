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
  { month: "January", personalized: 186, instant: 80 },
  { month: "February", personalized: 305, instant: 200 },
  { month: "March", personalized: 237, instant: 120 },
  { month: "April", personalized: 73, instant: 190 },
  { month: "May", personalized: 309, instant: 130 },
  { month: "June", personalized: 214, instant: 140 },
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
      <BarChart accessibilityLayer data={chartData} margin={{
        left: -20
      }}>
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
