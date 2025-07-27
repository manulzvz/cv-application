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

    return (
        <div>
            <Info
                generalInfo={generalInfo}
                setGeneralInfo={setGeneralInfo}
            />
            <Education></Education>
            <Experience></Experience>
        </div>
    );
}

export default CV;