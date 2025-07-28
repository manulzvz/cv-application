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
    if (experienceInfo.dateTo < experienceInfo.dateFrom) {
      alert("La fecha de finalización no puede ser anterior a la de inicio.");
     return;
    }
    setIsEditing(false);
}


  if (isEditing) {
    return (
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Empresa:</label>
          <input
            type="text"
            name="companyName"
            required
            value={experienceInfo.companyName}
            onChange={handleChange}
            placeholder="Nombre de la empresa"
          />
        </div>
        
        <div className="form-group">
          <label>Posición:</label>
          <input
            type="text"
            name="positionTitle"
            required
            value={experienceInfo.positionTitle}
            onChange={handleChange}
            placeholder="Tu cargo o puesto"
          />
        </div>
        
        <div className="form-group">
          <label>Responsabilidades:</label>
          <textarea
            name="mainResponsabilities"
            required
            value={experienceInfo.mainResponsabilities}
            onChange={handleChange}
            placeholder="Describe tus principales responsabilidades"
          />
        </div>
        
        <div className="form-group">
          <label>Fecha de inicio:</label>
          <input
            type="date"
            name="dateFrom"
            required
            value={experienceInfo.dateFrom}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <label>Fecha de finalización:</label>
          <input
            type="date"
            name="dateTo"
            required
            value={experienceInfo.dateTo}
            onChange={handleChange}
          />
        </div>
        
        <button type="submit" className="btn btn-primary">Guardar</button>
      </form>
    );
  } else {
    return (
      <div>
        <DisplaySection data={experienceInfo}/>
        <button onClick={() => setIsEditing(true)} className="btn btn-secondary">Editar</button>
      </div>  
    );
  }
}

export default Experience;
