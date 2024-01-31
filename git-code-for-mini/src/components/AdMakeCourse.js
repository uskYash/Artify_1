import "../styles/RegisterFormStyles.css"
import ImageUploader from './ImageUploader';

function MakeCourse(){
    return(
        <div className="from-container">
            <h1> Create your Course here !!</h1>
            <form>
                <input type="text" placeholder="Title"/>
                <select id="Art" name="Art">
                <option value="" selected disabled>Select Art field</option>
                <option value="Painting">Painting</option>
                <option value="Origami">Origami</option>
                <option value="Sculpture">Sculpture</option>
                <option value="Pottery">Pottery</option>
                </select>
                <input type="text" placeholder="Describe your course "/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <div>
                   <h5>Upload your piece of art here </h5>
                   <ImageUploader />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default MakeCourse