document.getElementById('bunkForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const bunkLocation = document.getElementById('bunk-location').value;
    const bunkArea = document.getElementById('bunk-area').value;
    const noOfSlots = document.getElementById('NoofSlots').value;
    const phoneNo = document.getElementById('phoneno').value;
    const slotCapacity = document.getElementById('slot-capacity').value;
    const minChargeTime = document.getElementById('min-charge-time').value;

    const bunkDetails = {
        location: bunkLocation,
        area: bunkArea,
        noOfSlots: noOfSlots,
        phoneNo: phoneNo,
        slotCapacity: slotCapacity,
        minChargeTime: minChargeTime
    };

    localStorage.setItem('bunkDetails', JSON.stringify(bunkDetails));
    window.location.href = 'managebunk.html';
});
