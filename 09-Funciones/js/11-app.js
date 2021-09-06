// Parametros en un arrow Function...


// Parametros
const aprendiendo = (tecnologia) => console.log(`aprendiendo ${tecnologia}`);
aprendiendo('JavaScript');

// si es un solo parmetro no ocupamos el parentesis
const aprendiendo2 = tecnologia => console.log(`aprendiendo ${tecnologia}`);
aprendiendo2('JavaScript');

// multiples parametros si requieren parentesis
const aprendiendo3 = (tecn1, tecn2) => console.log(`Aprendiendo ${tecn1} ${tecn2}`);
aprendiendo3('JS', 'ES');
