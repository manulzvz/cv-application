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
    setIsEditing(false); //Cambia a modo visualizacion
  }

  if (isEditing) {
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nombre Completo:
            <input
              type="text"
              name="fullName"
              required
              value={generalInfo.fullName}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Fecha de Nacimiento:
            <input
              type="date"
              name="birthDate"
              required
              value={generalInfo.birthDate}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              required
              value={generalInfo.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              required
              value={generalInfo.phone}
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
        <DisplaySection data={generalInfo}/>
        <button onClick={() => setIsEditing(true)}>Editar</button>

      </div>  
    );
  }
}

export default Info;
