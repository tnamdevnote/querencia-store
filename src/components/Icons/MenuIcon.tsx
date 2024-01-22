function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <rect width="24" height="24" fill="white" mix-blend-mode="multiply" />
      <path d="M21 4.5H3V6H21V4.5Z" fill="#2A254B" />
      <path d="M21 18H3V19.5H21V18Z" fill="#2A254B" />
      <path d="M21 9H3V10.5H21V9Z" fill="#2A254B" />
      <path d="M21 13.5H3V15H21V13.5Z" fill="#2A254B" />
    </svg>
  );
}

export default MenuIcon;
