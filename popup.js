document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('uploadButton').addEventListener('click', () => {
        const fileInput = document.getElementById('uploadInput');
        const file = fileInput.files[0];
        if (!file) {
            alert('Please select an image file.');
            return;
        }
        const formData = new FormData();
        formData.append('image_file', file);

        fetch('https://api.remove.bg/v1.0/removebg', {
            method: 'POST',
            headers: {
                'X-Api-Key': 'Remove.bg_API'  // Replace it with your actual API key
            },
            body: formData
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to remove background');
                }
                return response.blob();
            })
            .then(blob => {
                const url = URL.createObjectURL(blob);
                chrome.downloads.download({
                    url: url,
                    filename: 'background-removed-image.png',
                    saveAs: true
                });
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Failed to remove background.');
            });
    });
});
