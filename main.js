
document.getElementById('fetchProfile').addEventListener('click', function() {
    const username = document.getElementById('user').value;
    const url = `https://api.github.com/users/${username}`;

    fetch(url).then(Response => {
            if (!Response.ok) {
                throw new Error('User  not found');
            }
            return Response.json();
        }).then(info => {
            const profileInfo = `
                
                <img src="${info.avatar_url}" alt="${info.name}" width="100">
                <p><strong>Username:</strong> ${info.login}</p>
                <p><strong>Bio:</strong> ${info.bio || 'No bio available'}</p>
                <p><strong>Public Repos:</strong> ${info.public_repos}</p>
                <p><strong>Followers:</strong> ${info.followers}</p>
                <p><strong>Following:</strong> ${info.following}</p>
                <p><a href="${info.html_url}" target="_blank", >View Profile on GitHub</a></p>`;
            document.getElementById('profileInfo').innerHTML = profileInfo;
        }).catch(error => {
            const errorMessage = `<p style="color: red; background-color: white; width: 200px;border:solid; border-radius:10px;">${error.message}</p>`;
            document.getElementById('profileInfo').innerHTML = errorMessage;
        });
});