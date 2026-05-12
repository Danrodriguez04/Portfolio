
export class EmailService {

    async sendMessage(emailDto){
        const response = await fetch(`http://localhost:8080/api/email`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(emailDto)
        });

        return await response.json();
    }

}