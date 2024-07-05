async function updateImage() {
    try {
        const apiUrl = 'https://randomuser.me/api/?results=5';
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Update the image src attribute
        // Hoard coded for now as it needs only 5 profile

        const name1 = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`;
        document.getElementById('name1').textContent = name1;
        document.getElementById('td-name-1').textContent = name1;
        document.getElementById('email1').textContent = data.results[0].email;
        document.getElementById('td-email-1').textContent = data.results[0].email;
        document.getElementById('dynamicImage1').src = data.results[0].picture.large;

        const name2 = `${data.results[1].name.title} ${data.results[1].name.first} ${data.results[1].name.last}`;
        document.getElementById('name2').textContent = name2;
        document.getElementById('td-name-2').textContent = name2;
        document.getElementById('dynamicImage2').src = data.results[1].picture.large;
        document.getElementById('email2').textContent = data.results[1].email;
        document.getElementById('td-email-2').textContent = data.results[1].email;

        const name3 = `${data.results[2].name.title} ${data.results[2].name.first} ${data.results[2].name.last}`;
        document.getElementById('name3').textContent = name3;
        document.getElementById('td-name-3').textContent = name3;
        document.getElementById('dynamicImage3').src = data.results[2].picture.large;
        document.getElementById('email3').textContent = data.results[2].email;
        document.getElementById('td-email-3').textContent = data.results[2].email;

        const name4 = `${data.results[3].name.title} ${data.results[3].name.first} ${data.results[3].name.last}`;
        document.getElementById('name4').textContent = name4;
        document.getElementById('td-name-4').textContent = name4;
        document.getElementById('dynamicImage4').src = data.results[3].picture.large;
        document.getElementById('email4').textContent = data.results[3].email;
        document.getElementById('td-email-4').textContent = data.results[3].email;


        const name5 = `${data.results[4].name.title} ${data.results[4].name.first} ${data.results[4].name.last}`;
        document.getElementById('name5').textContent = name5;
        document.getElementById('td-name-5').textContent = name5;
        document.getElementById('dynamicImage5').src = data.results[4].picture.large;
        document.getElementById('email5').textContent = data.results[4].email;
        document.getElementById('td-email-5').textContent = data.results[4].email;

    } catch (error) {
        console.error('Error fetching the image URL:', error);
    }
}
