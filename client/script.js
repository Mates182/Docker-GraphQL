const input = document.getElementById('query');
const btn = document.getElementById('btn');
const output = document.getElementById('output');
const endpoint = document.getElementById('endpoint');

// Internal EC2 IP or external URL of the GraphQL server
btn.addEventListener('click', (e) => {
    e.preventDefault()
    const query = input.value;
    fetch(endpoint.value, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: query }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        output.innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        output.innerText = 'Error: ' + error.message;
    });
});
