
function getAdmin(map) {
    let admins = [];
    for([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Kaj', 'Admin');
usuarios.set('Stephany', 'Admin');

console.log(getAdmin(usuarios));





