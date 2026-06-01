
export class EmailService {

    async sendMessage(emailDto){
        const response = await fetch(`https://www.danielsspace.com/api/email`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(emailDto)
        });

        return response.status === 200;
    }

}