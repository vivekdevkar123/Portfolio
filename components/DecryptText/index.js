import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDencrypt } from "use-dencrypt-effect";

const DecryptText = ({
    values = ['Empty'],
    delay = 5000
}) => {
  const [result, dencrypt] = useDencrypt(); // Fixed here

  useEffect(() => {
    let i = 1;

    const action = setInterval(() => {
      dencrypt(values[i]);
      i = i === values.length - 1 ? 0 : i + 1;
    }, delay);

    return () => clearInterval(action);
  }, [values, delay, dencrypt]); // Add dependencies to avoid React warnings

  return <>{result || values[0]}</>;
};

DecryptText.propTypes = {
  values: PropTypes.array,
  delay: PropTypes.number
};

export default DecryptText;
