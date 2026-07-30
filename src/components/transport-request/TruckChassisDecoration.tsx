type TruckChassisDecorationProps = {
  className?: string;
};

function Wheel({ cx }: { cx: number }) {
  return (
    <g stroke="currentColor" fill="white">
      <circle cx={cx} cy="99" r="34" strokeWidth="4" />
      <circle cx={cx} cy="99" r="15" strokeWidth="3" />
    </g>
  );
}

export function TruckChassisDecoration({ className }: TruckChassisDecorationProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 55H1428" strokeWidth="4" />
        <path d="M20 139H1420" strokeWidth="3" />
        <path d="M86 55V78H266" strokeWidth="3" />
        <path d="M772 55V104H796M780 104H811" strokeWidth="3" />
        <path d="M814 55V113H840M822 113H850" strokeWidth="3" />
        <rect x="890" y="72" width="174" height="42" rx="2" strokeWidth="3" />
        <path d="M1080 55V114" strokeWidth="3" />
        <path d="M1122 55V87H1215" strokeWidth="3" />
        <path d="M1334 55V85H1418" strokeWidth="3" />
      </g>
      <Wheel cx={244} />
      <Wheel cx={340} />
      <Wheel cx={436} />
      <Wheel cx={1114} />
      <Wheel cx={1298} />
    </svg>
  );
}
