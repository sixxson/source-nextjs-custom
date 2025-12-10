import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { CommandMenu } from "./command-menu";

export default async function SiteHeader() {

  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="container flex h-14 items-center gap-1 md:gap-4 px-1.5 md:px-8 ">
          <MainNav />
          <MobileNav />
          <div className="md:flex-1 ml-auto flex items-center gap-1 md:justify-end">
            <div className=" w-full flex-1 md:flex md:w-auto md:flex-none">
              <CommandMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

