export function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M7.2 3.5h3.1l1.2 3.4-1.9 1.2a12.4 12.4 0 0 0 5.3 5.3l1.2-1.9 3.4 1.2v3.1c0 .9-.7 1.7-1.6 1.8-7.2.8-13.2-5.2-12.4-12.4.1-.9.9-1.6 1.7-1.6Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 21s6.5-6.1 6.5-11.1A6.5 6.5 0 0 0 5.5 9.9C12 21 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="9.8" r="2.1" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="square"
      />
    </svg>
  );
}
