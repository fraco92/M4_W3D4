import { userTable } from "./script.js";

const typeOfSearch = document.getElementById("type-of-search");
const searchInput = document.getElementById("search-input");

const filterUsers = (usersList) => {
  const searchValue = searchInput.value.toLowerCase();
  const searchType = typeOfSearch.value;

  return usersList.filter((user) =>
    user[searchType].toLowerCase().includes(searchValue)
  );
};

export const searchForm = (usersList) => {
  searchInput.addEventListener("input", () => {
    userTable(filterUsers(usersList));
  });

  typeOfSearch.addEventListener("input", () => {
    userTable(filterUsers(usersList));
  });
};
