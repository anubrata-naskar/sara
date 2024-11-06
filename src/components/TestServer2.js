import React, {useState, useEffect} from 'react'

import axios from "axios"


export default function TestServer2() {
    
    const [user, setUser] = useState([]);
    const loadUsers = async() => {
      const result = await axios.get("http://localhost/api/index2.php");
      setUser(result.data.phpresult);
      console.log(result.data.phpresult);
    };
    useEffect(() => {
      loadUsers();
    }, [])
    return (
<div>

        </div>
    )
}
