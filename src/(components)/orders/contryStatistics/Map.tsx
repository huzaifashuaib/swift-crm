import Image from 'next/image'
import { svgIcon } from '@/constants/svgIcon'

const Map = () => {
    const {countryMap}=svgIcon;
  return (
    <div>
        <Image src={countryMap} alt='map' />
    </div>
  )
}

export default Map