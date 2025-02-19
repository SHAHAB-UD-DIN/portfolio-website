import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import Link from "next/link"

export function OpenSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <HamburgerMenuIcon className="md:hidden h-8 w-10 text-gray-300 bg-gray-950 py-1 rounded-md" />
      </SheetTrigger>
      <SheetContent side={"left"} className="w-46 sm:w-64">
        <div className="flex flex-col gray-y-4">
        <Button variant={"ghost"} size={"sm"}>
            <Link href={"/"} className="text-lg font-medium">Home</Link>
        </Button>
        <Button variant={"ghost"} size={"sm"}>
            <Link href={"./about"} className="text-lg font-medium">About me</Link>
        </Button>
        <Button variant={"ghost"} size={"sm"}>
            <Link href={"./contact"} className="text-lg font-medium">Contact me</Link>
        </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
