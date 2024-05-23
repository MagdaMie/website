import ButtonBetter from './ButtonBetter'
import { Link } from 'react-router-dom';
const ContactFooter = () => {
  const content = "Contact Us"
  return (
    <div>
      <div className="address">
        <p>487 Amelie Court</p>
        <p>Lake Gunnarside</p>
        <p>07888</p>
      </div>
      <Link to={"/contact"}>
      <ButtonBetter content={content}/>
      </Link>
    </div>
  );
};

export default ContactFooter
