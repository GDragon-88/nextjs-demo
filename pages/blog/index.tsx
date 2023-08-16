import Link from 'next/link'
import React from 'react'

function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const [user, setUser] = useState([]);
  // // eslint-disable-next-line react-hooks/rules-of-hooks
  // useEffect(() => {
  //   init();
  // }, [])
  // const init = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users')
  //   const data = await response.json();
  //   console.log('cal api in client')
  //   setUser(data)
  // }
  return (
    <div>
      <h1>Blog</h1>
      <hr />
      <div>
        <Link href={"blog/firstblog"}>
          Go to first blog
        </Link>
        <Link href={"blog/1"}>
          Go to dynamic id
        </Link>
      </div>
      <br />
      
    </div>
  )
}

export default index