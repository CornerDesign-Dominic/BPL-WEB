type TruckCabDecorationProps = {
  className?: string;
};

export function TruckCabDecoration({ className }: TruckCabDecorationProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 260 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 210V56C22 45 30 38 41 38H132C171 38 202 52 219 78L238 110V190H222V210H22Z" strokeWidth="4" />
        <path d="M22 96H208" strokeWidth="3" />
        <path d="M146 93V170H224" strokeWidth="3" />
        <path d="M151 102H201C211 102 217 109 217 119V151H151V102Z" strokeWidth="3" />
        <path d="M204 103L218 151" strokeWidth="3" />
        <path d="M197 151V176H218" strokeWidth="3" />
        <path d="M46 96V208" strokeWidth="3" />
        <path d="M46 116H130V190H46" strokeWidth="3" />
        <path d="M60 175H82" strokeWidth="4" />
        <path d="M22 190H238V207H222" strokeWidth="4" />
        <path d="M26 208H238" strokeWidth="4" />
        <path d="M10 211H248" strokeWidth="3" />
        <path d="M130 184H150" strokeWidth="3" />
      </g>
    </svg>
  );
}
