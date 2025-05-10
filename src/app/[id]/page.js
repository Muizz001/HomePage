import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"


const router = useRouter()
const {id} = router.query

export default function Page() {
  return <div className="h-[600px] bg-amber-400 text-red-600 text-5xl">{id}</div>
}