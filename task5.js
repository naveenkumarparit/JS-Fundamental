function calculateDeliveryTime(packageType) {
    let deliveryTime;

    switch (packageType.toLowerCase()) {
        case "standard": deliveryTime = "3-5 days";
            break;
        case "express": deliveryTime = "1-2 days";
            break;
        case "overnight": deliveryTime = "overnight";
            break;
        default: deliveryTime = "Unknown";
            break;
    }
    return deliveryTime;
}

const packageType = "Express";
const estimatedDeliveryTime = calculateDeliveryTime(packageType);
console.log(`Estimated delivery tine for ${packageType} is : ${estimatedDeliveryTime}`);