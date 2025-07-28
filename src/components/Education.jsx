import DisplaySection from "./DisplaySection";

function Education({educationInfo, setEducationInfo, isEditing, setIsEditing}) {
    
  function handleChange(e) {
    const { name, value } = e.target;
    setEducationInfo((prev) => ({
        ...prev,
        [name]: value,
    }));
  } 

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  if (isEditing) {
    return (
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Escuela de estudios superiores:</label>
          <input
            type="text"
            name="schoolName"
            required
            value={educationInfo.schoolName}
            onChange={handleChange}
            placeholder="Nombre de la institución"
          />
        </div>
        
        <div className="form-group">
          <label>Título de estudios realizados:</label>
          <input
            type="text"
            name="titleOfStudy"
            required
            value={educationInfo.titleOfStudy}
            onChange={handleChange}
            placeholder="Ej: Ingeniería en Sistemas"
          />
        </div>
        
        <div className="form-group">
          <label>Fecha de conclusión de estudios:</label>
          <input
            type="date"
            name="dateOfStudy"
            required
            value={educationInfo.dateOfStudy}
            onChange={handleChange}
          />
        </div>
        
        <button type="submit" className="btn btn-primary">Guardar</button>
      </form>
    );
  } else {
    return (
      <div>
        <DisplaySection data={educationInfo}/>
        <button onClick={() => setIsEditing(true)} className="btn btn-secondary">Editar</button>
      </div>  
    );
  }
}

export default Education;
