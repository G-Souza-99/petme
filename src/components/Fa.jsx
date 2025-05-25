// src/components/Fa.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export function Fa({ icon, className = "" }) {
  return <FontAwesomeIcon icon={icon} className={className} />;
}
