function compareArrays(arr1, arr2) {
    if (arr1.length >= arr2.length) {
      return arr1.every((item, idx) => {
        return item === arr2[idx];
      });
    } else {
      return arr2.every((item, idx) => {
        return item === arr1[idx];
      });
    }
  }
  
  function getUsersNamesInAgeRange(users, gender) {
    let usersAgeRange;
    if (users.length !== 0 && (gender === "мужской" || gender === "женский")) {
      const usersNames = users.filter((users) => {
        return users.gender === gender;
      });
      const usersAge = usersNames.map((item) => {
        return item.age;
      });
      usersAgeRange = usersAge.reduce((acc, item, idx, arr) => {
        acc += item;
        if (idx === arr.length - 1) {
          return acc / arr.length;
        } else {
          return acc;
        }
      });
    } else {
      usersAgeRange = 0;
    }
    return usersAgeRange;
  }