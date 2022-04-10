import { isJsxElement, JsxEmit } from "typescript";
import { Link } from 'react-router-dom';

const ConditionalLink = ({ children, to, condition } : any) : JSX.Element => (!!condition && to)
      ? <Link to={to}>{children}</Link>
      : <>{children}</>;


export default ConditionalLink;