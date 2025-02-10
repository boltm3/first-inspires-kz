import PropTypes from "prop-types";

const Button = ({ label, value, selected, onClick }) => (
  <div
    onClick={() => onClick(value)}
    className={`w-[167px] h-[52px] px-6 py-2.5 rounded-xl border-2 flex justify-center items-center shadow-lg transition-transform duration-200 ease-in-out transform hover:scale-105 ${
      selected === value ? "bg-[#0066b3] text-white" : "bg-white text-black border-[#0066b3]"
    }`}
  >
    <div className="text-base font-semibold font-['Montserrat']">{label}</div>
  </div>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default function SelectButton({ selected, setSelected }) {
  return (
    <div className="flex gap-5 justify-center items-center">
     <Button label="Оқушылар" value="students" selected={selected} onClick={setSelected} />  
<Button label="Ата-аналар" value="parents" selected={selected} onClick={setSelected} />  
<Button label="Мұғалімдер" value="educators" selected={selected} onClick={setSelected} />  

    </div>
  );
}

SelectButton.propTypes = {
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
};
