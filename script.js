document.addEventListener('DOMContentLoaded', function () {
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
});
