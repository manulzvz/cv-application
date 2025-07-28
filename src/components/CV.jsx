import { useState } from 'react';
import Info from './Info';
import Education from './Education';
import Experience from './Experience';
import '../styles/CV.css';

function CV() {

    const [generalInfo, setGeneralInfo] = useState({
        fullName: '',
        birthDate: '',
        email: '',
        phone: '',
    });

    const [educationInfo, setEducationInfo] = useState({
        schoolName: '',
        titleOfStudy: '',
        dateOfStudy: '',
    });

    const [experienceInfo, setExperienceInfo] = useState({
        companyName: '',
        positionTitle: '',
        mainResponsabilities: '',
        dateFrom: '',
        dateTo: '',
    })

    const [isEditingInfo, setIsEditingInfo] = useState(true);
    const [isEditingEducation, setIsEditingEducation] = useState(true);
    const [isEditingExperience, setIsEditingExperience] = useState(true);

    return (
        <div className="cv-container">
            <div className="cv-section">
                <h2>Información Personal</h2>
                <Info
                    generalInfo={generalInfo}
                    setGeneralInfo={setGeneralInfo}
                    isEditing={isEditingInfo}
                    setIsEditing={setIsEditingInfo}
                />
            </div>
            
            <div className="cv-section">
                <h2>Educación</h2>
                <Education
                    educationInfo={educationInfo}
                    setEducationInfo={setEducationInfo}
                    isEditing={isEditingEducation}
                    setIsEditing={setIsEditingEducation}
                />
            </div>
            
            <div className="cv-section">
                <h2>Experiencia Laboral</h2>
                <Experience
                    experienceInfo={experienceInfo}
                    setExperienceInfo={setExperienceInfo}
                    isEditing={isEditingExperience}
                    setIsEditing={setIsEditingExperience}
                />
            </div>
        </div>
    );
}

export default CV;
