export const saveForm = (data) => {
  localStorage.setItem("signupForm", JSON.stringify(data));
};

export const loadForm = () => {
  const data = localStorage.getItem("signupForm");
  return data ? JSON.parse(data) : null;
};
