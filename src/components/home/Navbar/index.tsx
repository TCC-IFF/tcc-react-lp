export const Navbar = () => {
  const menuItems: { label: string; link: string }[] = [
    {
      label: "Em cartaz",
      link: "#playing",
    },
    {
      label: "Em breve",
      link: "#coming",
    },
    {
      label: "Blog",
      link: "#blog",
    },
    {
      label: "Newsletter",
      link: "#newsletter",
    },
  ];
  return (
    <nav className="fixed left-0 top-0 z-40 flex w-full h-12 md:h-16 min-h-16 bg-slate-800 items-center px-6 md:px-20 justify-center ">
      <div className="flex w-full justify-between max-w-7xl">
        <div>
          <h1 className="text-rose-500 font-bold font-mono text-lg md:text-xl tracking-wide">
            CineTCC - React
          </h1>
        </div>
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.link}
              className="text-gray-300 hover:text-rose-500"
              href={item.link}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
