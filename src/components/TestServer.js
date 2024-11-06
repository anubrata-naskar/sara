import React, {useState, useEffect} from 'react'
import axios from "axios"

export default function TestServer() {
    const [inputs, setInputs]=useState({})
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]:value}))
        
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost/api/index.php', inputs)
        axios.get('/api/index.php')
        .then(response => {
          // Parse the response data and update state
          this.setState({ data: response.data });
        })
        .catch(error => {
          console.log(error);
        });
        console.log(inputs)
    }

    const [user, setUser] = useState([]);
    const loadUsers = async() => {
      const result = await axios.get("http://localhost/api/index.php");
      setUser(result.data.phpresult);
      console.log(result.data.phpresult);
    }
    useEffect(() => {
      loadUsers();
    }, [])
 
  return (
    <>
    <div>
        <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" onChange={handleChange}/>
        <label>Roll</label>
        <input type="number" name="roll" onChange={handleChange}/>
        <button>Submit</button>
        </form>
      </div><div class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close danger" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</>
  )
}
