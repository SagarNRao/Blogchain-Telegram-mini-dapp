import { Login } from "../../components/login";
import ContractDataFetcher from "./feed";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";


export default function Home() {
  return (
    <>
      <div className="flex h-100px bg-green-500 items-center mx-auto p-2">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>hello</NavigationMenuItem>
            <NavigationMenuItem>
              <Login />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
        <div className="py-20">
          <div className="flex justify-center mb-20">
            <ContractDataFetcher />
          </div>
        </div>
      </main>
    </>
  );
}
