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
                // ...props
                isEditing={isEditingEducation}
                setIsEditingEducation={setIsEditingEducation}
            />
            <Experience
                // ...props
                isEditing={isEditingExperience}
                setIsEditingExperience={setIsEditingExperience}
            />
        </div>
    );
}

export default CV;