import {Link} from "react-router-dom"
const NotFound = () => {
  return(
    <div className="flex flex-col gap-2">404 Not Found
      <Link to="/">Go Home</Link>
    </div>
  )
}

export default NotFound
