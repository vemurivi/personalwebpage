<template>
    <div class="contact-section">
        <div class="contact-form">
            <h2>Get in touch</h2>
            <div class="email-section">
                <p>Email: <a href="mailto:vemuri.vi@gmail.com">vemuri.vi@gmail.com</a></p>
            </div>
            <form @submit.prevent="submitForm">
                <div class="form-group">
                    <label for="name">Your Full Name:</label>
                    <input type="text" v-model="name" id="name" required />
                </div>
                <div class="form-group">
                    <label for="email">Your Email:</label>
                    <input type="email" v-model="email" id="email" required />
                </div>
                <div class="form-group">
                    <label for="message">Your Message:</label>
                    <textarea v-model="message" id="message" required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    </div>
</template>

<script>
import emailjs from 'emailjs-com';
export default {
    name: 'Contact',
    data() {
        return {
            name: '',
            email: '',
            message: ''
        }
    },
    methods: {
        submitForm() {
            const serviceID = 'service_yzd2g1a';
            const templateID = 'template_xsdbcuj';
            const userID = '-t8eMawbXQm_BacB3';
            const templateParams = {
                from_name: this.name,
                from_email: this.email,
                message: this.message,
            };

            emailjs.send(serviceID, templateID, templateParams, userID)
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    // Add any success actions here
                }, (error) => {
                    console.log('FAILED...', error);
                    // Add any error actions here
                });
        }
    }

}
</script>

<style scoped>
.contact-section {
    background-color: #f3e8ff;
    /* Light purple that complements form design */
    padding: 20px;

}

.contact-form {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    max-width: 60;
    width: 800px;
    height: 400px;
    margin: auto;
}

.form-group {
    margin-bottom: 15px;
    display: flex;
    align-items: center;
}

.form-group label {
    margin-right: 10px;
    min-width: 100px;
    /* Adjust based on your label width */
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    background-color: #4A4E69;
    /* Dark lavender */
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #373F51;
}
</style>
