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
    setIsEditing(false); //Cambia a modo visualizacion
  }

  if (isEditing) {
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Escuela de estudios superiores:
            <input
              type="text"
              name="schoolName"
              required
              value={educationInfo.schoolName}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Titulo de estudios realizados:
            <input
              type="text"
              name="titleOfStudy"
              required
              value={educationInfo.titleOfStudy}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Fecha de conclusion de estudios:
            <input
              type="date"
              name="dateOfStudy"
              required
              value={educationInfo.dateOfStudy}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Guardar</button>
      </form>
    );
  } else {
    return (
      <div>
        <DisplaySection data={educationInfo}/>
        <button onClick={() => setIsEditing(true)}>Editar</button>
      </div>  
    );
  }
}

export default Education;