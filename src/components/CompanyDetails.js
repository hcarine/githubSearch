import React, {useState, useEffect} from 'react';
import ProjectCards from './ProjectCards'
import FilterProjects from './FilterProjects'
import { getPrograminLanguages } from '../commons/utils';

const CompanyDetails = ({companyProjects}) => {
    const [projects, setProjects] = useState(companyProjects)

    const programinLanguages = getPrograminLanguages(companyProjects);

    const filteProjectByLanguage = (projects,language) => {
        const filteredProjecs= projects.filter(project=> project.language === language)
        setProjects(filteredProjecs)
    }

    return  (
        <div>
            <h1>
                <img src={companyProjects[0].owner.avatar_url} alt="company avatar" height="42" width="42"></img>
                 {companyProjects[0].owner.login}
            </h1>

            <div>
                <h2>Filter</h2>
                <FilterProjects languages={programinLanguages} callBack={filteProjectByLanguage} projects={projects}/>
            </div>

            <h2>Projects</h2>
            <ProjectCards projects={projects}/>
        </div>
    )
}

export default CompanyDetails;