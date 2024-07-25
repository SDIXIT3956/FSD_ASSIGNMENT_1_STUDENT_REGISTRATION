document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const motherName = document.getElementById('motherName').value;
    const fatherName = document.getElementById('fatherName').value;
    const gender = document.getElementById('gender').value;
    const phone = document.getElementById('phone').value;
    const dob = document.getElementById('dob').value;
    const address = document.getElementById('address').value;
    const state = document.getElementById('state').value;
    const city = document.getElementById('city').value;
    const pincode = document.getElementById('pincode').value;
    const email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    const nameRegex = /^[A-Za-z\s]+$/;

    // Perform validation (simple example)
    if (firstName === '' || lastName === '' || motherName === '' || fatherName === '' || gender === '' || phone === '' || dob === '' || address === '' || state === '' || city === '' || pincode === '' || email === '') {
        alert('Please fill in all fields.');
        return;
    }

    if (!nameRegex.test(firstName) || !nameRegex.test(lastName) || !nameRegex.test(motherName) || !nameRegex.test(fatherName)) {
        alert('Names should only contain letters and spaces.');
        return;
    }
    
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    } 


    alert('Registration successful!');

    // Display the form data (for demonstration purposes)
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Mother\'s Name:', motherName);
    console.log('Father\'s Name:', fatherName);
    console.log('Gender:', gender);
    console.log('Phone:', phone);
    console.log('Date of Birth:', dob);
    console.log('Address:', address);
    console.log('State:', state);
    console.log('City:', city);
    console.log('Pincode:', pincode);
    console.log('Email:', email);


    // Clear the form
    document.getElementById('registrationForm').reset();
});
