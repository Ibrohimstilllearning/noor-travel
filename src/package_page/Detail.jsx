import { useParams } from "react-router-dom"
import {packagesData} from "../data/packages"
import RegulerLayout from "./reguler/RegulerLayout"
import PremiumLayout from "./premium/PremiumLayout"
export default function Detail () {
 const {id} = useParams()
 const pkg = packagesData.find((p) => p.id === parseInt(id) ) 

 if (!pkg) return <div className="font-libre text-2xl text-gray-700">Package Not Found</div>

 const layouts = {
    reguler: <RegulerLayout pkg={pkg} />,
    premium: <PremiumLayout pkg={pkg} />
 }

 return layouts[pkg.type] ?? <RegulerLayout pkg={pkg}/>
}