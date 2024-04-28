const teamMembers = {
    "7709191063": "Pankaj Korkalai (Member)",
    "8382064014": "Yashveer Singh (Owner)",
    // Add more members as needed
    
  };
  
  function verifyNumber() {
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const resultDiv = document.getElementById('result');
  
    if (teamMembers.hasOwnProperty(phoneNumber)) {
      resultDiv.innerHTML = `
        <p>${teamMembers[phoneNumber]} is a Trusted Member from My Team.</p>
      `;
      resultDiv.style.color = 'green';
    } else {
      resultDiv.innerHTML = `
        <p>It must be Fraud. This person is Not from My Team.</p>
      `;
      resultDiv.style.color = 'red';
    }
  }

  