import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import Link from "next/link";
import { IconType } from "react-icons";

export default function MenuItem({title , addresse, Icon} : {title : string; addresse : string; Icon : IconType}) {
  return (
    <div>
        <Link href = {addresse} className="mx-4 lg:mx-6 hover:text-amber-600">
            <Icon className="text-2xl sm:hidden mx-4"/>
            <p className="hidden sm:inline my-2 text-sm">{title}</p>
        </Link>

    </div>
  )
}
