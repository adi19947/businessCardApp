

export default function userBackendToClient(user) {
    return {
        address:
        {
            city: user.address.city,
            country: user.address.country,

            houseNumber: user.address.houseNumber,

            state: user.address.state,

            street: user.address.street,

            zip: user.address.zip,
        },

        alt: user.image.alt,

        id: user.user_id,

        image: user.image.url,
        isAdmin: user.isAdmin,

        isBusiness: user.isBusiness,
        firstName: user.name.first,
        lastName: user.name.last,

        phone: user.phone,
    }

}
