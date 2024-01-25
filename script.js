import { searchForm } from "./helper.js";

const usersTable = document.getElementById("users-table");

export const userTable = (usersList) => {
  usersTable.innerHTML = usersList
    .map((user, index) => {
      return `<tr>
  <th scope="row">${index + 1}</th>
  <td>${user.name}</td>
  <td>${user.username}</td>
  <td>${user.email.toLowerCase()}</td>
  <td>${user.address.city}</td>
  <td><a href="#">${user.website}</a></td>
</tr>`;
    })
    .join("");

  console.log(usersList);
};

const setUpTable = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersList = await response.json();

    searchForm(usersList);

    userTable(usersList);
  } catch (error) {
    console.log(error);
  }
};

setUpTable();
