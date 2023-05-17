import './style.scss'
import { Input } from 'reactstrap';

export const BaseInput = ({ className, ...props }) => {
  return (
    <Input {...props} className={`base-input ${className}`} />
  );
}