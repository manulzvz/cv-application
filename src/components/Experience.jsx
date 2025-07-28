import DisplaySection from "./DisplaySection";

function Experience({experienceInfo, setExperienceInfo, isEditing, setIsEditing}) {
  
    function handleChange(e) {
    const { name, value } = e.target;
    setExperienceInfo((prev) => ({
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
            Empresa: 
            <input
              type="text"
              name="companyName"
              required
              value={experienceInfo.companyName}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Posicion: 
            <input
              type="text"
              name="positionTitle"
              required
              value={experienceInfo.positionTitle}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Responsabilidades: 
            <input
              type="text"
              name="mainResponsabilities"
              required
              value={experienceInfo.mainResponsabilities}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Fecha de inicio: 
            <input
              type="date"
              name="dateFrom"
              required
              value={experienceInfo.dateFrom}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Fecha de finalizacion: 
            <input
              type="date"
              name="dateTo"
              required
              value={experienceInfo.dateTo}
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
        <DisplaySection data={experienceInfo}/>
        <button onClick={() => setIsEditing(true)}>Editar</button>

      </div>  
    );
  }
}

export default Experience;