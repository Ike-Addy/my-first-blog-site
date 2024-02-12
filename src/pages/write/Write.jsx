import './write.css'
import computerPicture from '../../assets/computer.png'

export default function Write() {
  return (
    <div className='write'>
      <img
        className='writeImage' 
        src={computerPicture} 
        alt="" 
      />
        <form className='writeForm'>
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                  <i className="writeIcon fa-solid fa-plus" style={{cursor: 'pointer'}}></i>
                </label>
                <input 
                  type="file" 
                  id="fileInput" 
                  className='chooseFile'
                />
                <input 
                  type="text" 
                  placeholder='Title' 
                  className='writeInput' 
                  autoFocus={true}
                />
            </div>
            <div className="writeFormGroup">
              <textarea 
                placeholder='Tell your story...' 
                type='text'
                className='writeInput writeText'
              ></textarea>
              <button className="writeSubmit">Publish</button>
            </div>
        </form>    
    </div>
  )
}
