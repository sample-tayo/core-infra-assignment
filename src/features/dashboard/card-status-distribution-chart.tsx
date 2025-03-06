import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../components/ui/chart";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

const chartData = [
  {
    active: 1840,
    expired: 245,
    inactive: 170,
    blocked: 120,
    lost: 75,
  },
];

const chartConfig = {
  active: {
    label: "Active",
    color: "hsl(var(--chart-1))",
  },
  expired: {
    label: "Expired",
    color: "hsl(var(--chart-2))",
  },
  inactive: {
    label: "Inactive",
    color: "hsl(var(--chart-3))",
  },
  blocked: {
    label: "Blocked",
    color: "hsl(var(--chart-4))",
  },
  lost: {
    label: "Lost",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function CardStatusDistributionChart() {
  const totalCards =
    chartData[0].active +
    chartData[0].expired +
    chartData[0].inactive +
    chartData[0].blocked +
    chartData[0].lost;

  return (
    <div>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square w-full max-w-[250px]"
      >
        <RadialBarChart
          data={chartData}
          startAngle={90}
          endAngle={450}
          innerRadius={100}
          outerRadius={130}
        >
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) - 16}
                        className="fill-grey text-sm"
                      >
                        Total Cards
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 28}
                        className="fill-foreground text-4xl font-bold"
                      >
                        {totalCards.toLocaleString()}
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </PolarRadiusAxis>
          <RadialBar
            dataKey="active"
            stackId="a"
            cornerRadius={20}
            className="fill-[#01A4AF] stroke-transparent stroke-2"
          />
          <RadialBar
            dataKey="expired"
            stackId="a"
            cornerRadius={20}
            className="fill-[#FFBA24] stroke-transparent stroke-2"
          />
          <RadialBar
            dataKey="inactive"
            stackId="a"
            cornerRadius={20}
            className="fill-primary stroke-transparent stroke-2"
          />
          <RadialBar
            dataKey="blocked"
            stackId="a"
            cornerRadius={20}
            className="fill-[#8020E7] stroke-transparent stroke-2"
          />
          <RadialBar
            dataKey="lost"
            stackId="a"
            cornerRadius={20}
            className="fill-[#FF4457] stroke-transparent stroke-2"
          />
        </RadialBarChart>
      </ChartContainer>

      {/* legend */}
      <div className="flex flex-wrap items-center justify-center gap-x-6">
        <p className="flex items-center gap-1 text-xs">
          <span className="size-2 rounded-full bg-[#01A4AF]"></span>
          Active
        </p>
        <p className="flex items-center gap-1 text-xs">
          <span className="size-2 rounded-full bg-[#FFBA24]"></span>
          Expired
        </p>
        <p className="flex items-center gap-1 text-xs">
          <span className="size-2 rounded-full bg-primary"></span>
          Inactive
        </p>
        <p className="flex items-center gap-1 text-xs">
          <span className="size-2 rounded-full bg-[#8020E7]"></span>
          Blocked
        </p>
        <p className="flex items-center gap-1 text-xs">
          <span className="size-2 rounded-full bg-[#FF4457]"></span>Lost
        </p>
      </div>
    </div>
  );
}
