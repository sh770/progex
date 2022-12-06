function login() {
    // Get user input from form
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Read JSON file
    var reader = new FileReader();
    reader.onload = function() {
      // Parse JSON data
      var data = JSON.parse(reader.result);
  
      // Check if user input matches JSON data
      if (username === data.username && password === data.password) {
        // Redirect to home page
        window.location.href = "index.html";
      } else {
        // Redirect to login page
        window.location.href = "login.html";
      }
    }
    reader.readAsText('data_base.json');
  }
  