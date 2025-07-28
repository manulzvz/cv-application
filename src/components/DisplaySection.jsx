function DisplaySection({data}) {
    
    const labels = {
        fullName: "Nombre completo",
        birthDate: "Fecha de nacimiento",
        email: "Correo electronico",
        phone: "Telefono",
        schoolName: "Escuela",
        titleOfStudy: "Estudios",
        dateOfStudy: "Fecha de finalizacion",
        companyName: "Nombre de la empresa",
        positionTitle: "Posicion",
        mainResponsabilities: "Tareas destacadas",
        dateFrom: "Fecha de inicio",
        dateTo: "Fecha de finalizacion"
    }


    return (
        <div>
            {Object.entries(data).map(([key,value]) => (
                <p key={key}>
                    <strong>{labels[key]}:</strong> {value}
                </p>
            ))}
        </div>
    );
}

export default DisplaySection;