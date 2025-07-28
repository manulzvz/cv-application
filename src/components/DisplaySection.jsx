function DisplaySection({data}) {
    
    const labels = {
        fullName: "Nombre completo",
        birthDate: "Fecha de nacimiento",
        email: "Correo electronico",
        phone: "Telefono"
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