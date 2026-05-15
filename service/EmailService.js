
export class EmailService {

    async sendMessage(emailDto){
        const response = await fetch(`http://api.danielspace.com:8080/EmailSender-0.0.1/api/email`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(emailDto)
        });

        return await response.json();
    }

}