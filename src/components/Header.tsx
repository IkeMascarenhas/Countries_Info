type HeaderProps = {
    fetchData?: () => Promise<void>;
  };

const Header = ({fetchData}:HeaderProps) => {
  return (
    <header className="flex m-0 w-[100vw] bg-[#2b3945]" onClick={fetchData}>
        <h1 className="text-sm font-semibold p-4 text-white">
          Where in the world?
        </h1>
      </header>
  )
}

export default Header