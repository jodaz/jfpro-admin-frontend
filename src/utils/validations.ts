export const PASSWORD = {
    rules: {
        required: true,
        minLength: 6,
        invalid: true,
        wrong: true
    },
    messages: {
        required: "Ingrese una contraseña.",
        minLength: "Mínimo 6 caracteres.",
        invalid: 'Credenciales inválidas.',
        wrong: 'Contraseña incorrecta.'
    }
}

export const EMAIL = {
    rules: {
        required: true,
        pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        unique: true,
        notfound: true,
        deleted: true,
        invalid: true,
        byrrss: true
    },
    messages: {
        deleted: 'La cuenta asociada ha sido eliminada por el usuario.',
        unique: 'El correo ha sido registrado.',
        required: "Ingrese su correo",
        pattern: "Email inválido",
        notfound: 'El usuario no ha sido encontrado.',
        invalid: 'Credenciales inválidas'
    }
}
