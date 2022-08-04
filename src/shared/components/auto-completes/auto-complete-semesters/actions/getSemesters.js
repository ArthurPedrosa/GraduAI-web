import api from "$shared/services/api";

const getSemesters = async () => {
  try {
    const response = await api.get("/analysis/semesters");

    return response.data;
  } catch (err) {
    if (err.response.data) throw err.response.data;

    throw new Error(err);
  }
};

export default getSemesters;
