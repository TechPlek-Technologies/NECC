const db = require('_helpers/db');

module.exports = {
    addAddress,
    updateAddress,
    deleteAddress,
    getAllAddresses
};

async function addAddress(addressData) {
    // Extract address data
    console.log(addressData)
    const { city, name, addressLine1, addressLine2, addressLine3, pincode, phone, tollfreeNo, email, type } = addressData;

    // Check if the address already exists
    const existingAddress = await db.Address.findOne({
        where: {
            city,
            name,
            pincode
        }
    });

    // If the address already exists, return an error
    if (existingAddress) {
        throw new Error('Address already exists');
    }

    // Create the address
    const newAddress = await db.Address.create({
        city,
        name,
        addressLine1,
        addressLine2,
        addressLine3,
        pincode,
        phone,
        tollfreeNo,
        email,
        type
    });

    return newAddress;
}

async function getAllAddresses() {
    // Find the address by ID
    const address = await db.Address.findAll();

    // If the address doesn't exist, throw an error
    if (!address) {
        throw new Error('Address not found');
    }
    return address;
}


async function updateAddress(addressId, addressData) {
    // Find the address by ID
    const address = await db.Address.findByPk(addressId);

    // If the address doesn't exist, throw an error
    if (!address) {
        throw new Error('Address not found');
    }

    // Update the address fields
    const { city, name, addressLine1, addressLine2, addressLine3, pincode, phone, tollfreeNo, email, type } = addressData;
    address.city = city;
    address.name = name;
    address.addressLine1 = addressLine1;
    address.addressLine2 = addressLine2;
    address.addressLine3 = addressLine3;
    address.pincode = pincode;
    address.phone = phone;
    address.tollfreeNo = tollfreeNo;
    address.email = email;
    address.type = type;

    // Save the updated address
    await address.save();

    return address;
}

async function deleteAddress(addressId) {
    // Find the address by ID
    const address = await db.Address.findByPk(addressId);

    // If the address doesn't exist, throw an error
    if (!address) {
        throw new Error('Address not found');
    }

    // Delete the address
    await address.destroy();

    return { message: 'Address deleted successfully' };
}
