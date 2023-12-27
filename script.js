document.addEventListener('DOMContentLoaded', function () {
    const db = firebase.firestore();

    document.getElementById('birthdate').addEventListener('input', checkAge);

    function checkAge() {
        const birthdateInput = document.getElementById('birthdate').value;

        if (birthdateInput.length === 10) {
            const birthdate = new Date(birthdateInput);
            const currentDate = new Date();
            const age = currentDate.getFullYear() - birthdate.getFullYear();

            if (age < 18) {
                showGuardianFields();
            } else {
                hideGuardianFields();
            }
        }
    }

    function showGuardianFields() {
        const guardianFields = document.querySelectorAll('.guardian-fields');
        guardianFields.forEach(field => {
            field.style.display = 'block';
        });
    }

    function hideGuardianFields() {
        const guardianFields = document.querySelectorAll('.guardian-fields');
        guardianFields.forEach(field => {
            field.style.display = 'none';
        });
    }

    document.getElementById('signupButton').addEventListener('click', function () {
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const birthdate = document.getElementById('birthdate').value;
        const password = document.getElementById('password').value;
        const guardianName = document.getElementById('guardianName').value;
        const guardianEmail = document.getElementById('guardianEmail').value;
        const guardianPhone = document.getElementById('guardianPhone').value;

        db.collection('users').add({
            fullName: fullName,
            email: email,
            phone: phone,
            birthdate: birthdate,
            guardianName: guardianName,
            guardianEmail: guardianEmail,
            guardianPhone: guardianPhone
        })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
    });
});
