import { typeOfSearch, searchInput } from "./script.js";

export const filterUsers = (usersList) => {
  const searchValue = searchInput.value.toLowerCase();
  const searchType = typeOfSearch.value;

  return usersList.filter((user) =>
    user[searchType].toLowerCase().includes(searchValue)
  );
};

export const searchForm = () => {
  searchInput.addEventListener("input", () => {
    userTable(filterUsers(usersList));
  });

  typeOfSearch.addEventListener("input", () => {
    userTable(filterUsers(usersList));
  });
};
