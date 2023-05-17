const mapUserToModel = (user) => {

    return {
        first: user.firstName,
        middle: user.middleName,
        last: user.lastName,
        phone: user.phone,
        email: user.email,
        password: user.password,
        url: user.image,
        alt: user.alt,
        state: user.address.state,
        country: user.address.country,
        city: user.address.city,
        street: user.address.street,
        houseNumber: user.address.houseNumber,
        zip: user.address.zip,
        isBusiness: user.isBusiness,
    };
};

export default mapUserToModel;