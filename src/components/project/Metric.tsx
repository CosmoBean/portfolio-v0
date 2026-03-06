import MetricCard from "@/components/shared/MetricCard";

interface MetricProps {
  label: string;
  prefix?: string;
  suffix?: string;
  value: number;
}

export default function Metric({
  label,
  prefix,
  suffix,
  value,
}: MetricProps) {
  return (
    <div className="my-8 max-w-sm">
      <MetricCard label={label} prefix={prefix} suffix={suffix} value={value} />
    </div>
  );
}
