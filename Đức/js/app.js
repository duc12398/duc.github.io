document.addEventListener('DOMContentLoaded', () => {
    const name = document.getElementById('name');
    const mail = document.getElementById('mail');
    const subject = document.getElementById('subject');
    const content = document.getElementById('content');
    const submit = document.getElementById('submit');
    const notification = document.getElementById('notification');

    submit.addEventListener('click', (e) => {
        e.preventDefault();
        
        const data = {
            name: name.value,
            mail: mail.value,
            subject: subject.value,
            content: content.value,
        };

        postGoogle(data);
    });

    async function postGoogle(data) {
        const formURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSe_UtnwwC4zPxOdIM0CsTHmf_7YKicWumfsoBfvbePDmFTVUQ/formResponse";
        const formData = new FormData();
        formData.append('entry.936804611', data.name); // Thay thế đúng với entry ID trong Google Forms
        formData.append('entry.919214413', data.mail); // Thay thế đúng với entry ID trong Google Forms
        formData.append('entry.1609452452', data.subject); // Thay thế đúng với entry ID trong Google Forms
        formData.append('entry.1656630193', data.content); // Thay thế đúng với entry ID trong Google Forms

        try {
            const response = await fetch(formURL, {
                method: 'POST',
                mode: 'no-cors', // 'no-cors' để không bị chặn bởi chính sách CORS
                body: formData,
            });

            if (response) {
                console.log('Form successfully submitted');
                alert('Gửi Thành Công')
            } else {
                console.log('Error submitting the form');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
});