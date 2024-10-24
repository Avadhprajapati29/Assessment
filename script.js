document.getElementById('bookingChoice').addEventListener('change', function () {
    const bookingType = this.value;
    const timeContainer = document.getElementById('timeContainer');
    const slotContainer = document.getElementById('slotContainer');

    // Reset visibility
    timeContainer.style.display = 'none';
    slotContainer.style.display = 'none';

    if (bookingType === 'halfDay') {
        slotContainer.style.display = 'block'; // Show slot options for half day
    } else if (bookingType === 'hourly') {
        timeContainer.style.display = 'block'; // Show time input for hourly booking
    }
});

document.getElementById('bookingForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form values
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('email').value;
    const guests = document.getElementById('guests').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const slot = document.getElementById('slot').value;
    const bookingType = document.getElementById('bookingChoice').value;

    // Display confirmation message
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