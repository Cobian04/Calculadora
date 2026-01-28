import { useState } from 'react';
import { evaluate } from 'mathjs';

export const useCalculator = () => {
  const [formula, setFormula] = useState('');
  const [result, setResult] = useState('');

  const buildFormula = (numberString: string) => {
    // Evitar múltiples puntos decimales
    if (numberString === '.' && formula.includes('.')) return;
    setFormula(formula + numberString);
  };

  const clean = () => {
    setFormula('');
    setResult('');
  };

  const deleteLast = () => {
    setFormula(formula.slice(0, -1));
  };

  const calculateResult = () => {
    try {
      const finalResult = evaluate(formula);
      setResult(finalResult.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return {
    formula,
    result,
    buildFormula,
    clean,
    deleteLast,
    calculateResult,
  };
};