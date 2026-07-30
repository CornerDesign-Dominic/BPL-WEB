type PalletDecorationProps = {
  className?: string;
};

export function PalletDecoration({ className }: PalletDecorationProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 190 210" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <rect x="16" y="104" width="82" height="70" strokeWidth="3" />
        <rect x="99" y="104" width="75" height="70" strokeWidth="3" />
        <rect x="53" y="48" width="72" height="56" strokeWidth="3" />
        <path d="M16 122H174M53 66H125" strokeWidth="2" />
        <path d="M57 48V64M104 104V121M140 104V121" strokeWidth="3" />
        <path d="M8 174H182V190H8V174Z" strokeWidth="4" />
        <path d="M8 190H182M26 190V201H57V190M133 190V201H164V190" strokeWidth="3" />
      </g>
    </svg>
  );
}
