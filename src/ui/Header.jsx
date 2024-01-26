function Header({ children }) {
  return (
    <div className="flex w-full max-w-[1100px] flex-col gap-4 px-4 pt-4 md:flex-row md:gap-5">
      {children}
    </div>
  );
}

export default Header;
