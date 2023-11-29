import {useState} from "react"
function Home()
{   var imagesObject = [];
  const [pname,setpname]=useState('')
    const[page,setpage]=useState('')
    const[option,setoption]=useState('')
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files[0]);
        console.log(e.target.files[0].name)
        setFile(URL.createObjectURL(e.target.files[0]));
        var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = function(e) {
          
          addImage(e.target.result);
      };

      reader.readAsDataURL(e.target.files[0]);
      function addImage(imgData){
        imagesObject.push(imgData);
        
        localStorage.setItem("images", JSON.stringify(imagesObject));
        console.log(imagesObject)
      }
      console.log(reader)
    }

    const handleLogin=()=>
    {
        console.log(pname,page,option)
    }
    return(
        <div>
            Home
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 border-bottom fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand fs-2" href="#">Techno<span className="text-primary">Web</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5 text-center">
              <li className="nav-item">
                <a className="nav-link active text-primary" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">SEO</a></li>
                  <li><a className="dropdown-item" href="#">Graphic Design</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Web Designer</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Our Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
    </nav>
      
      </header>
      <section className="form" >
        <div className="container ">
          <div className="row">  
            <div className="col-12 col-md-6 col-lg-6 col-sm-12 " >
              <div className="card h-100 mt-10">
                <div className="card-body" >
                  <h5 className="card-title">Bone Fracture</h5>
                  <p className="card-text">A bone fracture occurs when a bone is cracked or broken. This can result from trauma, such as a fall, car accident, or sports injury, or from conditions that weaken the bone, such as osteoporosis or certain cancers.

                    <b><p>Here's some general information about bone fractures:</p></b>
                    <p>1.Types of Bone Fractures</p>
                    <p>2.Symptoms of Bone Fractures</p>
                    <p>3.Treatment</p>
                    <p>4.Complications</p>
                    <p>5.Recovery</p>
                  </p>
                  <a href="https://my.clevelandclinic.org/health/diseases/15241-bone-fractures" className="btn btn-primary">Know more</a>
                </div>
              </div>
            </div>
            
      
          
            <div className="col-12 col-md-6 col-lg-6 col-sm-12 card h-100" >
              <div className="mb-3 pt-4">
                <label htmlFor="exampleFormControlInput1" className="form-label">Patient name</label>
                <input type="text" className="form-control" id="pname" value={pname} onChange={(e)=>{setpname(e.target.value)}}/>
              </div>
              <div className="mb-3">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Patient age</label>
                <div >
                  <input type="number" className="form-control" id="page" value={page} onChange={(e)=>{setpage(e.target.value)}}/>
                </div>
              </div>
            
              
              <p>Select Blood Group</p>
            A+<input type="radio" name="bgroup" value="A+" onChange={(e)=>{setoption(e.target.value)}}/>
            
            B+<input type="radio" name="bgroup" value="B+" onChange={(e)=>{setoption(e.target.value)}}/>
          
            A-<input type="radio" name="bgroup" value="A-" onChange={(e)=>{setoption(e.target.value)}}/>
            B-<input type="radio" name="bgroup" value="B-" onChange={(e)=>{setoption(e.target.value)}}/>
            AB+<input type="radio" name="bgroup" value="AB+" onChange={(e)=>{setoption(e.target.value)}}/>
            AB-<input type="radio" name="bgroup" value="AB-" onChange={(e)=>{setoption(e.target.value)}}/>
            O+<input type="radio" name="bgroup" value="O+" onChange={(e)=>{setoption(e.target.value)}}/>
            O-<input type="radio" name="bgroup" value="O-" onChange={(e)=>{setoption(e.target.value)}}/>
            <br></br>
            <h2>Add Image:</h2>
            <input type="file" onChange={handleChange} />
            <img src="" />
            <div>
                <button className="btn btn-primary mt-3 mb-2" type="submit" onClick={handleLogin} >Submit </button>
              </div>
      
            </div>
            
          </div>
        </div>
      </section>
        </div>
    )
}

export default Home