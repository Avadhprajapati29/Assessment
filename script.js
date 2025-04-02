document.getElementById('bookingChoice').addEventListener('change', function () {
    const bookingType = this.value;
    const timeContainer = document.getElementById('timeContainer');
    const slotContainer = document.getElementById('slotContainer');

    timeContainer.style.display = 'none';
    slotContainer.style.display = 'none';

    if (bookingType === 'halfDay') {
        slotContainer.style.display = 'block'; 
    } else if (bookingType === 'hourly') {
        timeContainer.style.display = 'block';
    }
});

document.getElementById('bookingForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('email').value;
    const guests = document.getElementById('guests').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const slot = document.getElementById('slot').value;
    const bookingType = document.getElementById('bookingChoice').value;

    document.getElementById('confirmation').innerHTML = `
        <p>Booking Confirmation:</p>
        <p>Name: ${name}</p>
        <p>Mobile Number: ${mobile}</p>
        <p>Email: ${email}</p>
        <p>Number of Persons: ${guests}</p>
        <p>Date: ${date}</p>
        ${bookingType === 'hourly' ? `<p>Time: ${time}</p>` : ''}
        ${bookingType === 'halfDay' ? `<p>Slot: ${slot}</p>` : ''}
    `;
});
