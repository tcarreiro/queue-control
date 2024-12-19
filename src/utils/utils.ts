export const scrollToTop = () => window.scrollTo(0,0);

export const dateInterval = (val: string) => {
  const today = new Date();
  const dob = new Date(val);
  let time = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
    time--;
  }

  return time;
};

export const validateCpf = (val: string|number) => {
  const cpfRegex = /^\d{11}$/;
  return cpfRegex.test(val.toString().replace(/\D/g, ''));
};


export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};
