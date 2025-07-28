import DisplaySection from "./DisplaySection";

function Info({ generalInfo, setGeneralInfo, isEditing, setIsEditing }) {
  function handleChange(e) {
    const { name, value } = e.target;
    setGeneralInfo((prev) => ({
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
          <label>Nombre Completo:</label>
          <input
            type="text"
            name="fullName"
            required
            value={generalInfo.fullName}
            onChange={handleChange}
            placeholder="Ingresa tu nombre completo"
          />
        </div>
        
        <div className="form-group">
          <label>Fecha de Nacimiento:</label>
          <input
            type="date"
            name="birthDate"
            required
            value={generalInfo.birthDate}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            required
            value={generalInfo.email}
            onChange={handleChange}
            pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
            title="Ingresa un correo electronico valido"
            placeholder="ejemplo@correo.com"
          />
        </div>
        
        <div className="form-group">
          <label>Teléfono:</label>
          <input
            type="tel"
            name="phone"
            required
            value={generalInfo.phone}
            onChange={handleChange}
            pattern="\d{10,15}$"
            title="Ingresa solo numeros, entre 10 y 15 digitos"
            placeholder="1234567890"
          />
        </div>
        
        <button type="submit" className="btn btn-primary">Guardar</button>
      </form>
    );
  } else {
    return (
      <div>
        <DisplaySection data={generalInfo}/>
        <button onClick={() => setIsEditing(true)} className="btn btn-secondary">Editar</button>
      </div>  
    );
  }
}

export default Info;
