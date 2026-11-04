import { GiRoad, GiBulldozer, GiForklift, GiGears, GiCrane, GiOilDrum, GiBridge, GiBrickWall, GiTruck, GiBarrel, GiHelmet, GiHammerNails } from 'react-icons/gi'
import { FaClock, FaTrophy, FaGlobeAfrica, FaCogs, FaHandshake, FaDraftingCompass, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaEnvelope, FaCheckCircle, FaTruck } from 'react-icons/fa'

const map = {
  paver: GiRoad, road: GiRoad, grader: GiBulldozer, site: GiBulldozer, payloader: GiForklift,
  roller: GiGears, backhoe: GiCrane, tarboiler: GiOilDrum, bridge: GiBridge, building: GiBrickWall,
  truck: GiTruck, bitumen: GiBarrel, helmet: GiHelmet, tools: GiHammerNails, machines: FaTruck,
  clock: FaClock, trophy: FaTrophy, globe: FaGlobeAfrica, cogs: FaCogs, handshake: FaHandshake,
  draft: FaDraftingCompass, pin: FaMapMarkerAlt, phone: FaPhoneAlt, whatsapp: FaWhatsapp,
  mail: FaEnvelope, check: FaCheckCircle,
}

export default function Icon({ name, className = '', size }) {
  const Component = map[name] || GiHelmet
  return <Component className={className} size={size} aria-hidden="true" focusable="false" />
}
