export const fetchBooks = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("x-apihub-key", ""); // Replace with your actual API key
    myHeaders.append("x-apihub-host", "Big-Book-API.allthingsdev.co");
    myHeaders.append("x-apihub-endpoint", "119056b9-68ee-424f-ad75-95f2664f9157");
  
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
  
    try {
      const response = await fetch("https://Big-Book-API.proxy-production.allthingsdev.co/search-books?query=books+about+wizards&earliest-publish-year=2022&latest-publish-year=2023&min-rating=0.8&max-rating=0.99&genres=nonfiction&authors=Charles+Dickens&isbn=9781781257654&oclc=864418200&sort=rating&sort-direction=DESC&offset=0&number=10", requestOptions);
  
      console.log('Response Status:', response.status);
      console.log('Response Headers:', [...response.headers]);
  
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching books:', error);
      throw error;
    }
  };
  