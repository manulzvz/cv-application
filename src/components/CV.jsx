import { useState } from 'react';
import Info from './Info';
import Education from './Education';
import Experience from './Experience';

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
        <div>
            <Info
                generalInfo={generalInfo}
                setGeneralInfo={setGeneralInfo}
                isEditing={isEditingInfo}
                setIsEditing={setIsEditingInfo}
            />
            <Education
                educationInfo={educationInfo}
                setEducationInfo={setEducationInfo}
                isEditing={isEditingEducation}
                setIsEditing={setIsEditingEducation}
            />
            <Experience
                experienceInfo={experienceInfo}
                setExperienceInfo={setExperienceInfo}
                isEditing={isEditingExperience}
                setIsEditing={setIsEditingExperience}
            />
        </div>
    );
}

export default CV;