export const Check = ({ isChecked }) => {
  return (
    <svg width="14" height="12" xmlns="http://www.w3.org/2000/svg">
      <path
        stroke={isChecked ? '#18171F' : '#24232C'}
        strokeWidth="3"
        fill="none"
        d="M1 5.607 4.393 9l8-8"
      />
    </svg>
  );
};
