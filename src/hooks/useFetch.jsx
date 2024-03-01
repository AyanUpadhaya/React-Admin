const useFetch = () => {
  const fetchData = async (url) => {
    const res = await fetch(url, {
      method: "GET",
    });

    if (!res.ok) {
      throw new Error(`Error fetching data from ${url}`);
    }

    return res.json();
  };

  const postData = async (url, data, type) => {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      if (type == "login") {
        if (res.status == 401) {
          throw new Error(`Invalid email or password`);
        }else if (res.status == 404) {
          throw new Error(`User not found`);
        } else {
          throw new Error(`Login failed`);
        }
      }

      if (type == "register") {
        if (res.status == 400) {
          throw new Error(`Username is already in used`);
        }else if (res.status == 404) {
          throw new Error(`Server Not Found`);
        } else {
          throw new Error(`Error posting data to ${url}`);
        }
      } 
    }

    return res.json();
  };

  return { fetchData, postData };
};

export default useFetch;
