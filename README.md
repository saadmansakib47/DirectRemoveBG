# DirectRemoveBG
![DirectRemoveBGNewIcon](https://github.com/saadmansakib47/DirectRemoveBG/assets/134169023/95838195-6552-4efe-a207-520e6667de7e)

## Overview

DirectRemoveBG is a browser extension which automates the process of removing backgrounds from images using the remove.bg API. This documentation provides guidelines on installing, configuring, and using the extension effectively.

## Setup

### Prerequisites

- Google Chrome browser
- Open an account and Obtain a remove.bg API key from [remove.bg](https://www.remove.bg/api).

## Installation

1. Download the extension package from [GitHub repository link].
2. Unzip the package to a local directory.
3. Open Google Chrome and go to `chrome://extensions`.
4. Enable **Developer mode** in the top right corner.
![s4](https://github.com/saadmansakib47/DirectRemoveBG/assets/134169023/f18798c5-fa74-4c2f-994a-48b5353fb130)

5. Click on **Load unpacked** and select the unzipped extension directory.
![s5](https://github.com/saadmansakib47/DirectRemoveBG/assets/134169023/362c5f4f-649b-4856-8cf3-6776f28dbbb1)


## Usage

### Uploading an Image

1. Click on the extension icon in the browser toolbar.

![x1](https://github.com/saadmansakib47/DirectRemoveBG/assets/134169023/071043d3-b76d-4fe2-9dba-bdbb894a1ced)

2. Select **Upload Image** and choose the image file you want to process.

![x2](https://github.com/saadmansakib47/DirectRemoveBG/assets/134169023/515eb5ef-568e-4a8b-8d1b-4ba1e73663a1)


### Processing with remove.bg API

1. The extension will automatically send the uploaded image to remove.bg API for processing.
2. Monitor the status bar for processing updates.

### Downloading the Processed Image

1. Once processing is complete, click **Download Image** to save the processed image with the background removed.

## Configuration Options

- By default, the extension uses PNG format for processed images.
- Configure the image format and other settings in the extension options menu.

## Error Handling

- **Failed to Remove Background**: Check API key validity and internet connection.
- **Image Upload Error**: Ensure image format is supported and file size is within limits.

## Resources

- [remove.bg API Documentation](https://www.remove.bg/api)

## Examples

### Example 1: Removing Background from an Image

```javascript
// Example JavaScript code snippet for using the extension
// Replace 'YOUR_REMOVE_BG_API_KEY' with your actual remove.bg API key

const apiKey = 'YOUR_REMOVE_BG_API_KEY';
const imageUrl = 'URL_OF_YOUR_IMAGE_TO_REMOVE_BACKGROUND';

fetch('https://api.remove.bg/v1.0/removebg', {
  method: 'POST',
  headers: {
    'X-Api-Key': apiKey
  },
  body: {
    image_file: imageUrl
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error('Failed to remove background');
  }
  return response.blob();
})
.then(blob => {
  // Handle the processed image blob (e.g., download or display)
})
.catch(error => {
  console.error('Error:', error);
});

```

## FAQs

### Q: How do I obtain a remove.bg API key?
A: Visit [remove.bg](https://www.remove.bg/) and sign up for an API key.

### Q: Can I process multiple images simultaneously?
A: The extension currently supports processing one image at a time.

## Support

For technical support or inquiries, please contact us at [saadmansakib@iut-dhaka.edu](mailto:saadmansakib@iut-dhaka.edu).

