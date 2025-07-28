function DisplaySection({data}) {
    
    const labels = {
        fullName: "Nombre completo",
        birthDate: "Fecha de nacimiento",
        email: "Correo electrónico",
        phone: "Teléfono",
        schoolName: "Escuela",
        titleOfStudy: "Estudios",
        dateOfStudy: "Fecha de finalización",
        companyName: "Nombre de la empresa",
        positionTitle: "Posición",
        mainResponsabilities: "Tareas destacadas",
        dateFrom: "Fecha de inicio",
        dateTo: "Fecha de finalización"
    }

    return (
        <div className="display-container">
            {Object.entries(data).map(([key, value]) => (
                <div key={key} className="display-item">
                    <span className="display-label">{labels[key]}:</span>
                    <span className="display-value">{value || 'No especificado'}</span>
                </div>
            ))}
        </div>
    );
}

export default DisplaySection;
