// Authored by Terra Roush

export const validateZipCode = (zip) => {
    let zipCodePattern = /^\d{5}$|^\d{5}-\d{4}$/;
     return zipCodePattern.test(zip);
}