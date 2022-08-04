import api from "$shared/services/api";

const getTickets = async () => {
  try {
    const response = await api.get("/analysis/tickets");

    return response.data;
  } catch (err) {
    if (err.response.data) throw err.response.data;

    throw new Error(err);
  }
};

export default getTickets;
