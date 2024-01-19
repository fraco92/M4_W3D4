const typeOfSearch = document.getElementById("type-of-search");
const searchInput = document.getElementById("search-input");
const usersTable = document.getElementById("users-table");

const getUserData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersList = await response.json();

    usersTable.innerHTML = usersList
      .map((user) => {
        return `<tr>
        <th scope="row">${user.id}</th>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.address.city}</td>
        <td><a href="#">${user.website}</a></td>
      </tr>`;
      })
      .join("");

    console.log(usersList);
  } catch (error) {
    console.log(error);
  }
};

getUserData();
