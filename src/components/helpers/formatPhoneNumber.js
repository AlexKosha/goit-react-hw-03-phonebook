export const formatPhoneNumber = value => {
  return value.replace(/(\d{3})(\d{2})(\d{2})/g, '$1-$2-$3');
};
