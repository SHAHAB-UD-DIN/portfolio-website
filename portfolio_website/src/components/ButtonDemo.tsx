import { Button } from "@/components/ui/button"
import { ArrowTopRightIcon } from "@radix-ui/react-icons"

export function ButtonDemo() {
  return <Button variant="outline" className="rounded-full">
    Contact
    <ArrowTopRightIcon />
  </Button>
}
