function Info() {
  return (
    <form>
      <div>
        <label>
          Nombre Completo:
          <input type="text" name="fullName" required />
        </label>
      </div>
      <div>
        <label>
          Fecha de Nacimiento:
          <input type="date" name="birthDate" required />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
      </div>
      <div>
        <label>
          Phone:
          <input type="tel" name="phone" required />
        </label>
      </div>
      <button type="submit">Guardar</button>
    </form>
  );
}

export default Info;
