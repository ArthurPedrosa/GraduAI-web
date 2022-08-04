import api from "$shared/services/api";

const getReservations = async () => {
  try {
    const response = await api.get("/analysis/reservations");

    return response.data;
  } catch (err) {
    if (err.response.data) throw err.response.data;

    throw new Error(err);
  }
};

export default getReservations;
