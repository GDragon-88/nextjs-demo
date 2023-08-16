import React from 'react'
const About: React.FC<any> = (data) => {
  return (
    <div style={{ display: "flex", height: "100vh", alignItems: "center", justifyContent: "center" }}>
      <div>About</div>
      <div style={{margin:"20px"}}>
        {/* {JSON.stringify(data.users)} */}
      </div>
    </div>
  )
}

// export async function getServerSideProps() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users')
//   console.log('------- GET data in server-------')
//   const data = await response.json();
//   return {
//     props: {
//       users: data,
//     }
//   }
// }

export default About