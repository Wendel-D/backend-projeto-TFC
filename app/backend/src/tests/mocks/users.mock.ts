const admin = {
    email: 'admin@admin.com',
    password: 'secret_admin',
}

const users = {
    id: 1,
    username: 'Admin',
    role: 'admin',
    email: 'admin@admin.com',
    password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
}

const password = {
    password: 'prosciutto',
};

const email = {
    email: 'risotto@metallica.com',
};

const invalidEmail = {
    email: 'ghiaccho.com',
    password: 'admin123',
};

const incorrectPassword = {
    email: 'admin@admin.com',
    password: 'pipipipopopo'
};

export {
    admin,
    users,
    password,
    email,
    invalidEmail,
    incorrectPassword,
};