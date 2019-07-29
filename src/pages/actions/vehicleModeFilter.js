const vehicleModeFilter = (mode, checked) => {
    return {type: 'VehicleModeFilter', data: { mode, checked } }
}

export { vehicleModeFilter };