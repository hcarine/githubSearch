export const getPrograminLanguages = (projects) => {
    const languages = projects
        .map(proj=>  proj.language )
        .filter(lang=>lang !== null)
    return [...new Set(languages)];
}