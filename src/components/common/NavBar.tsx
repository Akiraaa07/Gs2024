import Link from 'next/link';

function NavBar() {
  return (
    <div className="md:sticky md:top-0 md:shadow-none z-20">
      <div className="hidden lg:block animate-in fade-in zoom-in bg-white p-4">
        <div className="flex justify-between md:mx-[9rem] items-center">
          <div>
            <img src="/images/Logogs.png" alt="logo"/>
          </div>
          <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none">
            <p className="hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray">
              <Link href="/">
                <span className="flex items-center gap-2 font-[500] text-gray">
                  Home
                </span>
              </Link>
            </p>
            <p className="hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray">
              <Link href="/viacep">
                <span className="flex items-center gap-2 font-[500] text-gray">
                  Api Via Cep
                </span>
              </Link>
            </p>
            <p className="hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray">
              <Link href="/git">
                <span className="flex items-center gap-2 font-[500] text-gray">
                  Api Git Hub
                </span>
              </Link>
            </p>
            <p className="hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray">
              <Link href="/exibir">
                <span className="flex items-center gap-2 font-[500] text-gray">
                  Exibir Usuarios
                </span>
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-[40px] select-none">
            <Link href="/login">
              <button
                className="bg-blue-800 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-none cursor-pointer"
                type="button"
              >
                Fazer Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;