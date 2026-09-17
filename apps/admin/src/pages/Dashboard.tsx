import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface DailySale {
  date: string;
  sales: number;
}

interface DailySalesChartProps {
  data: DailySale[];
  totalSales: number;
  dateRange: string;
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function formatDate(date: string): string {
  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  return parsedDate.toLocaleDateString("en-PH", {
    month: "short",
    day: "numeric",
  });
}

export default function DailySalesChart({
  data,
  totalSales,
  dateRange,
}: DailySalesChartProps) {
  const chartData = data.map((item) => ({
    ...item,
    displayDate: formatDate(item.date),
  }));

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h2 className="text-base font-bold text-gray-800">Daily Sales</h2>

          <p className="mt-1 text-xs text-gray-400">{dateRange}</p>
        </div>

        <div className="text-right">
          <p className="text-xs text-gray-400">Total Sales</p>

          <p className="mt-1 text-lg font-bold text-gray-800">
            {formatCurrency(totalSales)}
          </p>
        </div>
      </div>

      {/* Empty state */}
      {chartData.length === 0 ? (
        <div className="flex h-72 items-center justify-center">
          <p className="text-sm text-gray-400">No sales data available.</p>
        </div>
      ) : (
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{
                top: 10,
                right: 10,
                left: 0,
                bottom: 10,
              }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#E5E7EB"
              />

              <XAxis
                dataKey="displayDate"
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "#9CA3AF",
                  fontSize: 11,
                }}
                tickMargin={10}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "#9CA3AF",
                  fontSize: 11,
                }}
                tickFormatter={(value: number) => `₱${value.toLocaleString()}`}
                width={65}
              />

              <Tooltip
                cursor={{
                  stroke: "#D1D5DB",
                  strokeDasharray: "4 4",
                }}
                formatter={(value) => [formatCurrency(Number(value)), "Sales"]}
                labelFormatter={(label) => `Date: ${label}`}
                contentStyle={{
                  borderRadius: "12px",
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                }}
              />

              <Line
                type="monotone"
                dataKey="sales"
                stroke="#F97316"
                strokeWidth={3}
                dot={{
                  r: 4,
                  fill: "#F97316",
                  strokeWidth: 2,
                  stroke: "#FFFFFF",
                }}
                activeDot={{
                  r: 6,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
