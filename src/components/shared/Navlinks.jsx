export default function NavLinks({ scrolled }) {
  const NAV_LINKS = [
    "SHOP ALL",
    "NEW IN",
    "BEST SELLERS",
    "SHOP GOLD",
    "SHOP SILVER",
    "PERLE",
    "MODERN RODEO",
  ];

  return (
    <nav
      aria-label='Primary Navigation'
      className='hidden lg:flex gap-5 justify-center mt-8'
    >
      {NAV_LINKS.map((label) => (
        <a
          key={label}
          href='#'
          className={`text-xs ${scrolled ? "text-black" : "text-white"}`}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
