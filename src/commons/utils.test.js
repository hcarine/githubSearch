import {getPrograminLanguages} from './utils'

describe('As a Developer I need a file with common functions to be user in all the project', () => {
    const projects = [
            {language: 'stanger thing'},
            {language: 'kk'},
            {language: 'Javascript'},
            {language: 'react'},
            {language: null},
            {language: 'Javascript'}
    ]
    it('Should be receive the projects and return the program languages', () => {
        const result=['stanger thing', 'kk', 'Javascript', 'react']
        expect(getPrograminLanguages(projects)).toEqual(result)
    });

})